import React from 'react';
import { graphql } from 'gatsby'
import moment from 'moment';
import 'moment-timezone'

import Layout from '../components/layout/Layout'
import Session from '../components/entities/Session'

const SessionsPage = ({ data }) => {
  const sessions = data.allNodeSession.edges;
  let dayPrev;
  let timePrev;

  // Sort sessions by time then by room.
  sessions.sort(function (a, b) {
    if (a.node.time > b.node.time) return 1;
    if (a.node.time < b.node.time) return -1;
    if (a.node.r.room && b.node.r.room) {
      if (a.node.r.room.weight > b.node.r.room.weight) return 1;
      if (a.node.r.room.weight < b.node.r.room.weight) return -1;
    }
    return 0;
  });

  return (
    <Layout>
      <div className="sessions">
        {sessions.map((session, i) => {
          const node = session.node;
          const t = moment(node.time)
          const time = t.tz('America/New_York').format('h:mm a');
          const day = t.tz('America/New_York').format('dddd, MMMM D');
          let output = [];
          console.log(session, day);
          if (day !== dayPrev) {
            output.push(<div className="sessions-day" key={day}>{day}</div>);
          }

          if (time !== timePrev || day !== dayPrev) {
            output.push(<div className="sessions--time" key={time}>{time}</div>);
          }

          output.push(
            <Session key={i} {...session}/>
          );

          dayPrev = day;
          timePrev = time;

          return output;
        })}
      </div>
    </Layout>
  )
}

export default SessionsPage

export const query = graphql`
  query SessionsPageQuery {
    allNodeSession(sort: {fields:[field_time], order: ASC}) {
      edges {
        node {
          title
          path {
            alias
          }
          field_session_length
          datetime:field_time(formatString: "ddd")
          day:field_time(formatString: "dd")
          time:field_time
          r:relationships {
            room: field_room {
              name
              weight
            }
            speaker:field_speakers {
              title
              relationships {
                field_company {
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`

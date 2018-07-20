import React from 'react';
import GatsbyLink from 'gatsby-link'
import styled from 'styled-components'
import Link from '../components/link/link'
import { notDeepEqual } from 'assert';
import moment from 'moment'

const SessionsPage = ({ data }) => {
  const sessions = data.allNodeSession.edges;
  let dayPrev;
  let timePrev;

  // Sort sessions by time then by room.
  sessions.sort(function (a, b) {
    if (a.node.time > b.node.time) return 1;
    if (a.node.time < b.node.time) return -1;
    if (a.node.r.room.weight > b.node.r.room.weight) return 1;
    if (a.node.r.room.weight < b.node.r.room.weight) return -1;
  });

  return (
    <div className="sessions">
      {sessions.map((session, i) => {
        const node = session.node;
        const speakers = node.r.speaker;
        const room = node.r.room.name;
        const time = moment(node.time).utcOffset(-10).format('h:mm a');
        const day = moment(node.time).utcOffset(-10).format('dddd, MMMM D');
        let speakerText = '';
        let output = [];

        if (speakers.length) {
          speakerText = speakers.map((speaker, j) => {
            return (
              <SessionSpeaker key={j}>{speaker.title}</SessionSpeaker>
            )
          })
        }

        if (day !== dayPrev) {
          output.push(<Day key={day}>{day}</Day>);
        }

        if (time !== timePrev || day !== dayPrev) {
          output.push(<Time key={time}>{time}</Time>);
        }

        output.push(
          <Session key={i} className={'session ' + (time !== timePrev ? "first" : '')}>
            <SessionTitle>
              <SessionLink to={node.path.alias}>
                {node.title}
              </SessionLink>
            </SessionTitle>
            <SessionSpeakers>
              {speakerText}
            </SessionSpeakers>
            <SessionRoom>Room: {room}</SessionRoom>
            <SessionLength>{node.field_session_length} minutes</SessionLength>
          </Session>
        );

        dayPrev = day;
        timePrev = time;

        return output;
      })}
    </div>
  )
}

const SessionLink = styled(Link)`
  text-decoration: none;
  color: #0b5394;
  &:visited {
    color: #0b5394;
  }
`

const Session = styled.div`
  padding: 1em 0;
  border-top: 1px solid #f3f3f3;
  &.first {
    border-top: none;
  }
`
const SessionTitle = styled.h2`
  font-size: 1.1em;
  margin-bottom: .25em;
`
const SessionSpeakers = styled.div``
const SessionSpeaker = styled.div``
const SessionRoom = styled.div`
  font-size: .8em;
  font-weight: bold;
`
const SessionLength = styled.div`
  font-size: .8em;
`
const Day = styled.div`
  font-size: 2em;
  text-align: center;
`
const Time = styled.div`
  font-size: 1.5em;
  text-align: center;
  width: 100%;
  background-color: #f3f3f3;
  padding: 5px;
  margin: .5em 0;
`

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

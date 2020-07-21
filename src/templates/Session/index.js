import React from 'react'
import {
  graphql
} from 'gatsby'
import moment from 'moment'
import 'moment-timezone'

import Layout from '../../components/layout/Layout'
import Speaker from '../../components/fields/Speaker'
import Link from '../../components/fields/Link'

import './style.scss'

const SessionTemplate = ({ data }) => {
  const node = data.nodeSession;

  const { room, speakers } = node.r;

  const monthday = moment(node.time)
    .tz('America/New_York')
    .format('MMMM DD');

  const time = moment(node.time)
    .tz('America/New_York')
    .format('h:mma');

  return (
    <Layout>
      <div className="session session-page container">
        <h1 className="session--title">{node.title}</h1>
        {speakers && (
          <div className="session--speakers-container">
            {speakers.map((speaker, key) => (
              <Speaker key={key} {...speaker} />
            ))}
          </div>
        )}
        {node.time && (
          <div className = "session--time-date">
            <span className = "session--details-label">When: </span> {monthday} @{time}ET
          </div>
        )}
        {node.hopin && (
          <div classname = "session-room">
            <a href = {node.hopin.uri} target = "_blank" > Hopin Room </a>
          </div>
        )}
        {room && !node.hopin && (
          <div className = "session--room">
            <span className = "session--details-label" > Where: </span> {room.name}
          </div>
        )}
        <hr className = "session--details-divider" />
        <div className = "session--summary"
          dangerouslySetInnerHTML = {{__html: node.body ? node.body.processed : '',}}
        />
        <Link to="/sessions">&larr; Back to Sessions</Link>
      </div>
    </Layout>
  )
}

export default SessionTemplate

export const query = graphql`
  query SessionTemplate($slug: Int!) {
    nodeSession(drupal_internal__nid: { eq: $slug }) {
      title
      datetime: field_time(formatString: "dd")
      day: field_time(formatString: "dd")
      time: field_time
      hopin: field_hopin_room {
        uri
      }
      r: relationships {
        room: field_room {
          name
        }
        speakers: field_speakers {
          title
          r: relationships {
            field_company {
              title
            }
            field_photo {
              localFile {
                childImageSharp {
                  fixed(width: 100, height: 100) {
                    src
                    srcSet
                    aspectRatio
                  }
                }
              }
            }
          }
        }
      }
      field_session_length
      body {
        processed
      }
      path {
        alias
      }
      field_time
    }
  }
`

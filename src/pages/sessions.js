import React, { useState } from 'react'
import { graphql } from 'gatsby'
import moment from 'moment'

import Layout from '../components/layout/Layout'
import Session from '../components/entities/Session'

const SessionsPage = ({ data }) => {
  const allSessions = data.allNodeSession.edges
  const [sessions, setSessions] = useState(allSessions)
  const [day, setDay] = useState('17')

  const filterSession = e => {
    const value = e.currentTarget.value
    let out = allSessions
    if (value != 'all') {
      out = allSessions.filter(({ node }) => {
        return node.track === value
      })
    }
    setSessions(out)
  }

  const switchDay = e => {
    setDay(e.currentTarget.value)
  }

  return (
    <Layout>
      <div className="sessions--sort">
        <button className="button" value="all" onClick={filterSession}>
          All
        </button>
        <button
          className="button"
          value="session-track-buisiness"
          onClick={filterSession}
        >
          Business/CXO
        </button>
        <button
          className="button"
          value="session-track-drupal"
          onClick={filterSession}
        >
          Decoupled Drupal
        </button>
        <button
          className="button"
          value="session-track-headless"
          onClick={filterSession}
        >
          Headless CMS
        </button>
        <button
          className="button"
          value="session-track-javascript"
          onClick={filterSession}
        >
          JavaScript and JAMstack
        </button>
        <button
          className="button"
          value="session-track-people"
          onClick={filterSession}
        >
          People and Community
        </button>
      </div>
      <div className="sessions">
        <div className="sessions--day-nav">
          <button
            value={17}
            onClick={switchDay}
            className={`button ${day === '17' && 'active'}`}
          >
            July 17th
          </button>
          <button
            value={18}
            onClick={switchDay}
            className={`button ${day === '18' && 'active'}`}
          >
            July 18th
          </button>
        </div>
        <div className={`sessions--day-list ${day === '17' && 'active'}`}>
          <h3>July 17th</h3>
          {sessions
            .filter(session => {
              return moment(session.node.time).format('DD') === '17'
            })
            .map(session => (
              <Session key={`session-${session.node.nid}`} {...session} />
            ))}
        </div>

        <div className={`sessions--day-list ${day === '18' && 'active'}`}>
          <h3>July 18th</h3>
          {sessions
            .filter(session => {
              return moment(session.node.time).format('DD') === '18'
            })
            .map(session => (
              <Session key={`session-${session.node.nid}`} {...session} />
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default SessionsPage

export const query = graphql`
  query SessionsPageQuery {
    allNodeSession(
      sort: {
        fields: [field_time, relationships___field_room___weight]
        order: ASC
      }
    ) {
      edges {
        node {
          nid: drupal_internal__nid
          title
          path {
            alias
          }
          field_session_length
          datetime: field_time(formatString: "h:mm:a")
          day: field_time(formatString: "d")
          time: field_time
          track: field_session_track
          r: relationships {
            room: field_room {
              name
              tid: drupal_internal__tid
            }
            speaker: field_speakers {
              nid: drupal_internal__nid
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

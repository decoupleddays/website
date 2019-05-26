import React, { useState } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/Layout'
import Session from '../components/entities/Session'

const SessionsPage = ({ data }) => {
  const allSessions = data.allNodeSession.edges
  const [sessions, setSessions] = useState(allSessions)

  const filterSession = e => {
    const value = e.currentTarget.value
    if (value === 'all') {
      setSessions(allSessions)
      return
    }
    const out = allSessions.filter(({ node }) => {
      return node.track === value
    })
    setSessions(out)
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
        {sessions.map((session, i) => {
          return <Session key={`session-${session.node.nid}`} {...session} />
        })}
      </div>
    </Layout>
  )
}

export default SessionsPage

export const query = graphql`
  query SessionsPageQuery {
    allNodeSession(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          nid: drupal_internal__nid
          title
          path {
            alias
          }
          field_session_length
          datetime: field_time(formatString: "ddd")
          day: field_time(formatString: "dd")
          time: field_time
          track: field_session_track
          r: relationships {
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

import React, { useState } from 'react'
import { graphql } from 'gatsby'
// import moment from 'moment'

// @todo: put day filter back on on when schedule is done.
//   * Uncomment lines 3, 14, 29 - 31 and 99 - 136.
//   * Comment out lines 91 - 97.

import Layout from '../components/layout/Layout'
import Session from '../components/entities/Session'

const SessionsPage = ({ data }) => {
  const allSessions = data.allNodeSession.edges
  const [sessions, setSessions] = useState(allSessions)
  // const [day, setDay] = useState('22')
  const [sort, setSort] = useState('all')

  const filterSession = e => {
    const value = e.currentTarget.value
    let out = allSessions
    if (value !== 'all') {
      out = allSessions.filter(({ node }) => {
        return node.track === value
      })
    }
    setSort(value)
    setSessions(out)
  }

  /* const switchDay = e => {
    setDay(e.currentTarget.value)
  } */

  return (
    <Layout>
      <div className="sessions--sort">
        <span className="sessions--sort-label">Show: </span>
        <button
          className={`button${sort === 'all' ? ' active' : ''}`}
          value="all"
          onClick={filterSession}
        >
          All
        </button>
        <button
          className={`button${
            sort === 'session-track-buisiness' ? ' active' : ''
          }`}
          value="session-track-buisiness"
          onClick={filterSession}
        >
          Business/CXO
        </button>
        <button
          className={`button${
            sort === 'session-track-cms' ? ' active' : ''
          }`}
          value="session-track-cms"
          onClick={filterSession}
        >
          Traditional CMS
        </button>
        <button
          className={`button${
            sort === 'session-track-headless' ? ' active' : ''
          }`}
          value="session-track-headless"
          onClick={filterSession}
        >
          Headless CMS
        </button>
        <button
          className={`button${
            sort === 'session-track-javascript' ? ' active' : ''
          }`}
          value="session-track-javascript"
          onClick={filterSession}
        >
          JavaScript and JAMstack
        </button>
        <button
          className={`button${
            sort === 'session-track-people' ? ' active' : ''
          }`}
          value="session-track-people"
          onClick={filterSession}
        >
          People and Community
        </button>
      </div>
      <div className="sessions">
        <div className={`sessions--day-list active`}>
          <h3>Accepted Sessions</h3>
          {sessions
            .map(session => (
              <Session key={`session-${session.node.nid}`} {...session} />
          ))}
        </div>
        {/*
        <div className="sessions--day-nav">
          <button
            value={22}
            onClick={switchDay}
            className={`button ${day === '22' && 'active'}`}
          >
            July 22nd
          </button>
          <button
            value={23}
            onClick={switchDay}
            className={`button ${day === '23' && 'active'}`}
          >
            July 23rd
          </button>
        </div>
        <div className={`sessions--day-list ${day === '17' && 'active'}`}>
          <h3>July 22nd</h3>
          {sessions
            .filter(session => {
              return moment(session.node.time).format('DD') === '22'
            })
            .map(session => (
              <Session key={`session-${session.node.nid}`} {...session} />
            ))}
        </div>

        <div className={`sessions--day-list ${day === '18' && 'active'}`}>
          <h3>July 23rd</h3>
          {sessions
            .filter(session => {
              return moment(session.node.time).format('DD') === '23'
            })
            .map(session => (
              <Session key={`session-${session.node.nid}`} {...session} />
            ))}
            </div>*/}
      </div>
    </Layout>
  )
}

export default SessionsPage

export const query = graphql`
  query SessionsPageQuery {
    allNodeSession(
      filter: {status: {eq: true}, relationships: {field_tags: {elemMatch: {name: {eq: "2020"}}}}}
      sort: {
        fields: [field_time, relationships___field_room___weight, title]
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
            speakers: field_speakers {
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

import React, { useState } from 'react'
import { graphql } from 'gatsby'
import {Helmet} from 'react-helmet'
import moment from 'moment'
// import queryString from 'query-string';

import Layout from '../components/layout/Layout'
import Session from '../components/entities/Session'

const SessionsPage = ({data, location}) => {
  const allSessions = data.allNodeSession.edges
  const [sessions, setSessions] = useState(allSessions)

  //const q = queryString.parse(location.search);
  //const date = q.date === '15' ? q.date : '14';
  const [day, setDay] = useState('14');
  const [sort, setSort] = useState('all');

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

  const switchDay = e => {
    setDay(e.currentTarget.value)
  }

  return (
    <Layout>
      <Helmet><title>Sessions | Decoupled Days 2020</title></Helmet>
      <div className="container mx-auto sessions--sort">
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
      <div className="container mx-auto sessions">
        <div className="border-b-2 sessions--day-nav border-blue ">
          <button
            value={14}
            onClick={switchDay}
            className={`button${day === '14' ? ' active' : ''}`}
          >
            July 14th
          </button>
          <button
            value={15}
            onClick={switchDay}
            className={`button${day === '15' ? ' active' : ''}`}
          >
            July 15th
          </button>
        </div>
        <div>All times ET (UTC - 4)</div>
        <div className={`sessions--day-list ${day === '14' ? 'active' : ''}`}>
          <h3>July 14th</h3>
          {sessions
            .filter(session => {
              return moment(session.node.time).format('DD') === '14'
            })
            .map(session => (
              <Session key={`session-${session.node.nid}`} {...session} />
            ))}
        </div>

        <div className={`sessions--day-list ${day === '15' ? 'active' : ''}`}>
          <h3>July 15th</h3>
          {sessions
            .filter(session => {
              return moment(session.node.time).format('DD') === '15'
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
      filter: {status: {eq: true}, relationships: {field_tags: {elemMatch: {name: {eq: "2021"}}}}}
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

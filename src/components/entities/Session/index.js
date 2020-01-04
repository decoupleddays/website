import React from 'react'
import moment from 'moment'
import 'moment-timezone'

import Link from '../../fields/Link'

import './style.scss'

const Session = ({ node }) => {
  const monthday = moment(node.time)
      .tz('America/New_York')
      .format('MMMM DD');
  const time = moment(node.time)
    .tz('America/New_York')
    .format('h:mma');

  const tracks = {
    'session-track-buisiness': 'Business/CXO',
    'session-track-drupal': 'Decoupled Drupal',
    'session-track-headless': 'Headless CMS',
    'session-track-javascript': 'JavaScript and JAMstack',
    'session-track-people': 'People and Community',
  }

  const room = null
  return (
    <div className="session">
      <h2 className="session--title">
        <Link className="session--link" to={node.path.alias}>
          {node.title}
        </Link>
      </h2>
      {node.r.speakers && (
        <div className="session--speakers">
          {node.r.speakers.map(speaker => (
            <div
              className="session--speaker"
              key={`session-speaker-${speaker.nid}`}
            >
              {speaker.title}
            </div>
          ))}
        </div>
      )}
      {node.r.speakers.length ? <hr className="session--details-divider"/> : ''}
      {node.track && <div className="session--track">{tracks[node.track]}</div>}
      <div className="session--time-details">
        <span className="session--time-date">
          <span className="session--date">{monthday}</span>
          <span className="session--time">@{time}</span>
        </span>
        <span className="session--time-length">
          {node.field_session_length && <span>({node.field_session_length} minutes)</span>}
        </span>
      </div>
      <div className="session--room">{room ? `Room: ${room}` : ''}</div>
    </div>
  )
}

export default Session

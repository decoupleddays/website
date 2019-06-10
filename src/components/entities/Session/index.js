import React from 'react'
import moment from 'moment'
import 'moment-timezone'

import Link from '../../fields/Link'

import './style.scss'

const Session = ({ node }) => {
  const time = moment(node.time)
    .tz('America/New_York')
    .format('MMMM DD h:mma')

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
      {node.r.speaker && (
        <div className="session--speakers">
          {node.r.speaker.map(speaker => (
            <div
              className="session--speaker"
              key={`session-speaker-${speaker.nid}`}
            >
              {speaker.title}
            </div>
          ))}
        </div>
      )}
      <div className="session--time">{time}</div>
      <div className="session--room">{room ? `Room: ${room}` : ''}</div>
      <div className="session--length">
        {node.field_session_length && `${node.field_session_length} minutes`}
      </div>
      {node.track && <div className="session--track">{tracks[node.track]}</div>}
    </div>
  )
}

export default Session

import React from 'react'
// import moment from 'moment'
import 'moment-timezone'

import Link from '../../fields/Link'

import './style.scss'

const Session = ({ node }) => {
  // const t = node.time + 'Z'
  // const time = moment.tz(t, 'America/New_York').format('h:mm a');

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

      <div className="session--room">{room ? `Room: ${room}` : ''}</div>
      <div className="session--length">
        {node.field_session_length && `${node.field_session_length} minutes`}
      </div>
      {node.field_session_track && (
        <div className="session--track">{node.field_session_track}</div>
      )}
    </div>
  )
}

export default Session

import React from 'react'
// import moment from 'moment'
import 'moment-timezone'

import Link from '../../fields/Link'

import './style.scss';

const Session = (props) => {

  const node = props.node;
  // const t = node.time + 'Z'
  // const time = moment.tz(t, 'America/New_York').format('h:mm a');
  const speakers = null;
  const room = null;
  return(
    <div className="session">
      <h2 className="session-title">
        <Link className="session--link" to={node.path.alias}>
          {node.title}
        </Link>
      </h2>
      {speakers && (
        <div className="session--speakers">
          {speakers.map((speaker) => (
            <div className="session--speaker">
              {speaker.name}
            </div>
          ))}
        </div>
      )}

      <div className="session--room">{room ? `Room: ${room}` : ''}</div>
      <div className="session--length">
        {node.field_session_length ? `${node.field_session_length} minutes` : ''}
      </div>
    </div>
  )
}

export default Session;

import React from 'react'
import moment from 'moment'
import 'moment-timezone'
import Img from "gatsby-image"

import Link from '../../fields/Link'

import './style.scss';

const Session = ({ node }) => {
  const monthday = moment(node.time)
      .tz('America/New_York')
      .format('MMMM DD');

  const time = moment(node.time)
    .tz('America/New_York')
    .format('h:mma');

  // const { room } = node.r;

  const tracks = {
    'session-track-buisiness': 'Business/CXO',
    'session-track-drupal': 'Decoupled Drupal',
    'session-track-headless': 'Headless CMS',
    'session-track-cms': 'Traditional CMS',
    'session-track-javascript': 'JavaScript and JAMstack',
    'session-track-people': 'People and Community',
  };

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
        {node.day && node.time && (<span className="session--time-date">
          <span className="session--details-label">When:</span> {monthday} @{time} ET
        </span>)}
        <span className="session--time-length">
          {node.field_session_length && <span>&nbsp;({node.field_session_length} minutes)</span>}
        </span>
      </div>
        {node.r.sponsor && (
          <div className="session--sponsor">
            <h3>Brought to you by:</h3>
            <img src={node.r.sponsor.r.logo.localFile.cis.f.src} alt={node.r.sponsor.title} />
          </div>
        )}

      {/**room ?
        <div className="session--room">
          <span className="session--details-label">Where:</span> {room.name}
        </div>
        :
        ''
      */}
    </div>
  )
}

export default Session

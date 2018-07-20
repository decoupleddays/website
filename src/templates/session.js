import React from "react"
import GatsbyLink from 'gatsby-link'
import moment from 'moment'

import './session.scss'

const SessionTemplate = ({data}) => {
  const node = data.nodeSession
  const speakers = node.r.speakers
  const room = node.r.room.name
  const time = moment(node.time).utcOffset(-10).format("HH:mma")
  let speakerCode = ''
  if (speakers) {
    speakerCode = speakers.map((speaker, key) => (
      <div className="session--speaker" key={key}>
        {speaker.relationships.field_photo ?
          <div className="session--speaker-image"><img src={speaker.relationships.field_photo.localFile.childImageSharp.sizes.src} /></div>
         : ''}
        <div className="session--speaker-info">
          <h3>{speaker.title}</h3>
          {(speaker.relationships.field_company) ?
            (<div className="speaker-company">{speaker.relationships.field_company.title}</div>
          ):''}
        </div>
      </div>
    ))
  }
  return (
    <div className="session">
      <h1 className="session--title">{node.title}</h1>
      <h2>Speakers</h2>
      <div className="session--speakers">
        { speakerCode }
      </div>

      <div>{node.datetime} {time} Room: {room}</div>
      <div
        className="session-summary"
        dangerouslySetInnerHTML={{ __html:node.body.processed}}
      />
      <GatsbyLink to="/sessions">Back to Sessions</GatsbyLink>
    </div>
  );
}

export default SessionTemplate

export const query = graphql`
  query SessionTemplate($slug: Int!) {
    nodeSession(nid: {eq: $slug}) {
      title datetime:field_time(formatString: "dd")
      day:field_time(formatString: "dd")
      time:field_time
      r:relationships {
        room:field_room {
          name
        }
        speakers:field_speakers {
          title
          relationships {
            field_company { title }
            field_photo {
              localFile {
                childImageSharp {
                  sizes(maxWidth: 100) {
                    src
                  }
                }
              }
            }
          }
        }
      }
      field_session_length
      body { processed }
      path { alias }
      field_time
    }
  }
`

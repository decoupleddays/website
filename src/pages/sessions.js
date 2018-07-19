import React from 'react';
import GatsbyLink from 'gatsby-link'
import styled from 'styled-components'
import Link from '../components/link/link'
import { notDeepEqual } from 'assert';
import moment from 'moment'

const IndexPage = ({ data }) => {
  const sessions = data.allNodeSession.edges
  return (
    <div className="sessions">
      {sessions.map((session, i) => {
        const node = session.node
        const speakers = node.r.speaker;
        let speakerText = '';
        if (speakers.length) {
          speakerText = speakers.map((speaker, j) => {
            return (
              <SessionSpeaker key={j}>{speaker.title}</SessionSpeaker>
            )
          })
        }
        const room = node.r.room.name
        const time = moment(node.time).utcOffset(-10).format("HH:mma")
        return (
          <Session key={i}>
            <div>{node.datetime} {time} Room: {room}</div>
            <SessionTitle>
              <SessionLink to={node.path.alias}>
                {node.title}
              </SessionLink>
            </SessionTitle>
            <SessionSpeakers>
              {speakerText}
            </SessionSpeakers>
            <SessionLength>{node.field_session_length} minutes</SessionLength>
          </Session>
        )}
      )}
    </div>
  )
}

const SessionLink = styled(Link)`
  text-decoration: none;
  color: #0b5394;
  &:visited {
    color: #0b5394;
  }
`

const Session = styled.div`
  padding-bottom: 5px;
`
const SessionTitle = styled.h2`
  font-size: 1.1em;
  margin-bottom: .25em;
`
const SessionSpeakers = styled.div``
const SessionSpeaker = styled.div``
const SessionLength = styled.div`
  font-size: .8em;
  margin-bottom: .5em;
`
const SessionBody = styled.div`
  padding-bottom: 5px;
  strong {
    font-weight: 100 !important;
  }
`

export default IndexPage

export const query = graphql`
  query SessionsPageQuery {
    allNodeSession(sort: {fields:[field_time], order: ASC}) {
      edges {
        node {
          title
          path {
            alias
          }
          field_session_length
          datetime:field_time(formatString: "dd")
          day:field_time(formatString: "dd")
          time:field_time
          r:relationships {
            room: field_room {
              name
            }
            speaker:field_speakers {
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

import React from 'react';
import styled from 'styled-components';


const IndexPage = ({ data }) => {
  const sessions = data.allNodeSession.edges
  return (
    <div className="sessions">
      {sessions.map((session, i) => {
        console.log(session.node);
        const speakers = session.node.relationships.field_speakers;
        return (
          <Session key={i}>
            <SessionTitle>{session.node.title}</SessionTitle>
            <SessionSpeakers>
              {speakers.map((speaker, i) => {
                return (
                  <SessionSpeaker>{speaker.title}</SessionSpeaker>
                )
              })}
            </SessionSpeakers>
            <SessionBody
              dangerouslySetInnerHTML={{ __html:session.node.body.processed}}
            />
          </Session>
        )}
      )}
    </div>
  )
}

const Session = styled.div`
  padding-bottom: 5px;
`
const SessionTitle = styled.div`
  font-size: 1.1em;
`
const SessionSpeakers = styled.div`
  font-weight: 300;
`
const SessionSpeaker = styled.div`
  padding-bottom: 5px;
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
    allNodeSession {
      edges {
        node {
          title
          body {
            processed
          }
          field_session_length
          field_time
          relationships {
            field_speakers {
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

import React from 'react';
import GatsbyLink from 'gatsby-link'
import styled from 'styled-components';


const IndexPage = ({ data }) => {
  const sessions = data.allNodeSession.edges
  return (
    <div className="sessions">
      {sessions.map((session, i) => {
        const node = session.node
        const speakers = node.relationships.field_speakers;
        return (
          <Session key={i}>
            <SessionTitle>
              <GatsbyLink to={node.path.alias}>
                {node.title}
              </GatsbyLink>
            </SessionTitle>
            <SessionSpeakers>
              {speakers.map((speaker, i) => {
                return (
                  <SessionSpeaker>{speaker.title}</SessionSpeaker>
                )
              })}
            </SessionSpeakers>
            <SessionLength>{node.field_session_length} minutes</SessionLength>
            <SessionBody
              dangerouslySetInnerHTML={{ __html:node.body.processed}}
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
    allNodeSession(sort: {fields:[title], order: ASC}) {
      edges {
        node {
          title
          path {
            alias
          }
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

import React from "react"
import GatsbyLink from 'gatsby-link'

const SessionTemplate = ({data}) => {
  const node = data.nodeSession
  return (
    <div>
      <h1>{node.title}</h1>
      <div
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
`

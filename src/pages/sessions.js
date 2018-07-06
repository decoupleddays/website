import React from 'react'

import Section from '../components/section/section'

const IndexPage = ({ data }) => {
  const sessions = data.allNodeSession.edges

  return (
    <div className="main">
      {sessions.map((session, i) => (
        <div>{session.node.title}</div>
      ))}
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query SessionsPageQuery {
    allNodeSession {
      edges {
        node {
          title
          body {
            summary
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

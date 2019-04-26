import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/Layout'

import Section from '../components/fields/Section'

const IndexPage = ({ data }) => {
  const sections = data.allNodeArticle.edges

  return (
    <Layout>
      <section>
        <article class="typography">
          <div class="container">
            <h2>The only conference on the future of CMS, headlessCMS, and decoupledCMS.</h2>
            <p>
              In its third year after a successful debut in 2017, <strong>Decoupled Day</strong> is a conference for architects, developers, and businesspeople involved in implementing decoupled CMS architectures. The 2019 edition is scheduled for <strong>July 17–18, 2019</strong> in <strong>New York City</strong>.
            </p>
            <p>
              Decoupled architectures use a CMS (Drupal, WordPress, etc) as a content service for other non-CMS applications, whether they are in native desktop or mobile, universal JavaScript, set-top boxes, IoT devices, conversational interfaces, or other technologies.
            </p>
          </div>
        </article>
      </section>
      <section>
        {sections.map((section, i) => (
          <Section data={section.node} key={i} />
        ))}
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allNodeArticle(
      limit: 2
      filter: {
        status: { eq: true }
      }
      sort:{
        fields:[changed]
        order: DESC
      }
    ) {
      edges {
        node {
          title
          body { processed }
          field_link {
            title
            uri
          }
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  sizes(maxWidth: 500) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

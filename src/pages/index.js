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
            <h4>July 17–18, 2019 / New York City / John Jay</h4>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed lectus
            vestibulum mattis ullamcorper velit. Quisque id diam vel quam elementum pulvinar
            etiam. Et netus et malesuada fames. Aliquam etiam erat velit scelerisque in dictum
            non consectetur. Neque convallis a cras semper auctor neque vitae tempus. Dolor
            morbi non arcu risus quis. In metus vulputate eu scelerisque. In nisl nisi scelerisque
            eu. Et tortor consequat id porta. Egestas pretium aenean pharetra magna ac placerat
            vestibulum. Donec adipiscing tristique risus nec feugiat in fermentum posuere.
            Congue nisi vitae suscipit tellus. Ornare suspendisse sed nisi lacus sed viverra tellus.
            </p>
            <h4>Thank you to all our sponsors!</h4>
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

import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/Layout'

import Section from '../components/fields/Section'

const IndexPage = ({ data }) => {
  const sections = data.allNodeArticle.edges

  return (
    <Layout>
      <div className="container">
        <h1>Decoupled Days</h1>
        <h2>
          The only conference on the future of CMS, headlessCMS, and
          decoupledCMS.
        </h2>
        <p>
          In its sixth year after a successful debut in 2017, <b>Decoupled Days</b> is a conference for architects, developers, and businesspeople involved in implementing headless CMS architectures. The 2022 edition is scheduled for <b>August</b> in person in New York City!.
        </p>
        <p>
          Headless or decoupled CMS is the use of a content management system as a content service for other non-CMS applications, whether they are in native desktop or mobile, universal JavaScript, set-top boxes, IoT devices, conversational interfaces, or other technologies.
        </p>

        {sections.map((section, i) => (
          <Section data={section.node} key={i} />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`query IndexPageQuery {
  allNodeArticle(
    filter: {relationships: {field_tags: {elemMatch: {name: {eq: "2022"}}}}, status: {eq: true}}
    sort: {fields: [changed], order: DESC}
  ) {
    edges {
      node {
        title
        body {
          processed
        }
        field_link {
          title
          uri
        }
        field_image {
          alt
        }
        relationships {
          field_image {
            url
            gatsbyImage(width: 200)
          }
        }
      }
    }
  }
}
`

import React from "react";
import { graphql } from 'gatsby';
import {Helmet} from 'react-helmet'

import Layout from '../../components/layout/Layout'

const SponsorTemplate = ({ data }) => {
  const node = data.nodeSponsors
  return (
    <Layout>
      <Helmet><title>{node.title} | Decoupled Days 2021</title></Helmet>

      <div className="container sponsor--page">
        <div className="sponsor--logo">

          <p>is a proud {node.level} sponsor!</p>
        </div>
        <div className="sponsor--content">
          <h1>{node.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: node.body.processed }}
          />
          <div className="sponsor--link">
            For more information go to <a href={node.link.uri}>{node.link.uri}</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SponsorTemplate

export const query = graphql`
  query SponsorTemplate($slug: Int!) {
    nodeSponsors(drupal_internal__nid: {eq: $slug}) {
      title
      body {
        processed
      }
      link:field_sponsor_link {uri}
      level:field_sponsor_level
    }
  }
`

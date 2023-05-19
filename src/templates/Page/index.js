import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby"
import SEO from '../../components/meta/seo';
import SiteLayout from '../../components/siteLayout';
import Body from '../../components/fields/Body';

const PageTemplate = ({ data }) => {
  const { title, body } = data.nodePage;
  return (
    <SiteLayout>
      <SEO title={title} />
      <article className="prose text-neutral-900 lg:prose-xl prose-h1:font-parityDisplay prose-headings:font-parityDisplay prose-headings:text-orange marker:text-neutral-400">
        <h1>{title}</h1>
        <Body classes="container">{body.processed}</Body>
      </article>
    </SiteLayout>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.object,
};

export default PageTemplate;

export const query = graphql`
  query PageTemplate($slug: Int!) {
    nodePage(drupal_internal__nid: { eq: $slug }) {
      title
      body {
        processed
      }
    }
  }
`;

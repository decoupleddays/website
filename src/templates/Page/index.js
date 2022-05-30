import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../../components/layout/Layout';
import SiteLayout from '../../components/siteLayout';

import Body from '../../components/fields/Body';
import Heading from '../../components/fields/Heading';

const PageTemplate = ({ data }) => {
  const { title, body } = data.nodePage;
  return (
    <SiteLayout>
      <Helmet>
        <title>{title} | Decoupled Days 2020</title>
      </Helmet>
      <Heading classes="container" level={1}>
        {title}
      </Heading>
      <Body classes="container">{body.processed}</Body>
    </SiteLayout>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.node,
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

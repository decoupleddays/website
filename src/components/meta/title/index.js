import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const MetaTitle = ({ title }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <Helmet>
        <title>{`${title} ⇒ {${data.site.siteMetadata.title}}`}</title>
      </Helmet>
    )}
  />
);

MetaTitle.propTypes = {
  title: PropTypes.string,
};

export default MetaTitle;

import React from 'react';
import PropTypes from 'prop-types';
import HomeHero from '../components/homeHero';
import SiteFooter from '../components/siteFooter';
import SEO from '../components/meta/seo';

const IndexPage = ({ data }) => (
  <div className="index">
    <SEO title="Home" />
    <HomeHero />
    <SiteFooter />
  </div>
);

IndexPage.propTypes = {
  data: PropTypes.node,
};

export default IndexPage;

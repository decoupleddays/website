import React from 'react';
import PropTypes from 'prop-types';
import HomeHero from '../components/homeHero';
import HomeCFP from '../components/homeCFP';
import SiteFooter from '../components/siteFooter';
import SEO from '../components/meta/seo';

const IndexPage = ({ data }) => (
  <div>
    <SEO title="Home" />
    <HomeHero />
    <HomeCFP />
    <SiteFooter />
  </div>
);

IndexPage.propTypes = {
  data: PropTypes.node,
};

export default IndexPage;

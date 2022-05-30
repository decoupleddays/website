import React from 'react';
import PropTypes from 'prop-types';
import HomeHero from '../components/homeHero';
import HomeCFP from '../components/homeCFP';
import SiteFooter from '../components/siteFooter';

const IndexPage = ({ data }) => (
  <div>
    <HomeHero />
    <HomeCFP />
    <SiteFooter />
  </div>
);

IndexPage.propTypes = {
  data: PropTypes.node,
};

export default IndexPage;

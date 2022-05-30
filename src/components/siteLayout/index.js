import * as React from 'react';
import PropTypes from 'prop-types';
import SiteHeader from '../siteHeader';
import SiteFooter from '../siteFooter';

const SiteLayout = ({ children }) => (
  <div className="siteLayout grid min-h-screen">
    <SiteHeader />
    <main className="prose lg:prose-xl mx-auto pt-20">{children}</main>
    <SiteFooter />
  </div>
);

SiteLayout.propTypes = {
  children: PropTypes.object,
};

export default SiteLayout;

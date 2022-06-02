import * as React from 'react';
import PropTypes from 'prop-types';
import SiteHeader from '../siteHeader';
import SiteFooter from '../siteFooter';

const SiteLayout = ({ children }) => (
  <div className="siteLayout grid min-h-screen grid-cols-[1fr-auto-1fr]">
    <SiteHeader />
    <main className="prose lg:prose-xl mx-auto px-4 pt-10 mb-10">
      {children}
    </main>
    <SiteFooter />
  </div>
);

SiteLayout.propTypes = {
  children: PropTypes.object,
};

export default SiteLayout;

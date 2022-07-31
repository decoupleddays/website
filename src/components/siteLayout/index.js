import * as React from 'react';
import PropTypes from 'prop-types';
import SiteHeader from '../siteHeader';
import SiteFooter from '../siteFooter';
import SponsorsSidebar from '../sponsorsSidebar';

const SiteLayout = ({ children }) => (
  <div className="siteLayout grid min-h-screen grid-cols-[1fr-auto-1fr]">
    <SiteHeader />
    <div className="flex flex-col content-center justify-center gap-8 pt-10 md:flex-row">
      <main className="w-full px-4 mb-10 prose lg:prose-xl md:order-2">
        {children}
      </main>
      <SponsorsSidebar className="md:order-1" />
    </div>
    <SiteFooter />
  </div>
);

SiteLayout.propTypes = {
  children: PropTypes.array,
};

export default SiteLayout;

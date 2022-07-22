import * as React from 'react';
import PropTypes from 'prop-types';
import SiteHeader from '../siteHeader';
import SiteFooter from '../siteFooter';
import SponsorsSidebar from '../sponsorsSidebar';

const SiteLayout = ({ children }) => (
  <div className="siteLayout grid min-h-screen grid-cols-[1fr-auto-1fr]">
    <SiteHeader />
    <div className="flex flex-col md:flex-row gap-8 content-center justify-center pt-10">
      <main className="prose lg:prose-xl px-4 mb-10 md:order-2">
        {children}
      </main>
      <SponsorsSidebar className="md:order-1" />
    </div>
    <SiteFooter />
  </div>
);

SiteLayout.propTypes = {
  children: PropTypes.object,
};

export default SiteLayout;

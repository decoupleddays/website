import * as React from 'react';
import classNames from 'classnames';
import Logo from '../logo';
import MenuPrimary from '../menuPrimary';
import SponsorsDiamond from '../sponsorsDiamond';

const siteHeaderWrapperStyle = classNames(
  'flex flex-col items-start',
  'md:items-center md:flex-row',
  'lg:pb-5 lg:px-5 mx-auto',
  'lg:flex-row lg:items-center lg:gap-7 lg:max-w-screen-xl'
);

const SiteHeader = () => (
  <header className="pt-5">
    <div className={siteHeaderWrapperStyle}>
      <Logo />
    </div>
  </header>
);

export default SiteHeader;

import * as React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import Logo from '../logo';
import MenuPrimary from '../menuPrimary';

const siteHeaderWrapperStyle = classNames(
  'flex flex-col items-start',
  'md:items-center md:flex-row',
  'lg:pb-5 lg:px-5 mx-auto',
  'lg:flex-row lg:items-center lg:gap-7 lg:max-w-screen-xl'
);

const SiteHeader = () => (
  <header className="pt-5">
    <div className={siteHeaderWrapperStyle}>
      <Link to="/">
        <Logo />
      </Link>
      <MenuPrimary className="px-4 mt-3 md:mt-0" />
    </div>
  </header>
);

export default SiteHeader;

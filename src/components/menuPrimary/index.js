import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classNames from 'classnames';
import MenuSocial from '../menuSocial';

const navStyle = classNames(
  'overflow-x-auto overflow-y-hidden nav-primary pb-3 w-screen md:w-auto'
);

const menuULStyle = classNames(
  'leading-extra-tight',
  'flex flex-row gap-4 items-center',
  'lg:gap-8'
);

const linkStyle = classNames(
  'nav-primary-link',
  'relative transition-all inline-block',
  'font-paritySans font-bold leading-extra-tight tracking-tight',
  'text-blue-400',
  'hover:text-purple-500',
  'lg:text-xl lg:leading-extra-tight'
);

const activeLinkStyle = classNames(
  '!text-neutral-900 nav-primary-link--active'
);

const MenuPrimary = ({ className }) => (
  <nav className={classNames(navStyle, className)}>
    <ul className={menuULStyle}>
      <li>
        <Link
          to="/accepted-sessions"
          className={linkStyle}
          activeClassName={activeLinkStyle}
        >
          Sessions
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className={linkStyle}
          activeClassName={activeLinkStyle}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/venue"
          className={linkStyle}
          activeClassName={activeLinkStyle}
        >
          Venue
        </Link>
      </li>
      <li>
        <Link
          to="/diversity-equity-inclusion"
          className={linkStyle}
          activeClassName={activeLinkStyle}
        >
          Diversity <span className="whitespace-nowrap">&amp; Inclusion</span>
        </Link>
      </li>
      <li>
        <Link
          to="/code-conduct"
          className={linkStyle}
          activeClassName={activeLinkStyle}
        >
          <span className="whitespace-nowrap">Code of</span> Conduct
        </Link>
      </li>
      <li>
        <Link
          to="/volunteer"
          className={linkStyle}
          activeClassName={activeLinkStyle}
        >
          Volunteer
        </Link>
      </li>
      <li className="pr-4">
        <MenuSocial />
      </li>
    </ul>
  </nav>
);

MenuPrimary.propTypes = {
  className: PropTypes.string,
};

export default MenuPrimary;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classNames from 'classnames';
import MenuSocial from '../menuSocial';

const linkStyle = classNames(
  'nav-primary-link',
  'relative transition-all inline-block',
  'text-xl font-paritySans font-bold leading-extra-tight tracking-tight',
  'text-blue-400',
  'hover:text-purple-500'
);

const activeLinkStyle = classNames(
  'text-neutral-900 opacity-80 nav-primary-link--active'
);

const MenuPrimary = ({ className }) => (
  <nav className={className}>
    <ul className="flex flex-row gap-8 items-end leading-extra-tight">
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
          to="/diversity-inclusion"
          className={linkStyle}
          activeClassName={activeLinkStyle}
        >
          Diversity &amp; Inclusion
        </Link>
      </li>
      <li>
        <Link
          to="/code-of-conduct"
          className={linkStyle}
          activeClassName={activeLinkStyle}
        >
          Code of Conduct
        </Link>
      </li>
      <li>
        <Link
          to="/become-volunteer"
          className={linkStyle}
          activeClassName={activeLinkStyle}
        >
          Volunteer
        </Link>
      </li>
      <li>
        <MenuSocial />
      </li>
    </ul>
  </nav>
);

MenuPrimary.propTypes = {
  className: PropTypes.string,
};

export default MenuPrimary;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const linkStyle = classNames(
  'nav-primary-link',
  'relative transition-all inline-block',
  'font-paritySans font-bold leading-extra-tight tracking-tight',
  'text-blue-400',
  'hover:text-purple-500',
  'lg:text-xl'
);

const MenuSocial = ({ className }) => (
  <nav className={className}>
    <ul className="flex flex-row gap-2 items-end leading-extra-tight">
      <li>
        <a href="https://twitter.com/decoupleddays" className={linkStyle}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li>
        <a href="mailto:decoupleddays@gmail.com" className={linkStyle}>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
    </ul>
  </nav>
);

MenuSocial.propTypes = {
  className: PropTypes.string,
};

export default MenuSocial;

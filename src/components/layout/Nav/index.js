import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TiThMenu, TiTimes } from 'react-icons/ti';
import Link from '../../fields/Link';

import Menu from '../Menu';

import logo from '../../../../images/logo.svg';

export const Logo = () => (
  <Link to="/">
    <img className="nav--logo" alt="" src={logo} />
  </Link>
);

export const Brand = () => <div className="nav--brand">DECOUPLED DAYS</div>;

const Nav = (props) => {
  // Add hook for showMenu;
  const [showMenu, setShowMenu] = useState(0);

  return (
    <div className="nav">
      <div className="nav--container">
        <div className="nav--links">
          <button
            className="nav--toggle"
            onClick={() => setShowMenu(!showMenu)}
            type="button"
          >
            {!showMenu ? <TiThMenu /> : <TiTimes />}
          </button>
          <Menu show={showMenu} />
        </div>
        <Logo />
        <Brand />
        <a
          className="nav--register-button"
          href="https://forms.gle/yNyD9a5R834AAbYp9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Call for Papers Now Open
        </a>
      </div>
    </div>
  );
};

Nav.propTypes = {
  props: PropTypes.node,
};

export default Nav;

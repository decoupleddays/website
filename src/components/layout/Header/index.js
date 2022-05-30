import React from 'react';

import Menu from '../Menu';

const Header = () => (
  <header id="header">
    <div className="header-inner">
      <div className="container">
        <a className="logo-wrap" href="/">
          <img src="/img/DD2022-Logo.png" alt="Decoupled Days Logo" />
        </a>
        <Menu />
      </div>
    </div>
  </header>
);

export default Header;

import React from 'react'
import Link from 'gatsby-link'

import './header.scss';

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="header__menu">
      {/** Menu to go here when we have more pages **/}
      <a href="" className="header__menu-register">Register Now</a>
    </div>
    <div className="header__hero">
      <h1>
        <Link to="/">
          <span className="header__hero-site">Decoupled Drupal Days</span>
          <span className="header__hero-location">New York City</span>
          <span className="header__hero-date">Aug. 17-19, 2018</span>
        </Link>
      </h1>
    </div>
  </div>
)

export default Header

import React from 'react'
import Link from 'gatsby-link'

import './header.scss';

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="inner">
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header

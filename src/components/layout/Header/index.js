import React from 'react'

import Menu from '../Menu'
import './style.scss'

const Header = () => {
  return (
    <header id="header">
      <div className="header--bg-image">
        <img src="/img/images/sliver-image.png" alt="NYC view" />
      </div>
      <div className="container">

        <a className="logo-wrap" href="/">
          <div id="logo" className="logo-position logo-bg">
            Decoupled Days 2019
          </div>
        </a>
        <Menu />
      </div>
    </header>
  )
}

export default Header

import React from 'react'

import Menu from '../Menu'
import './style.scss'

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header--bg-image">
          <img src="/img/images/sliver-image.png" alt="NYC view" />
        </div>
        <a className="logo-wrap" href="/">
          <h1 id="logo" className="logo dd2019">
            Decoupled Days 2019
          </h1>
        </a>
        <Menu />
      </div>
    </header>
  )
}

export default Header

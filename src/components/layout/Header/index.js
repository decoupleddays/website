import React from 'react'

import Menu from '../Menu'
import './style.scss'
const Header = () => {
  return (
    <header id="header">
      <div className="header-inner">
        <div className="container">
          <a className="logo-wrap" href="/">
            <img src="/img/DD2021-Logo-2A.png" alt="Decoupled Days Logo" />
          </a>
          <Menu />
        </div>
      </div>
    </header>
  )
}

export default Header

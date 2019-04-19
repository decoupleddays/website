import React from 'react'
import Img from 'gatsby-image'

import Menu from '../Menu'
import './style.scss';

const Header = ({ siteTitle, backgroundImage, sponsors }) => {
  return (
    <header id="header">
      <div class="container">
        <div class="header--bg-image">
          <img src="/img/images/sliver-image.png" />
        </div>
        <a class="logo-wrap" href="/">
          <h1 id="logo" class="logo dd2019">Decoupled Days 2019</h1>
        </a>
        <Menu />
      </div>
    </header>
  )
}

export default Header

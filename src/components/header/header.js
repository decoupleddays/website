import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Button from '../button/button'
import Img from 'gatsby-image'

import Nav from '../nav/nav'

const Header = ({ siteTitle, backgroundImage }) => (
  <HeaderContainer>
    <Nav />
    <HeaderHero>
      <h1>
        <Link to="/">
          <span className="header__hero-site"> Decoupled Drupal Days </span>
          <span className="header__hero-location"> New York City </span>
          <span className="header__hero-date"> Aug.17 - 19, 2018 </span>
        </Link>
      </h1>
    </HeaderHero>
    <Img
      sizes={backgroundImage.sizes}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  </HeaderContainer>
)

export default Header

const HeaderContainer = styled.div`
  background-color: transparent;
  position: relative;
  margin-bottom: 1.45rem;
  height: 600px;
`

const HeaderHero = styled.div`
  a {
    display: block;
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
    text-decoration: none;
    color: white;
    background-color: rgba($color: blue, $alpha: 0.4);
    span {
      margin-left: 200px;
      display: block;
    }
  }
`

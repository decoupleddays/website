import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Button from '../button/button'
import Img from 'gatsby-image'

import { colors } from '../../colors'
import Nav from '../nav/nav'

const Header = ({ siteTitle, backgroundImage }) => (
  <HeaderContainer>
    <Nav />
    <HeaderHero>
      <HeaderTitle>Decoupled Drupal Days</HeaderTitle>
      <HeaderSubTitle>New York City</HeaderSubTitle>
      <HeaderSubTitle>Aug. 17 - 19, 2018</HeaderSubTitle>
      <HeaderSubTitle>John Jay College of Criminal Justice</HeaderSubTitle>
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
`

const HeaderHero = styled.div`
  max-width: 960px;
  margin: 0 auto;
  height: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${colors.white};
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 1);
`

const HeaderTitle = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 1.25px;

  &::after {
    height: 2px;
    width: 100%;
    display: block;
    background: ${colors.white};
    content: '';
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 1);
  }
`

const HeaderSubTitle = styled.h2`
  font-size: 1.5rem;
`

import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { colors } from '../../colors'

import Button from '../button/button'
import logo from '../../../images/logo.svg'

const Nav = () => (
  <StyledNav>
    <NavInner>
      {/** Menu to go here when we have more pages **/}
      <Logo src={logo} />
      <Brand>DECOUPLED DRUPAL DAYS</Brand>
      { /** <RegisterButton>Register now</RegisterButton> **/}
    </NavInner>
  </StyledNav>
)

export default Nav

const StyledNav = styled.div`
  width: 100%;
  padding: 0.5rem;
  background-color: white;
`

const NavInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
`

const RegisterButton = Button.extend`
  margin-left: auto;
  font-family: 'Roboto Condensed';
`

export const Brand = styled.div`
  font-weight: bold;
  color: ${colors.veniceBlue};
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 15px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Logo = styled.img`
  width: 30px;
`

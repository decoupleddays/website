import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Button from '../button/button'

import { colors } from '../../colors'

const Nav = () => (
  <StyledNav>
    <NavInner>
      {/** Menu to go here when we have more pages **/}
      <Logo>DECOUPLED DRUPAL</Logo>
      <RegisterButton>Register now</RegisterButton>
    </NavInner>
  </StyledNav>
)

export default Nav

const StyledNav = styled.div`
  width: 100%;
  padding: 1.45rem 1.0875rem;
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
`

const Logo = styled.div`
  font-weight: bold;
  color: ${colors.veniceBlue};
`

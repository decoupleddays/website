import React from 'react'
import Link from '../link/link';
import { TiThMenu, TiTimes } from 'react-icons/lib/ti'
import styled from 'styled-components'

import { colors } from '../../colors'
import './nav.scss'
import Menu from '../menu/menu';

import logo from '../../../images/logo.svg'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false,
    }
  }

  render() {
    return (
    <StyledNav>
      <NavInner>
        <NavLinks>
          <Toggle role="button" onClick={() => this.setState({showMenu: !this.state.showMenu})}>
            {!this.state.showMenu ? (<TiThMenu />) : (<TiTimes />)}
          </Toggle>
          <Menu show={this.state.showMenu} />
        </NavLinks>
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <Brand>DECOUPLED DRUPAL DAYS</Brand>
        <RegisterButton href="https://decoupleddays.eventbrite.com/" target="_blank">Register now</RegisterButton>
      </NavInner>
    </StyledNav>
    )
  }
}

export default Nav

const Toggle = styled.button`
  margin-right: 5px;
  color: #0b5394;
  cursor: pointer;
  border: none;
`

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
`

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

const RegisterButton = styled.a`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: ${colors.veniceBlue};
  color: ${colors.white};
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
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

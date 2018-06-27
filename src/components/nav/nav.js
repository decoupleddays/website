import React from 'react'
import Link from '../link/link';
import { TiThMenu, TiTimes } from 'react-icons/lib/ti'
import styled from 'styled-components'

import { colors } from '../../colors'
import './nav.scss'

import Button from '../button/button'
import logo from '../../../images/logo.svg'
import { NavLink } from 'react-router-dom';

const Menu = () => (
  <ul class="nav-menu">
    <li>
      <NavLink
        to="/about"
        activeClassName="selected"
      >about</NavLink>
    </li>
    <li>
      <NavLink
        to="/venue"
        activeClassName="selected"
      >venue</NavLink>
    </li>
    <li>
      <NavLink
        to="/volunteer"
        activeClassName="selected"
      >volunteer</NavLink>
    </li>
    <li>
      <NavLink
        to="/diversity-inclusion"
        activeClassName="selected"
      >diversity and inclusion</NavLink>
    </li>
  </ul>
);

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
          {this.state.showMenu ? (<Menu />) : null}
        </NavLinks>
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <Brand>DECOUPLED DRUPAL DAYS</Brand>
        { /** <RegisterButton>Register now</RegisterButton> **/}
      </NavInner>
    </StyledNav>
    )
  }
}

export default Nav

const Toggle = styled.div`
  margin-right: 5px;
  color: #0b5394;
  cursor: pointer;
`

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
`
const NavLinksContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  left: 0;
  margin-left: 0;
  padding: 5px;
  background-color: #fff;
  -webkit-box-shadow: 5px 10px 21px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 5px 10px 21px 0px rgba(0,0,0,0.5);
  box-shadow: 5px 10px 21px 0px rgba(0,0,0,0.5);
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

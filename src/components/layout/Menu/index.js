import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'

import Link from '../../fields/Link'
import './style.scss'

const Menu = props => {
  const [active, setActive] = useState('')

  const clickHandle = e => {
    e.preventDefault()
    if (active === 'active') {
      setActive('')
    } else setActive('active')
    console.log(active)
  }
  return (
    <>
      <a onClick={clickHandle} class={`main-menu-toggle ${active}`}>
        <span class="open">
          <FaBars />
          <span class="menu text">Menu</span>
        </span>
        <span class="close">
          <FaTimes />
          <span class="menu text">Close</span>
        </span>
      </a>
      <nav class={`main-menu ${active}`}>
        <ul class="menu">
          {/* <li><Link class="active" href="#">Sessions</Link></li> */}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/venue">Venue</Link>
          </li>
          <li>
            <Link to="/volunteer">Volunteer</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Menu

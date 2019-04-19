import React from 'react';

import Link from '../../fields/Link'
import './style.scss'

const Menu = (props) => (
  <>
    <a href="javascript: void(0)" class="main-menu-toggle">
      <span class="open">
        <svg class="svg-bars-dims">
          <use xlinkHref="sprite/sprite.svg#bars"></use>
        </svg>
        <span class="menu text">Menu</span>
      </span>
      <span class="close">
        <svg class="svg-close-dims">
          <use xlinkHref="sprite/sprite.svg#close"></use>
        </svg>
        <span class="menu text">Close</span>
      </span>
    </a>
    <nav class="main-menu">
      <ul class="menu">
        <li><a class="active" href="#">Sessions</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Venue</a></li>
        <li><a href="#">Volunteer</a></li>
      </ul>
    </nav>
  </>
);

export default Menu;

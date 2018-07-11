import React from 'react';

import { NavLink } from 'react-router-dom';

const Menu = (props) => (
    <ul className={"nav-menu " + (props.show ? "menu-show" : "menu-hide")}>
        <li>
        <NavLink
            to="/sessions"
            activeClassName="selected"
        >sessions</NavLink>
        </li>
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

export default Menu;
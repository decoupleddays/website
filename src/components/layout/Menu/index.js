import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';

import Link from '../../fields/Link';

const Menu = (props) => {
  const [active, setActive] = useState('');

  const clickHandle = (e) => {
    e.preventDefault();
    if (active === 'active') {
      setActive('');
    } else setActive('active');
  };
  return (
    <>
      <button
        onClick={clickHandle}
        className={`main-menu-toggle ${active}`}
        type="button"
      >
        <span className="open">
          <FaBars />
          <span className="menu text">Menu</span>
        </span>
        <span className="close">
          <FaTimes />
          <span className="menu text">Close</span>
        </span>
      </button>
      <nav className={`main-menu ${active}`}>
        <ul className="menu">
          {/*           <li>
            <Link to="/sessions">Sessions</Link>
          </li> */}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/venue">Venue</Link>
          </li>
          <li>
            <Link to="/diversity-inclusion">Diversity and Inclusion</Link>
          </li>
          <li>
            <Link to="/code-of-conduct">Code of Conduct</Link>
          </li>
          <li>
            <Link to="/become-volunteer">Volunteer</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;

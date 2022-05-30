import React from 'react';

import { FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer id="footer">
    <div className="container">
      <div className="brand-and-info">
        <a className="brand logo-bg" href="#top">
          <span className="logo-alt-text">Decoupled Days 2022</span>
        </a>
        <div className="info-block">
          <div className="bottom--date">
            <strong>August 17th - 18th</strong>
            <br />
            New York City
          </div>
        </div>
      </div>
      <ul className="social">
        <li>
          <a
            className="twitter"
            href="https://twitter.com/decoupleddays"
            title="Twitter"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            className="email"
            href="mailto:decoupleddays@gmail.com"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;

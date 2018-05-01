import React from 'react'

import './footer.scss';

const Footer = ({ siteTitle }) => (
  <div className="footer">
    <div className="footer__masthead">
        <p className="footer__masthead--main">Decoupled Drupal Days</p>
        <p>Aug. 17-19, 2018</p>
        <p>John Jay College of Criminal Justice</p>
        <p>524 W 59th St, New York, NY 10019</p>
    </div>
    <div className="footer__map"></div>
    <div className="footer__info">
        <div className="footer__info--copywrite">© 2018 DECOUPLED DRUPAL DAYS ALL RIGHTS RESERVED</div>
        <ul className="footer__info--social">
            <li>Tweeters</li>
            <li>Mailto</li>
            <li>Subscribe?</li>
        </ul>
    </div>
  </div>
)

export default Footer

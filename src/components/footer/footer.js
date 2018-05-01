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
    <div className="footer__map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3021.631989835315!2d-73.9892263!3d40.7701182!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xefb0711781c769e!2sJohn+Jay+College+of+Criminal+Justice!5e0!3m2!1sen!2sus!4v1525136243936"></iframe>
    </div>
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

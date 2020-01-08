import React from 'react'

import './style.scss'
const TopBar = () => (
  <div className="top-bar">
    <div className="top-bar--inner container">
      <div className="top-bar--date">
        <p>
          <strong>July 22nd - 23rd / New York City</strong>
          John Jay College of Criminal Justice
        </p>
      </div>
      <div className="top-bar--register">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScgdojEbV_I_tB1AmeOxkO7-5UzSkV_L2ZaMV6BhaoDqhUPGw/viewform"
          className="button secondary"
        >
          Submit a Session!
        </a>
      </div>
    </div>
  </div>
)

export default TopBar

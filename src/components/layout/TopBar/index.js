import React from 'react'

import './style.scss'
const TopBar = () => (
  <div className="top-bar">
    <div className="top-bar--inner container">
      <div className="top-bar--date">
        <p>
          <strong>July 17-18th / New York City</strong>
          John Jay College of Criminal Justice
        </p>
      </div>
      <div className="top-bar--register">
        <a
          href="https://www.eventbrite.com/e/decoupled-days-2019-registration-61699231061"
          className="button secondary"
        >
          Attend!
        </a>
      </div>
    </div>
  </div>
)

export default TopBar

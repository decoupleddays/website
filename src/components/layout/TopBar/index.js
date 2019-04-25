import React from 'react'

import './style.scss'
const TopBar = () => (
  <div className="top-bar">
    <div className="top-bar--inner container">
      <div className="top-bar--date">
        <p>
          <strong>July 17th-18 / New York City</strong>
          John Jay College of Criminal Justice
        </p>
      </div>
      <div className="top-bar--register">
        <a
          href="https://drive.google.com/open?id=1YXI1pf5yO8XtWD-PJmhPCjAYOOPW-h3f7Q3gP2IGFyU"
          className="button secondary"
        >
          Submit a Session!
        </a>
      </div>
    </div>
  </div>
)

export default TopBar

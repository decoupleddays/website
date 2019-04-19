import React from 'react'

import './style.scss'
const TopBar = () => (
  <div class="top-bar">
    <div class="top-bar--inner container">
      <div class="top-bar--date">
        <p>
          <strong>July 17th-18 / New York City</strong>
          John Jay College of Criminal Justice
        </p>
      </div>
      <div class="top-bar--register">
        <a
          href="https://drive.google.com/open?id=1YXI1pf5yO8XtWD-PJmhPCjAYOOPW-h3f7Q3gP2IGFyU"
          class="button secondary"
        >
          Submit a Session!
        </a>
      </div>
    </div>
  </div>
)

export default TopBar

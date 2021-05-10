import React from 'react'
import './style.scss'

const TopBar = () => (
  <div className="top-bar">
    <div className="container top-bar--inner">
      <div className="top-bar--date">
        <p>
          <strong>July 14th - 15th</strong>
          Virtual Event!
        </p>
      </div>
      <div className="top-bar--register">
        {/**<a
          href="https://docs.google.com/forms/d/e/1FAIpQLScxop0OcspNwZFuHzlktUNoQ5Kqdmwugv79FhMiNo4zZBvfAQ/viewform"
          className="button secondary"
        >
          Submit a Session
        </a>**/}
        {/** <a
          href="https://www.eventbrite.com/e/decoupled-days-2020-registration-88407670723"
          className="button info"
        >
          Get Tickets
        </a>*/}
      </div>
    </div>
  </div>
)

export default TopBar

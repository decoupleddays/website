import React from 'react'
import Button from '../../fields/Button';
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
        <Button
          to="https://hopin.com/events/decoupled-days-2021"
          classes="secondary"
        >
          Register for Free
        </Button>
      </div>
    </div>
  </div>
)

export default TopBar

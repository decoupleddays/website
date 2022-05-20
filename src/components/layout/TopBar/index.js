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
        <a
          className="button secondary"
          href="https://forms.gle/yNyD9a5R834AAbYp9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Call for Papers Now Open
        </a>
      </div>
    </div>
  </div>
)

export default TopBar

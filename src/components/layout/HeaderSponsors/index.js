import React from 'react'

import './style.scss'
const HeaderSponsors = (props) => {
  return(
    <div class="header--sponsor-wrap">
      <div class="container">
        <div class="header--sponsors centered">
          <h3>Diamond Sponsors</h3>
          <div class="sponsor--grid diamond">
            <div class="sponsor--item">
              <img src="/img/logos/decoupled-days-logo.svg" alt="sponsor logo"/>
            </div>
            <div class="sponsor--item">
              <img src="/img/logos/4k-logo.svg" alt="sponsor logo"/>
            </div>
            <div class="sponsor--item">
              <img src="/img/logos/pantheon.png" alt="sponsor logo"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSponsors

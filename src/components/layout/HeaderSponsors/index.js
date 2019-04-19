import React from 'react'

import './style.scss'
const HeaderSponsors = (props) => {
  console.log(props);
  return(
    <div class="header--sponsor-wrap">
      <div class="container">
        <div class="header--sponsors centered">
          <h3>Diamond Sponsors</h3>
          <div class="sponsor--grid diamond">
            {props.sponsors.map(({node}) => {
              console.log(node)
              return (
                <div class="sponsor--item">
                  <img
                    src={node.r.logo.localFile.cis.fluid.src}
                    alt="sponsor logo"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSponsors

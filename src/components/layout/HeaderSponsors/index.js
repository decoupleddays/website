import React from 'react'

import './style.scss'
const HeaderSponsors = props => {
  return (
    <div className="header--sponsor-wrap">
      <div className="container">
        <div className="header--sponsors centered">
          <h3>Diamond Sponsors</h3>
          <div className="sponsor--grid diamond">
            {props.sponsors.map(({ node }, key) => {
              const uri = node.body ? node.path.alias : node.link.uri
              return (
                <div className="sponsor--item" key={key}>
                  <a href={uri}>
                    <img
                      src={node.r.logo.localFile.cis.fluid.src}
                      alt="sponsor logo"
                    />
                  </a>
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

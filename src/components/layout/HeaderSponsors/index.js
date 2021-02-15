import React from 'react'
import './style.scss';
const HeaderSponsors = props => {
  return (
    <div className="header--sponsors">
      <div className="h3 header--sponsors__title">Diamond Sponsors</div>
      <div className="sponsor--grid diamond">
        {props.sponsors.map((node, key) => {
          const uri = node.body ? node.path.alias : node.link.uri
          return (
            <div className="sponsor--item" key={key}>
              <a href={uri}>
                <img
                  src={node.r.logo.localFile.cis.fluid.src}
                  alt={node.title}
                  className="sponsor--logo"
                />
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HeaderSponsors

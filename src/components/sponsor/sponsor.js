import React from 'react'
import Link from 'gatsby-link'

import './sponsor.scss';

const Sponsor = ({sponsor, level}) => {
  return (
    <div className={`sponsor sponsor--${level.toLowerCase().replace(/ /g,'-')}`}>
      <a href={sponsor.link}>
        <img src={sponsor.childImageSharp.sizes.src} alt={sponsor.name} />
      </a>
    </div>
  )
};

export default Sponsor;

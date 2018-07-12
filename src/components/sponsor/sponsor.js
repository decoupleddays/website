import React from 'react'
import Link from 'gatsby-link'

import './sponsor.scss';

const Sponsor = ({sponsor, level}) => {
  return (
    <div className={`sponsor sponsor--${level.toLowerCase().replace(/ /g,'-')}`}>
      <a href={sponsor.field_sponsor_link.uri}>
        <img src={sponsor.relationships.field_sponsor_logo.localFile.childImageSharp.sizes.src} alt={sponsor.title} />
      </a>
    </div>
  )
};

export default Sponsor;

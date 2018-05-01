import React from 'react'
import Link from 'gatsby-link'

import './sponsor.scss';

const Sponsor = ({sponsor, level, key}) => (
  <div className={`sponsor sponsor--${level.toLowerCase()}`} key={key}>
    <a href={sponsor.link}>
      {sponsor.name}
    </a>
  </div>
);

export default Sponsor;

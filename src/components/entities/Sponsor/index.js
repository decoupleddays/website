import React from 'react';
import './style.scss';

const Sponsor = ({sponsor, level}) => {
  const uri = sponsor.body ? sponsor.path.alias : sponsor.link.uri
  return (
    <div className={`sponsor sponsor--${level.toLowerCase().replace(/ /g,'-')}`}>
      <a href={uri}>
        <img src={sponsor.r.logo.localFile.cis.fluid.src} alt={sponsor.title} />
      </a>
    </div>
  )
};

export default Sponsor;

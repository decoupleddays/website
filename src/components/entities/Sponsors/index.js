import React from 'react';

import Sponsor from '../Sponsor';
import './style.scss';

const Sponsors = props => {
  const level = props.level;
  const sponsors = props.sponsors
  return (
    <div
      className={`sponsors sponsors--${level.toLowerCase().replace(/\//g, '').replace(/ /g, '-')}`}
    >
      <h3>{level} Sponsors</h3>
      <div className="sponsors-list">
        { sponsors.map((sponsor, index) => {
          return (
            <Sponsor sponsor={sponsor} level={level} key={index + 1} />
          )
        }) }
      </div>
    </div>
  )
}

export default Sponsors

import React from 'react'
import Link from 'gatsby-link'
import Sponsor from '../sponsor/sponsor';

import './sponsors.scss'
import sponsorData from './sponsor-data';
class Sponsors extends React.Component {
  render() {
    console.log('hey');
    const level = this.props.level;
    const sponsorsByLevel = sponsorData.filter((sponsor) => {
      return sponsor.level == level;
    });
    console.log(sponsorsByLevel);
    return (
      <div className={`sponsors sponsors--${level}`}>
        <h3>{level} Sponsors</h3>
        {  
          sponsorData.filter((sponsor) => {
            return sponsor.level == level;
          }).map((sponsor, index) => {
            return <Sponsor sponsor={sponsor} level={level} key={index} />
          })
        }
      </div>
    )
  }
}

export default Sponsors

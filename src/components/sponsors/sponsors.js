import React from 'react'
import Link from 'gatsby-link'
import Sponsor from '../sponsor/sponsor';

import './sponsors.scss'
import sponsorData from './sponsor-data';
class Sponsors extends React.Component {
  render() {
    const level = this.props.level;
    return (
      <div className={`sponsors sponsors--${level.toLowerCase()}`}>
        <h3>{level} Sponsors</h3>
        {  
          sponsorData.filter((sponsor) => {
            return sponsor.level == level;
          }).map((sponsor, index) => {
            return <Sponsor sponsor={sponsor} level={level} key={index+1} />
          })
        }
      </div>
    )
  }
}

export default Sponsors

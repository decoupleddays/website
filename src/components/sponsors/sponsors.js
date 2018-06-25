import React from 'react'
import Sponsor from '../sponsor/sponsor';

import './sponsors.scss'
class Sponsors extends React.Component {
  render() {
    const level = this.props.level;
    const sponsors = this.props.sponsors
    return (
      <div className={`sponsors sponsors--${level.toLowerCase()}`}>
        <h3>{level} Sponsors</h3>
        <div className="sponsors-list">
        {
          sponsors.map((sponsor, index) => {
            return <Sponsor sponsor={sponsor.node} level={level} key={index+1} />
          })
        }
        </div>
      </div>
    )
  }
}

export default Sponsors

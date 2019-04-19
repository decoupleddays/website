import React from 'react'
import PropTypes from 'prop-types'

import Sponsor from '../Sponsor'

import './style.scss'

const Sponsors = (props) => {

  const level = props.level;
  const sponsors = props.sponsors
  return (
    <div className={`sponsors sponsors--${level.toLowerCase().replace(/ /g,'-')}`}>
      <h3>{level} Sponsors</h3>
      <div className="sponsors-list">
      {sponsors.map((sponsor, index) => {
        return <Sponsor sponsor={sponsor.node} level={level} key={index+1} />
      })}
      </div>
    </div>
  )
}



export default Sponsors

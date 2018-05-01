import React from 'react'
import Link from 'gatsby-link'

import './section.scss';

const Section = ({data}) => (
  <div className="section">
      { /** <img src={data.image.url} alt={data.image.alt} /> **/}
      <h2 className="section__title">{data.title}</h2>
      <div className="section__content">{data.content}</div>
      <a href={data.link.url} className="section__link">{data.link.title}</a>
  </div>
)

export default Section

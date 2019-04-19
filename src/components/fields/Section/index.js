import React from 'react'
import Img from 'gatsby-image'
import classNames from 'classnames'

import Link from '../Link'

import './style.scss';

const Section = ({ data }) => {

  let image = null;
  if (data.relationships.field_image && data.relationships.field_image.localFile) {
    image = data.relationships.field_image.localFile.childImageSharp.sizes;
  }
  const classes = classNames(
    'section',
    {'with-image': image}
  )

  return (
    <div className={classes}>
      { image && (
        <div className="section__thumbnail-container">
          <Img
            sizes={{ ...image, aspectRatio: 4 / 3 }}
          />
        </div>
      )}
      <div className="section__container">
        <h2>{data.title}</h2>
        <div
          className="section__content"
          dangerouslySetInnerHTML={{ __html:data.body.processed}} />
        {data.field_link && <Link className="section__link" to={data.field_link.uri}>{data.field_link.title}></Link> }
      </div>
    </div>
  )
}

export default Section

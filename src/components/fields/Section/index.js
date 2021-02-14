import React from 'react'
import Img from 'gatsby-image'
import Parser from 'html-react-parser'
import classNames from 'classnames'

import Link from '../Link'

const Section = ({ data }) => {

  let image = null;
  if (data.relationships.field_image && data.relationships.field_image.localFile) {
    image = data.relationships.field_image.localFile.childImageSharp.fixed;
  }
  console.log(image);
  const classes = classNames(
    'section',
    {'with-image': image}
  )

  return (
    <div className={classes}>
      { image && (
        <div className="section__thumbnail-container">
          <img src={image.src} />
          <Img
            sizes={{ ...image, aspectRatio: 4 / 3 }}
          />
        </div>
      )}
      <div className="section__container">
        <h2 className="section__header">{data.title}</h2>
        <div className="section__content">
          {Parser(data.body.processed)}
        </div>
        {data.field_link && (
          <Link className="section__link" to={data.field_link.uri.replace(/^internal:/, '')}>
            {data.field_link.title}
          </Link>
        )}
      </div>
    </div>
  )
}

export default Section

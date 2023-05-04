import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Parser from 'html-react-parser';
import classNames from 'classnames';

import Link from '../Link';

const Section = ({ data }) => {
  const image = getImage(data.relationships.field_image);

  const classes = classNames('section', { 'with-image': image });

  return (
    <div className={classes}>
      {image && (
        <div className="section__thumbnail-container">
          <GatsbyImage image={image} alt={data.field_image.alt} />
        </div>
      )}
      <div className="section__container">
        <h2 className="section__header">{data.title}</h2>
        <div className="section__content">{Parser(data.body.processed)}</div>
        {data.field_link && (
          <Link
            className="section__link"
            to={data.field_link.uri.replace(/^internal:/, '')}
          >
            {data.field_link.title}
          </Link>
        )}
      </div>
    </div>
  );
};

Section.propTypes = {
  data: PropTypes.node,
};

export default Section;

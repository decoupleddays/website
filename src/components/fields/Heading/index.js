import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Heading = (props) => {
  const level = props.level || "2";
  const Element = `h${level}`;
  const classes = classNames({
    heading: true,
    [`heading-${level}`]: true,
    [`${props.classes}`]: props.classes
  })
  return(
    <Element className={classes}>
      {props.url && (<a href={props.url} className="heading--link">{props.title }</a>)}
      {!props.url && props.title}
    </Element>
  )
}

Heading.propTypes = {
  /** Title Text */
  title: PropTypes.string.isRequired,
  /** Heading level. Use just the number, not the H. Defaults to 2. */
  level: PropTypes.number,
  /** Optional extra classes added to 'heading' and 'heading-${level}' */
  classes: PropTypes.string,
  /** Optional URL to make the Heading a link. */
  url: PropTypes.string
}

export default Heading;

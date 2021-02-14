import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Heading = props => {
  const level = props.level || '2'
  const Element = `h${level}`
  const title = props.title ? props.title : props.children
  const classes = classNames({
    heading: true,
    [`heading-${level}`]: true,
    [`${props.classes}`]: props.classes,
  })
  return (
    <Element className={classes}>
      {props.url && (
        <a href={props.url} className="heading--link">
          {title}
        </a>
      )}
      {!props.url && title}
    </Element>
  )
}

Heading.propTypes = {
  /** Title Text */
  title: PropTypes.string,
  /** Heading level. Use just the number, not the H. Defaults to 2. */
  level: PropTypes.number,
  /** Optional extra classes added to 'heading' and 'heading-${level}' */
  classes: PropTypes.string,
  /** Optional URL to make the Heading a link. */
  url: PropTypes.string,
}

export default Heading

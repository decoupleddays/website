import React from 'react'
import classNames from 'classnames';

import './style.scss';

const Button = (props) => {
  const classes = classNames([
    'button',
    props.classes
  ])
  return (
  <button className={classes}>
    {props.children}
  </button>
)};

export default Button

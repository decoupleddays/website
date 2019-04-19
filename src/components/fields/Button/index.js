import React from 'react'

import './style.scss';

const Button = (props) => (
  <button className="button">
    {props.children}
  </button>
);

export default Button

import React from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser'

import './style.scss';

const Body = (props) => {
  const classes = props.classes + ' body-text';
  return(
  <div className={classes}>
    {(props.text) && Parser(props.text)}
    {!props.text && Parser(props.children)}
  </div>
)};

Body.propTypes = {
  /** Text that is passed by a parameter */
  text: PropTypes.string,
  /** Classname passed by components */
  classes: PropTypes.string
}

export default Body;

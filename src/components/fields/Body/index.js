import React from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';

const Body = ({ classes, text, children }) => {
  const classIndex = `${classes} body-text`;
  return (
    <div className={classIndex}>
      {text && Parser(text)}
      {!text && Parser(children)}
    </div>
  );
};

Body.propTypes = {
  text: PropTypes.string,
  classes: PropTypes.string,
};

export default Body;

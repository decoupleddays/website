import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = (props) => {
  const { classes, children } = props;
  const classIndex = classNames(['button', classes]);
  return (
    <button className={classIndex} type="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.node,
};

export default Button;

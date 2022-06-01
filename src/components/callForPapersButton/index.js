import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass, faRightLong } from '@fortawesome/pro-regular-svg-icons';

const buttonStyle = classNames(
  'inline-block',
  'bg-purple-500 text-white',
  'font-bold uppercase leading-tight',
  'px-6 py-3',
  'transition-all',
  'hover:bg-purple-700'
);

const ButtonLink = ({ children, url, className, isURLExternal }) => {
  if (isURLExternal) {
    return (
      <a href={url} className={classNames(className, buttonStyle)}>
        {children}
      </a>
    );
  }

  return (
    <Link to={url} className={classNames(className, buttonStyle)}>
      {children}
    </Link>
  );
};

const Button = ({ children, className, isURLExternal, url }) => (
  <ButtonLink url={url} isURLExternal={isURLExternal} className={className}>
    <FontAwesomeIcon icon={faHourglass} className="text-purple-40 mr-2" />
    {children}
    <span className="block text-xs opacity-75">
      Due June 1 <FontAwesomeIcon icon={faRightLong} />
    </span>
  </ButtonLink>
);

ButtonLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isURLExternal: PropTypes.bool,
  url: PropTypes.string,
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isURLExternal: PropTypes.bool,
  url: PropTypes.string,
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import {Link as GatsbyLink} from 'gatsby-link';

const Link = ({ children, to, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);
  // Use gatsby-link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink to={to} activeClassName="active" {...other}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} target="_blank" rel="noopener noreferrer" {...other}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
};

export default Link;

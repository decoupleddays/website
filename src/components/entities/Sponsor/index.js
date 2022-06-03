import React from 'react';
import PropTypes from 'prop-types';

const Sponsor = ({ sponsor, level }) => {
  const uri = sponsor.body ? sponsor.path.alias : sponsor.link.uri;
  return (
    <div
      className={`sponsor sponsor--${level.toLowerCase().replace(/ /g, '-')}`}
    >
      <a href={uri}>TKTK</a>
    </div>
  );
};

Sponsor.propTypes = {
  sponsor: PropTypes.array,
  level: PropTypes.string,
};

export default Sponsor;

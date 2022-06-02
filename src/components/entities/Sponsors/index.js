import React from 'react';
import PropTypes from 'prop-types';
import Sponsor from '../Sponsor';

const Sponsors = (props) => {
  const { level, sponsors } = props;
  return (
    <div
      className={`sponsors sponsors--${level
        .toLowerCase()
        .replace(/\//g, '')
        .replace(/ /g, '-')}`}
    >
      <h3>{level} Sponsors</h3>
      <div className="sponsors-list">
        {sponsors.map((sponsor, index) => (
          <Sponsor sponsor={sponsor} level={level} key={index + 1} />
        ))}
      </div>
    </div>
  );
};

Sponsors.propTypes = {
  level: PropTypes.string,
  sponsors: PropTypes.array,
};

export default Sponsors;

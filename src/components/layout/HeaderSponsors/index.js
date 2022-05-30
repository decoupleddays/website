import React from 'react';
import PropTypes from 'prop-types';

const HeaderSponsors = (props) => {
  const { sponsors } = props;
  return (
    <div className="header--sponsors">
      <h3>Diamond Sponsors</h3>
      <div className="sponsor--grid diamond">
        {sponsors.map((node, key) => {
          const uri = node.body ? node.path.alias : node.link.uri;
          return (
            <div className="sponsor--item" key={key}>
              <a href={uri}>TKTK</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

HeaderSponsors.propTypes = {
  sponsors: PropTypes.node,
};

export default HeaderSponsors;

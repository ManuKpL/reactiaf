import React from 'react';
import PropTypes from 'prop-types';

import './HouseCard.scss';

const HouseCard = ({ house }) => {
  return (
    <div className="house-card">
      <h2>{house.name}</h2>
      <p>Of {house.region}</p>
    </div>
  );
};

HouseCard.propTypes = {
  house: PropTypes.object.isRequired,
};

export { HouseCard };

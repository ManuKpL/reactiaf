import React from 'react';
import PropTypes from 'prop-types';

import './HouseCard.scss';

export const HouseCard = ({ house }) => {
  return (
    house && (
      <div className="house-card">
        <img src={house.imagePath} alt={house.coatOfArms} />
        <div>
          <h2>{house.name}</h2>
          <h3>
            {house.region} - {house.seat}
          </h3>
          <dl>
            {house.words && (
              <>
                <dt>Words</dt>
                <dd>{house.words}</dd>
              </>
            )}
            <dt>Coat of arms</dt>
            <dd>{house.coatOfArms}</dd>
          </dl>
        </div>
      </div>
    )
  );
};

HouseCard.propTypes = {
  house: PropTypes.object.isRequired,
};

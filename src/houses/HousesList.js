import React, { useContext } from 'react';

import './HousesList.scss';

import { Loader } from 'shared';
import { HouseCard } from './HouseCard';
import { ListHousesContext } from './listHouses';

export const HousesList = () => {
  const { houses, isLoading } = useContext(ListHousesContext);

  if (isLoading) {
    return <Loader center />;
  }

  return (
    <section className="houses-list">
      {houses && houses.map(house => <HouseCard key={house.id} house={house} />)}
    </section>
  );
};

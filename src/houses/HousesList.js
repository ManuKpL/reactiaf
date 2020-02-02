import React, { useContext } from 'react';

import './HousesList.scss';

import { HouseCard } from './HouseCard';
import { ListHousesContext } from './listHouses';

export const HousesList = () => {
  const { houses, isLoading } = useContext(ListHousesContext);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (!houses) {
    return <>No Data...</>;
  }

  return (
    <section className="houses-list">
      {houses.map(house => (
        <HouseCard key={house.id} house={house} />
      ))}
    </section>
  );
};

import React, { useContext, useMemo } from 'react';

import './HousesList.scss';

import { Loader, sortBy } from 'shared';
import { ListHousesContext } from './listHouses';
import { HouseCard } from './HouseCard';

export const HousesList = () => {
  const { houses, isLoading } = useContext(ListHousesContext);

  const houseCards = useMemo(() => {
    if (!houses) {
      return null;
    }

    const toHouseCard = house => <HouseCard key={house.id} house={house} />;

    return houses.sort(sortBy('name')).map(toHouseCard);
  }, [houses]);

  if (isLoading) {
    return <Loader center />;
  }

  return <section className="houses-list">{houseCards}</section>;
};

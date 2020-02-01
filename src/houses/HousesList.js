import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './HousesList.scss';

import { HouseCard } from './HouseCard';

const HousesList = () => {
  const [houses, setHouses] = useState([]);
  const [hasData, setHasData] = useState(false);

  useEffect(function componentDidMount() {
    (async function fetchHouses() {
      const { data: houses } = await axios.get('http://localhost:1337/houses');
      setTimeout(() => {
        setHouses(houses || []);
      }, 300);
    })();
  }, []);

  useEffect(
    function housesDidChange() {
      setHasData(!!(houses && houses.length));
    },
    [houses],
  );

  return (
    <section className="houses-list">
      {hasData && houses.map(house => <HouseCard key={house.id} house={house} />)}
      {!hasData && <>Loading...</>}
    </section>
  );
};

export { HousesList };

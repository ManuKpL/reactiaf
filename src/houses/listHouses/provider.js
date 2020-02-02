import React, { useContext, useMemo, useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ApiContext } from 'shared';
import { ListHousesContext } from './context';
import { ListHousesService } from './service';

export const ListHousesProvider = ({ children }) => {
  const apiService = useContext(ApiContext);
  const listHousesService = useMemo(() => new ListHousesService(apiService), [apiService]);

  const [listHousesState, setListHousesState] = useState({ houses: null, isLoading: false });

  const exec = useCallback(async () => {
    setListHousesState({ houses: null, isLoading: true });
    const houses = await listHousesService.exec();

    setTimeout(function handleResult() {
      setListHousesState({ houses, isLoading: false });
    }, 300);
  }, [listHousesService]);

  useEffect(
    function onServiceReady() {
      exec();
    },
    [exec],
  );

  return <ListHousesContext.Provider value={listHousesState}>{children}</ListHousesContext.Provider>;
};

ListHousesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

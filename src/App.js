import React from 'react';

import logo from './logo.svg';
import './App.css';

import { HousesList, ListHousesProvider } from './houses';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img data-testid="app-logo" src={logo} className="App-logo" alt="logo" />
    </header>
    <main>
      <ListHousesProvider>
        <HousesList />
      </ListHousesProvider>
    </main>
  </div>
);

export default App;

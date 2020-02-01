import React from 'react';

import logo from './logo.svg';
import './App.css';

import { HousesList } from './houses';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img data-testid="app-logo" src={logo} className="App-logo" alt="logo" />
    </header>
    <main>
      <HousesList />
    </main>
  </div>
);

export default App;

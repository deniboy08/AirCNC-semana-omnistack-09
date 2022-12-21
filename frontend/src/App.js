import React from 'react';
import './App.css';

import logo from './assets/logo.svg'

import DefautRoute from './routes';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCNC" />

      <div className="content">
        <DefautRoute />
      </div>
    </div>
  );
}

export default App;
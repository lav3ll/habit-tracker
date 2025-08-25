import React from 'react';
import './App.css';
import Habits from './components/Habits/Habits';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <div className='App'>
      <Header />
      <Homepage />
      {loggedIn ? <Habits /> : <p>Please log in to track your habits.</p>}
    </div>
  );
}

export default App;

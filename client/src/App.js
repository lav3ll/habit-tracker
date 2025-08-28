import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Habits from './components/Habits/Habits';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import SignUp from './components/SignUp/SignUp';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <BrowserRouter>
      <Header />{' '}
      {/* header outside of Routes if it should show on every page */}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/signup' element={<SignUp />} />
        {loggedIn && <Route path='/habits' element={<Habits />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

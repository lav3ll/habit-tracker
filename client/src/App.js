import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Habits from './components/Habits/Habits';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);

  const logOut = () => {
    setLoggedIn(false);
    navigate('/');
  };

  const logIn = () => {
    setLoggedIn(true);
  };
  return (
    <>
      <Header logOut={logOut} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/signup' element={<SignUp setLoggedIn={setLoggedIn} />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {loggedIn && <Route path='/habits' element={<Habits />} />}
      </Routes>
    </>
  );
}

export default App;

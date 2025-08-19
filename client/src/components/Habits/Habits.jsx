import React from 'react';
import './Habits.css';
import { Habit } from '../Habit/Habit';

const Habits = () => {
  return (
    <>
      <h2 className='habits-container-title'>Your Habits</h2>
      <div className='habits-container'>
        <Habit />
        <Habit />
        <Habit />
        <Habit />
      </div>
    </>
  );
};

export default Habits;

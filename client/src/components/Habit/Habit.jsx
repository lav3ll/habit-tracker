import React from 'react';
import { useState } from 'react';
import './Habit.css';

export const Habit = () => {
  const [habitName, setHabitName] = useState('Drink Water Test Name');
  const [startDate, setStartDate] = useState(new Date('2025-07-19'));
  const [streak, setStreak] = useState(5);

  function handleClick() {
    alert(`${habitName} habit clicked!`);
  }

  return (
    <div className='habit-container' onClick={handleClick}>
      <div className='habit-title'>{habitName}</div>
      <div className='habit-start-date'>
        {startDate.toLocaleDateString('en-GB')}
      </div>
      <div className='habit-streak'>{streak} days</div>
    </div>
  );
};

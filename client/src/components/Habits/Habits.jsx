import React, { useState } from 'react';
import './Habits.css';
import { Habit } from '../Habit/Habit';
import SelectHabit from '../SelectHabit/SelectHabit';
import habitsData from '../utils/testHabitsData.json';

const Habits = () => {
  const [userHabits, setUserHabits] = useState([]);

  // Function to handle adding a selected habit
  function handleHabitSelect(selectedId) {
    const habit = habitsData.find((h) => h.id === parseInt(selectedId));
    if (habit && !userHabits.some((h) => h.id === habit.id)) {
      setUserHabits([...userHabits, habit]);
    }
  }

  return (
    <>
      <h2 className='habits-container-title'>Your Daily Habits</h2>

      {/* Habit selector */}
      <SelectHabit onHabitSelect={handleHabitSelect} />

      {/* Render all selected habits dynamically */}
      <div className='habits-container'>
        {userHabits.map((habit) => (
          <Habit key={habit.id} habitName={habit.name} />
        ))}
      </div>
    </>
  );
};

export default Habits;

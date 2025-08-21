import React from 'react';
import { useState } from 'react';
import './Habit.css';
import { BsCheckSquare } from 'react-icons/bs';
import { PiFireFill } from 'react-icons/pi';
import { ImFire } from 'react-icons/im';

export const Habit = () => {
  const [habitName, setHabitName] = useState('Drink Water Test Name');
  const [startDate, setStartDate] = useState(new Date('2025-07-19'));
  const [streak, setStreak] = useState(0);
  const [hidden, setHidden] = useState(false);
  const streakIconArr = [
    <ImFire className='streak-icon' />,
    <PiFireFill className='streak-icon' />,
  ];
  const [streakIcon, setStreakIcon] = useState(streakIconArr[0]);

  function handleClick() {
    // Update the start date to today

    //Update the streak count
    setStreak(streak + 1);

    // Update the streak icon based on the streak count
    streak > 10
      ? setStreakIcon(streakIconArr[1])
      : setStreakIcon(streakIconArr[0]);
    // Optionally, you can hide the habit after completion
    // setHidden('hidden');
  }

  return (
    <div className={`habit-container ${hidden}`}>
      <BsCheckSquare
        className='habit-icon btn-primary'
        onClick={handleClick}
        data-bs-toggle='modal'
        data-bs-target='#completedHabitModal'
        type='button'
      />
      <div className='habit-title'>{habitName}</div>
      <div className='habit-start-date'>
        {startDate.toLocaleDateString('en-GB')}
      </div>
      {/* Display the streak in a more readable format */}
      <div className='habit-streak'>
        {streak === 0 ? (
          'No streak yet'
        ) : streak === 1 ? (
          <>1 day logged {streakIcon}</>
        ) : (
          <>
            {streak} day streak {streakIcon}
          </>
        )}
      </div>

      <div
        className='modal fade'
        id='completedHabitModal'
        tabindex='-1'
        aria-labelledby=''
        aria-hidden='true'
      >
        {/* Modal for habit completion confirmation -->*/}
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header justify-content-center'>
              <h1 className='modal-title fs-5 text-center' id=''>
                {habitName} Completed!
              </h1>
            </div>
            <div className='modal-body fs-6'>You have earned 1 skill point</div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
        {/* End of modal-->*/}
      </div>
    </div>
  );
};

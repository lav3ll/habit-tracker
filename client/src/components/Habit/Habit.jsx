import React, { useState } from 'react';
import './Habit.css';
import { BsCheckSquare } from 'react-icons/bs';
import { PiFireFill } from 'react-icons/pi';
import { ImFire } from 'react-icons/im';

export const Habit = ({ name, startDate }) => {
  const [streak, setStreak] = useState(0);
  const [hidden, setHidden] = useState(false);
  const streakIconArr = [
    <ImFire className='streak-icon' />,
    <PiFireFill className='streak-icon' />,
  ];
  const [streakIcon, setStreakIcon] = useState(streakIconArr[0]);

  function handleClick() {
    setStreak(streak + 1);
    streak > 10
      ? setStreakIcon(streakIconArr[1])
      : setStreakIcon(streakIconArr[0]);
  }

  return (
    <div className={`habit-container ${hidden} col`}>
      <BsCheckSquare
        className='habit-icon btn-primary'
        onClick={handleClick}
        data-bs-toggle='modal'
        data-bs-target={`#completedHabitModal-${name.replace(/\s+/g, '')}`}
        type='button'
      />
      <div
        className='habit-title'
        style={{ fontSize: name.length > 12 ? '0.9rem' : '1.2rem' }}
      >
        {name}
      </div>
      <div className='habit-start-date'>
        <span id='calendar-emoji' role='img' aria-label='calendar'>
          📅
        </span>{' '}
        {new Date(startDate).toLocaleDateString('en-GB')}
      </div>
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

      {/* Modal for this habit */}
      <div
        className='modal fade'
        id={`completedHabitModal-${name.replace(/\s+/g, '')}`}
        tabIndex='-1'
        aria-labelledby=''
        aria-hidden='true'
      >
        <div className='modal-dialog '>
          <div className='modal-content complete-habit-modal custom-color-white '>
            <div className='modal-header justify-content-center'>
              <h1 className='modal-title fs-5 text-center'>
                {name} Completed!
              </h1>
            </div>
            <div className='modal-body fs-6 custom-color-success'>
              You have earned 1 skill point
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary complete-habit-close-btn'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

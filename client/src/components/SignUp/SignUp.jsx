import React, { useState } from 'react';
import './SignUp.css';
import TimezonePicker from '../common/TimeZonePicker/TimeZonePicker';

import IconSelector from '../common/IconSelector/IconSelector';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    timezone: '',
    theme: '',
    reminderTime: '',
    avatar: '',
  });

  const handleNext = (e) => {
    e.preventDefault();
    const modal = e.target.closest('.signup-modal-container');
    console.log(modal);
    if (modal) {
      modal.classList.add('hidden');
    }
    // TODO: advance step or navigate
  };

  const times = Array.from(
    { length: 24 },
    (_, i) => `${i.toString().padStart(2, '0')}:00`
  );

  return (
    <>
      {/* Register Form Page 1 */}
      <div className='signup-modal-container signup-mdl-1 hidden'>
        <div className='signup-modal'>
          <h2 className='modal__header'>
            Sign up and <span className='highlight'>conquer</span>
            <br />
            your habits in less than&nbsp;
            <span className='highlight'>5 minutes</span>
          </h2>

          <form className='modal__form'>
            <label htmlFor='signup-username'>Username</label>
            <input
              id='signup-username'
              type='text'
              value={inputs.username}
              onChange={(e) =>
                setInputs((s) => ({ ...s, username: e.target.value }))
              }
            />

            <label htmlFor='signup-email'>Email</label>
            <input
              id='signup-email'
              type='email'
              value={inputs.email}
              onChange={(e) =>
                setInputs((s) => ({ ...s, email: e.target.value }))
              }
            />

            <label htmlFor='signup-password'>Password</label>
            <input
              id='signup-password'
              type='password'
              value={inputs.password}
              onChange={(e) =>
                setInputs((s) => ({ ...s, password: e.target.value }))
              }
            />

            <button type='button' className='btn' onClick={handleNext}>
              Next step &rarr;
            </button>
          </form>
        </div>
      </div>

      {/* Register Form Page 2 */}
      <div className='signup-modal-container signup-mdl-2 hidden'>
        <div className='signup-modal p-4'>
          <h2 className='modal__header text-center mb-3'>Preferences</h2>

          <form className='modal__form'>
            <div className='mb-3'>
              <label className='form-label'>Time Zone</label>
              <TimezonePicker
                value={inputs.timezone}
                onChange={(value) =>
                  setInputs((s) => ({ ...s, timezone: value }))
                }
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Daily Reminder Time</label>
              <select
                id='signup-d-reminder'
                className='form-control'
                value={inputs.reminderTime}
                onChange={(e) =>
                  setInputs({ ...inputs, reminderTime: e.target.value })
                }
              >
                <option value=''>Select a time</option>
                {times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <div className='mb-3'>
              <label className='form-label d-block'>Theme</label>
              <div className='d-flex gap-3 align-items-center'>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='theme'
                    id='light-mode'
                    value='light'
                    checked={inputs.theme === 'light'}
                    onChange={(e) =>
                      setInputs((s) => ({ ...s, theme: e.target.value }))
                    }
                  />
                  <label className='form-check-label' htmlFor='light-mode'>
                    Light Mode
                  </label>
                </div>

                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='theme'
                    id='dark-mode'
                    value='dark'
                    checked={inputs.theme === 'dark'}
                    onChange={(e) =>
                      setInputs((s) => ({ ...s, theme: e.target.value }))
                    }
                  />
                  <label className='form-check-label' htmlFor='dark-mode'>
                    Dark Mode
                  </label>
                </div>
              </div>
            </div>

            <button type='button' className='btn' onClick={handleNext}>
              Next step &rarr;
            </button>
          </form>
        </div>
      </div>

      {/* Register Form Page 3 */}
      <div className='signup-modal-container signup-mdl-3'>
        <div className='signup-modal p-4'>
          <h2 className='modal__header text-center mb-3'>Profile</h2>

          <form className='modal__form'>
            <div className='mb-3'>
              <label className='form-label'>Avatar Selection</label>
              {/* <div className='row g-3'>
                {['🐉', '⚡', '🔥', '🌊', '🌟'].map((icon, idx) => (
                  <div key={idx} className='col-3'>
                    <button
                      type='button'
                      className={`btn w-100 ${
                        inputs.avatar === icon
                          ? 'btn-primary'
                          : 'btn-outline-secondary'
                      }`}
                      onClick={() => setInputs({ ...inputs, avatar: icon })}
                    >
                      <span style={{ fontSize: '2rem' }}>{icon}</span>
                    </button>
                  </div>
                ))}
              </div> */}
              <IconSelector inputs={inputs} setInput={setInputs} />
            </div>

            <div className='mb-3'>
              <label htmlFor='focus-area'>Focus Area</label>
              <select id='focus-area' className='form-control'>
                <option value=''>Select an Area of Focus</option>
                <option value='health'>Health &amp; Fitness</option>
                <option value='productivity'>Productivity</option>
                <option value='mindfulness'>Mindfulness</option>
                <option value='learning'>Learning</option>
              </select>
            </div>

            <div className='mb-3'>
              <label htmlFor='motivation-style'>Motivation Style</label>
              <select id='motivation-style' className='form-control'>
                <option value=''>Select your Motivation style</option>
                <option value='rewards'>Rewards / Incentives</option>
                <option value='competition'>Competition</option>
                <option value='streaks'>Streaks / Consistency</option>
                <option value='accountability'>Accountability / Social</option>
                <option value='self-growth'>Personal Growth</option>
              </select>
            </div>

            <button type='button' className='btn' onClick={handleNext}>
              Next step &rarr;
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;

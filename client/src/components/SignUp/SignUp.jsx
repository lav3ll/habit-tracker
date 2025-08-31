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
    focus: '',
    motivation: '',
  });
  const hideContainer = (formEl) => {
    const container = formEl.closest('.signup-modal-container');
    if (container) container.classList.add('hidden');
  };

  const handleNext = (e) => {
    // e.preventDefault();
    console.log(inputs);
    const modal = e.target.closest('.signup-modal-container');

    if (modal) modal.classList.add('hidden');
    // TODO: advance step or navigate
  };

  const times = Array.from(
    { length: 24 },
    (_, i) => `${i.toString().padStart(2, '0')}:00`
  );

  return (
    <>
      {/* Register Form Page 1 */}
      <div className='signup-modal-container signup-mdl-1'>
        <div className='signup-modal'>
          <h2 className='modal__header'>
            Sign up and <span className='highlight'>conquer</span>
            <br />
            your habits in less than&nbsp;
            <span className='highlight'>5 minutes</span>
          </h2>

          <form
            className='modal__form'
            onSubmit={(e) => {
              const form = e.currentTarget;
              if (!form.checkValidity()) {
                e.preventDefault();
                form.reportValidity();
                return;
              }
              e.preventDefault();
              hideContainer(form);
            }}
          >
            <label htmlFor='signup-username'>Username</label>
            <input
              id='signup-username'
              type='text'
              value={inputs.username}
              onChange={(e) =>
                setInputs((s) => ({ ...s, username: e.target.value }))
              }
              name='username'
              required
            />
            <label htmlFor='signup-email'>Email</label>
            <input
              id='signup-email'
              type='email'
              value={inputs.email}
              onChange={(e) =>
                setInputs((s) => ({ ...s, email: e.target.value }))
              }
              name='email'
              required
            />
            <label htmlFor='signup-password'>Password</label>
            <input
              id='signup-password'
              type='password'
              value={inputs.password}
              onChange={(e) =>
                setInputs((s) => ({ ...s, password: e.target.value }))
              }
              name='password'
              required
            />

            <button type='submit' className='btn'>
              Next step →
            </button>
          </form>
        </div>
      </div>

      {/* Register Form Page 2 */}
      <div className='signup-modal-container signup-mdl-2'>
        <div className='signup-modal p-4'>
          <h2 className='modal__header text-center mb-3'>Preferences</h2>

          <form
            className='modal__form'
            onSubmit={(e) => {
              const form = e.currentTarget;
              const tzVal = form.elements['timezone']?.value?.trim();
              if (!tzVal || !form.checkValidity()) {
                e.preventDefault();
                form.reportValidity();
                if (!tzVal) alert('Please enter a timezone');
                return;
              }
              e.preventDefault();
              hideContainer(form);
            }}
          >
            <label className='form-label'>Time Zone</label>
            <TimezonePicker
              value={inputs.timezone}
              onChange={(value) =>
                setInputs((s) => ({ ...s, timezone: value }))
              }
            />
            {/* Mirror timezone into  input so native validation can run */}
            <input
              type='text'
              name='timezone'
              value={inputs.timezone || ''}
              onChange={() => {}}
              style={{
                position: 'absolute',
                left: '-9999px',
                width: 0,
                height: 0,
                opacity: 0,
              }}
              aria-hidden='true'
              tabIndex={-1}
            />

            <div className='mb-3'>
              <label className='form-label'>Daily Reminder Time</label>
              <select
                id='signup-d-reminder'
                className='form-control'
                value={inputs.reminderTime}
                onChange={(e) =>
                  setInputs({ ...inputs, reminderTime: e.target.value })
                }
                name='reminderTime'
                required
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
                    required
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
                    required
                  />
                  <label className='form-check-label' htmlFor='dark-mode'>
                    Dark Mode
                  </label>
                </div>
              </div>
            </div>

            <button type='submit' className='btn'>
              Next step →
            </button>
          </form>
        </div>
      </div>

      {/* Register Form Page 3 */}
      <div className='signup-modal-container signup-mdl-3'>
        <div className='signup-modal p-4'>
          <h2 className='modal__header text-center mb-3'>Profile</h2>

          <form
            className='modal__form'
            onSubmit={(e) => {
              const form = e.currentTarget;
              if (!form.checkValidity()) {
                e.preventDefault();
                form.reportValidity();
                return;
              }
              e.preventDefault();
              hideContainer(form);
            }}
          >
            <IconSelector
              value={inputs.avatar}
              onSelect={(src) => setInputs((s) => ({ ...s, avatar: src }))}
            />

            <label htmlFor='focus-area'>Focus Area</label>
            <select
              id='focus-area'
              className='form-control mb-3'
              value={inputs.focus}
              onChange={(e) => setInputs({ ...inputs, focus: e.target.value })}
              name='focus'
              required
            >
              <option value=''>Select an Area of Focus</option>
              <option value='health'>Health &amp; Fitness</option>
              <option value='productivity'>Productivity</option>
              <option value='mindfulness'>Mindfulness</option>
              <option value='learning'>Learning</option>
            </select>

            <label htmlFor='motivation-style'>Motivation Style</label>
            <select
              id='motivation-style'
              className='form-control mb-3'
              value={inputs.motivation}
              onChange={(e) =>
                setInputs({ ...inputs, motivation: e.target.value })
              }
              name='motivation'
              required
            >
              <option value=''>Select your Motivation style</option>
              <option value='rewards'>Rewards / Incentives</option>
              <option value='competition'>Competition</option>
              <option value='streaks'>Streaks / Consistency</option>
              <option value='accountability'>Accountability / Social</option>
              <option value='self-growth'>Personal Growth</option>
            </select>

            <button type='submit' className='btn' onClick={handleNext}>
              Finish →
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;

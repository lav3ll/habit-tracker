import React, { useState } from 'react';
import './SignUp.css';
import TimezonePicker from '../common/TimeZonePicker/TimeZonePicker';
import IconSelector from '../common/IconSelector/IconSelector';
import { v4 as uuidv4 } from 'uuid';

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
    uui: '',
  });

  // track what form is currently active
  const [step, setStep] = useState(1);

  const hideContainer = (formEl) => {
    const container = formEl.closest('.signup-modal-container');
    if (container) container.classList.add('hidden');
  };

  const handleFinish = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // 1) Validate avatar
    if (!inputs.avatar) {
      alert('Please select an avatar');
      return;
    }

    // 2) Validate native requireds
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // 3) Generate UUI
    const uui = uuidv4();
    setInputs((prev) => ({ ...prev, uuid: uui }));

    console.log('Generated UUI:', uui);
    console.log('Final inputs:', { ...inputs, uuid: uui });

    // 4) Hide container
    hideContainer(form);
  };

  const times = Array.from(
    { length: 24 },
    (_, i) => `${i.toString().padStart(2, '0')}:00`
  );

  return (
    <>
      {/* Register Form Page 1 */}
      <div
        className={`signup-modal-container signup-mdl-1 ${
          step !== 1 ? 'hidden' : ''
        }`}
      >
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
              setStep(2); // <— advance to step 2
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
              disabled={step !== 1}
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
              disabled={step !== 1}
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
              disabled={step !== 1}
            />

            <button type='submit' className='btn'>
              Next step →
            </button>
          </form>
        </div>
      </div>

      {/* Register Form Page 2 */}
      <div
        className={`signup-modal-container signup-mdl-2 ${
          step !== 2 ? 'hidden' : ''
        }`}
      >
        <div className='signup-modal p-4'>
          <h2 className='modal__header text-center mb-3'>Preferences</h2>

          <form
            className='modal__form'
            onSubmit={(e) => {
              const form = e.currentTarget;
              const tzVal = inputs.timezone?.trim();
              if (!tzVal || !form.checkValidity()) {
                e.preventDefault();
                form.reportValidity();
                if (!tzVal) alert('Please enter a timezone');
                return;
              }
              e.preventDefault();
              setStep(3); // <— advance to step 3
            }}
          >
            <label className='form-label'>Time Zone</label>
            <TimezonePicker
              value={inputs.timezone}
              onChange={(value) =>
                setInputs((s) => ({ ...s, timezone: value }))
              }
            />
            {/* Mirror input (not required, not focusable) */}

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
                disabled={step !== 2}
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
                    disabled={step !== 2}
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
                    disabled={step !== 2}
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
      <div
        className={`signup-modal-container signup-mdl-3 ${
          step !== 3 ? 'hidden' : ''
        }`}
      >
        <div className='signup-modal p-4'>
          <h2 className='modal__header text-center mb-3'>Profile</h2>

          <form className='modal__form' onSubmit={handleFinish}>
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
              disabled={step !== 3}
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
              disabled={step !== 3}
            >
              <option value=''>Select your Motivation style</option>
              <option value='rewards'>Rewards / Incentives</option>
              <option value='competition'>Competition</option>
              <option value='streaks'>Streaks / Consistency</option>
              <option value='accountability'>Accountability / Social</option>
              <option value='self-growth'>Personal Growth</option>
            </select>

            <button type='submit' className='btn'>
              Finish →
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;

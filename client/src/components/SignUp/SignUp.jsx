import React from 'react';
import './SignUp.css';
import { useEffect, useState } from 'react';
import TimezonePicker from '../common/TimeZonePicker/TimeZonePicker';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });

  const signUpModalElements = document.querySelectorAll(
    '.signup-modal-container'
  );

  useEffect(() => {
    signUpModalElements.forEach((signUpModal) => {
      const signUpBtn = signUpModal.querySelector('.btn');

      if (signUpBtn) {
        signUpBtn.addEventListener('click', (e) => {
          e.preventDefault();
          console.log(inputs.email);
        });
      }
    });

    // cleanup to avoid duplicate listeners
    return () => {
      signUpModalElements.forEach((signUpModal) => {
        const signUpBtn = signUpModal.querySelector('.btn');
        if (signUpBtn) {
          signUpBtn.replaceWith(signUpBtn.cloneNode(true));
        }
      });
    };
  }, []);

  function handleClick(e) {
    e.preventDefault();

    //Send data/save data then move on to the next page

    /////////////////////////////////// Page 1 /////////////////////////////////
    //is the username available?

    // does the email address already exist?

    //is the password to short?
    //is the password to long
    //password entered does not match?
    // does the password contain an upper/lowercase/numeral/special character?

    // if all are not satisfied then click does nothing
  }

  return (
    <>
      {/* Register Form Page 1 */}
      <div className='signup-modal-container signup-mdl-1 hidden'>
        <div className='signup-modal'>
          <h2 className='modal__header'>
            Sign up and <span className='highlight'>conquer</span>
            <br />
            your habits in less than &nbsp;
            <span className='highlight'>5 minutes</span>
          </h2>
          <form className='modal__form'>
            <label>Username</label>
            <input
              type='text'
              id='signup-username'
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
            <label>Email</label>
            <input
              type='email'
              id='signup-email'
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <label>Password</label>
            <input
              type='password'
              id='signup-password'
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
            <button className='btn' onClick={handleClick}>
              Next step &rarr;
            </button>
          </form>
        </div>
      </div>

      {/* Register Form Page 2 */}
      <div className='signup-modal-container signup-mdl-2 '>
        <div className='signup-modal p-4'>
          <h2 className='modal__header text-center mb-3'>Preferences</h2>
          <form className='modal__form'>
            <div className='mb-3'>
              <label className='form-label'>Time Zone</label>
              <TimezonePicker />

              <input
                type='text'
                className='form-control'
                id='signup-timezone'
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Daily Reminder Time</label>
              <input
                type='text'
                className='form-control'
                id='signup-dremindera'
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Theme</label>
              <div className='d-flex gap-3'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='theme'
                    id='light-mode'
                    value='light'
                  />
                  <label className='form-check-label' htmlFor='light-mode'>
                    Light Mode
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='theme'
                    id='dark-mode'
                    value='dark'
                  />
                  <label className='form-check-label' htmlFor='dark-mode'>
                    Dark Mode
                  </label>
                </div>
              </div>
            </div>

            <button className='btn' onClick={handleClick}>
              Next step &rarr;
            </button>
          </form>
        </div>
      </div>
      {/* Register Form Page 3 */}

      <div className='signup-modal-container signup-mdl-3 hidden '>
        <div className='signup-modal p-4'>
          <h2 className='modal__header text-center mb-3'>Profile</h2>
          <form className='modal__form'>
            <div className='mb-3'>
              <label className='form-label'>Avatar Selection</label>
              <input type='dropdown' className='form-control' />
            </div>

            <div className='mb-3'>
              <label htmlFor='focus-area'>Focus Area</label>
              <select
                id='focus-area'
                name='focus-area'
                className='form-control'
              >
                <option value=''>Select an Area of Focus</option>
                <option value='health'>Health & Fitness</option>
                <option value='productivity'>Productivity</option>
                <option value='mindfulness'>Mindfulness</option>
                <option value='learning'>Learning</option>
              </select>
            </div>

            <div className='mb-3'>
              <label htmlFor='motivation-style'>Motivation Style</label>
              <select
                id='motivation-style'
                name='motivation-style'
                className='form-control'
              >
                <option value=''>Select your Motivation style </option>
                <option value='rewards'>Rewards / Incentives</option>
                <option value='competition'>Competition</option>
                <option value='streaks'>Streaks / Consistency</option>
                <option value='accountability'>Accountability / Social</option>
                <option value='self-growth'>Personal Growth</option>
              </select>
            </div>
            <button className='btn' onClick={handleClick}>
              Next step &rarr;
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;

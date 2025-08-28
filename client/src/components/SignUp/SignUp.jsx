import React from 'react';
import './SignUp.css';

const SignUp = () => {
  function handleClick(e) {
    e.preventDefault();
    alert('click');
  }

  return (
    <>
      {/* Register Form Page 1 */}
      <div className='signup-modal-container hidden'>
        <div className='signup-modal'>
          <h2 className='modal__header'>
            Sign up and <span className='highlight'>conquer</span>
            <br />
            your habits in less than &nbsp;
            <span className='highlight'>5 minutes</span>
          </h2>
          <form className='modal__form'>
            <label>Username</label>
            <input type='text' />
            <label>Email Address</label>
            <input type='email' />
            {/*Link to nextJS to send a verification email? */}
            <label>Password</label>
            <input type='text' />
            <label>Confirm Password</label>
            <input type='text' />
            <button className='btn' onClick={handleClick}>
              Next step &rarr;
            </button>
          </form>
        </div>
      </div>

      {/* Register Form Page 2 */}
      <div className='signup-modal-container hidden'>
        <div className='signup-modal p-4'>
          <h2 className='modal__header text-center mb-3'>Preferences</h2>
          <form className='modal__form'>
            <div className='mb-3'>
              <label className='form-label'>Time Zone</label>
              <input type='text' className='form-control' />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Daily Reminder Time</label>
              <input type='text' className='form-control' />
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

            <button className='btn btn-primary w-100'>Next step &rarr;</button>
          </form>
        </div>
      </div>
      {/* Register Form Page 3 */}

      <div className='signup-modal-container'>
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
            <button className='btn btn-primary w-100'>Next step &rarr;</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;

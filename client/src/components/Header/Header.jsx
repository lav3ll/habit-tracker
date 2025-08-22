import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      <nav
        className='navbar navbar-expand-lg bg-body-tertiary header-container'
        data-bs-theme='dark'
      >
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            <h1>Rising Impact</h1>
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Leaderboard
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Account
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Friends
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Log Out
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'></li>
            </ul>
            <p>Track your habits and stay motivated!</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

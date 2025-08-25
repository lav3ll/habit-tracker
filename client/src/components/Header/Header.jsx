import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  function isLoggedIn(loginStatus) {
    loginStatus = true; // Change to false to simulate logged out state
    if (loginStatus) {
      return (
        <>
          <li>
            <Link className='dropdown-item' to='/profile'>
              Profile
            </Link>
          </li>
          <li>
            <Link className='dropdown-item' to='/settings'>
              Settings
            </Link>
          </li>
          <li>
            <Link className='dropdown-item' to='/friends'>
              Friends
            </Link>
          </li>
          <li>
            <hr className='dropdown-divider' />
          </li>
          <li>
            <Link className='dropdown-item' to='/logout'>
              Log Out
            </Link>
          </li>
        </>
      );
    } else {
      return (
        <li>
          <Link className='dropdown-item' to='/login'>
            Log In
          </Link>
        </li>
      );
    }
  }

  return (
    <>
      <nav
        className='navbar navbar-expand-lg bg-body-tertiary header-container'
        data-bs-theme='dark'
      >
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            <h1>Rising Impact</h1>
          </Link>
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
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/leaderboard'>
                  Leaderboard
                </Link>
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
                <ul className='dropdown-menu'>{isLoggedIn()}</ul>
              </li>
            </ul>
            <span className='navbar-text'>
              Track your habits and stay motivated!
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

import React from 'react';
import './Leaderboard.css';
import testData from '../utils/testLeaderboardData.json';

const Leaderboard = () => {
  return (
    <div className='ldbr-container'>
      <div className='ldbrd-header mx-5 w-100'>
        <div className='ldbrd-title text-center my-2'>
          <h4>Rising Impact Leaderboard</h4>
        </div>

        {/* Top controls row */}
        <div className='w-75 row align-items-center mb-3 mx-auto '>
          {/* Search bar */}
          <div className='col-md-4'>
            <form className='d-flex' role='search'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
            </form>
          </div>

          {/* Season dropdown */}
          <div className='col-md-4 text-center'>
            <div className='dropdown'>
              <button
                className='btn btn-secondary dropdown-toggle'
                type='button'
                id='seasonDropdown'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Select Season
              </button>
              <ul
                className='dropdown-menu w-100'
                aria-labelledby='seasonDropdown'
              >
                <li>
                  <button className='dropdown-item'>Season 1</button>
                </li>
                <li>
                  <button className='dropdown-item'>Season 2</button>
                </li>
                <li>
                  <button className='dropdown-item'>Season 3</button>
                </li>
                <li>
                  <button className='dropdown-item'>Season 4</button>
                </li>
                <li>
                  <button className='dropdown-item'>Season 5</button>
                </li>
              </ul>
            </div>
          </div>

          {/* Last updated */}
          <div className='col-md-4 text-end'>
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Leaderboard table */}
        <div className='container px-0'>
          <div className='table-responsive'>
            <table className='table table-striped table-hover align-middle text-center'>
              <thead className='table-light'>
                <tr>
                  <th scope='col'>Rank</th>
                  <th scope='col'>Player</th>
                  <th scope='col'>Title</th>
                  <th scope='col'>Streak</th>
                  <th scope='col'>Category</th>
                </tr>
              </thead>
              <tbody>
                {testData.map((user) => (
                  <tr key={user.uid}>
                    <td className='ldbr-td'>{user.rank}</td>
                    <td className='ldbr-td text-truncate'>{user.name}</td>
                    <td className='ldbr-td text-truncate'>{user.title}</td>
                    <td className='ldbr-td'>{user.streak}</td>
                    <td className='ldbr-td text-truncate'>{user.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

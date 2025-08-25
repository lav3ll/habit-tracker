import React from 'react';

const Leaderboard = () => {
  return (
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
      <div className='container'>
        <table className='table table-striped table-hover align-middle'>
          <thead>
            <tr>
              <th scope='col'>Rank</th>
              <th scope='col'>Name</th>
              <th scope='col'>Title</th>
              <th scope='col'>Streak</th>
              <th scope='col'>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Lav3ll</td>
              <td>Momentum Master</td>
              <td>4000</td>
              <td>Drink Water</td>
            </tr>
            <tr>
              <td>2</td>
              <td>JaneDoe</td>
              <td>Habit Hero</td>
              <td>3500</td>
              <td>Morning Run</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;

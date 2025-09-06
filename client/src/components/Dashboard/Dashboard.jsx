import React from 'react';
import './Dashboard.css';
import testImage from '../utils/character-icons/11.png';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className='container py-3 dashboard mt-5'>
      {/* Top name bar */}
      <div className='d-flex align-items-center  gap-3 mb-3 namebar border-2 bg-light text-black'>
        <h2 className=' radius-5 fw-semibold text-center'>Username</h2>
      </div>
      {/* Main grid */}
      <div className='row g-3'>
        {/* LEFT: Character panel */}
        <div className='col-12 col-lg-4'>
          <div className='card h-100'>
            <div className='card-body'>
              {/* portrait + hp + level */}
              <div className='d-flex align-items-center gap-3 mb-3'>
                <div className='portrait bg-dark-subtle'>
                  <img src={testImage} alt='' />
                </div>
                <div className='flex-grow-1'>
                  <div className='hpbar mb-2'>
                    <div
                      className='hpbar__fill'
                      style={{ width: '100%' }}
                    ></div>
                    <span className='hpbar__text'>100/100</span>
                  </div>
                  <div className='badge bg-secondary'>Lv 4</div>
                </div>
              </div>

              {/* NEW: Character Class */}
              <div className='mb-3'>
                <h6 className='section-title'>Class</h6>
                <div className='badge text-bg-primary fs-6'>Knight</div>
              </div>

              {/* Abilities */}
              <div className='mb-3'>
                <h6 className='section-title'>Abilities</h6>
                <div className='ability-list small'>
                  <button className='btn btn-outline-dark btn-sm w-100 mb-1'>
                    Fireball
                  </button>
                  <button className='btn btn-outline-dark btn-sm w-100 mb-1'>
                    Guard
                  </button>
                  <button className='btn btn-outline-dark btn-sm w-100'>
                    Heal
                  </button>
                </div>
              </div>

              {/* Equipment 2x2 */}
              <div>
                <h6 className='section-title'>Equipment</h6>
                <div className='slot-grid slot-grid--2'>
                  <div className='slot'></div>
                  <div className='slot'></div>
                  <div className='slot'></div>
                  <div className='slot'></div>
                </div>
                <div className='form-text'>4 open slots to equip items.</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Sheets */}
        <div className='col-12 col-lg-8'>
          <div className='row g-3'>
            {/* Status */}
            <div className='col-12 col-md-6'>
              <div className='card h-100'>
                <div className='card-body'>
                  <h6 className='section-title'>Status</h6>
                  <ul className='stat-list small'>
                    <li>
                      Vitality <span>9</span>
                    </li>
                    <li>
                      Crit rate <span>5%</span>
                    </li>
                    <li>
                      Armor Coverage <span>3</span>
                    </li>
                    <li>
                      Evasion <span>2</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Attributes (+ buttons) */}
            <div className='col-12 col-md-6'>
              <div className='card h-100'>
                <div className='card-body d-flex flex-column'>
                  <h6 className='section-title'>Attributes</h6>
                  <ul className='stat-list small flex-grow-1'>
                    <li>
                      Strength{' '}
                      <span>
                        8{' '}
                        <button className='btn btn-sm btn-outline-secondary ms-2'>
                          +
                        </button>
                      </span>
                    </li>
                    <li>
                      Agility{' '}
                      <span>
                        7{' '}
                        <button className='btn btn-sm btn-outline-secondary ms-2'>
                          +
                        </button>
                      </span>
                    </li>
                    <li>
                      Endurance{' '}
                      <span>
                        6{' '}
                        <button className='btn btn-sm btn-outline-secondary ms-2'>
                          +
                        </button>
                      </span>
                    </li>
                  </ul>
                  <div className='d-flex align-items-center justify-content-end gap-2'>
                    <span className='small text-muted'>Attribute points:</span>
                    <span className='badge text-bg-secondary'>3</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Resistances */}
            <div className='col-12 col-md-6'>
              <div className='card h-100'>
                <div className='card-body'>
                  <h6 className='section-title'>Resistances</h6>
                  <ul className='stat-list small'>
                    <li>
                      Cut resist <span>5</span>
                    </li>
                    <li>
                      Crush resist <span>3</span>
                    </li>
                    <li>
                      Pierce resist <span>4</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills (+ points) */}
            <div className='col-12 col-md-6'>
              <div className='card h-100'>
                <div className='card-body d-flex flex-column'>
                  <h6 className='section-title'>Skills</h6>
                  <ul className='stat-list small flex-grow-1'>
                    <li>
                      Melee Attack{' '}
                      <span>
                        5{' '}
                        <button className='btn btn-sm btn-outline-secondary ms-2'>
                          +
                        </button>
                      </span>
                    </li>
                    <li>
                      Ranged Attack{' '}
                      <span>
                        4{' '}
                        <button className='btn btn-sm btn-outline-secondary ms-2'>
                          +
                        </button>
                      </span>
                    </li>
                    <li>
                      Defense{' '}
                      <span>
                        6{' '}
                        <button className='btn btn-sm btn-outline-secondary ms-2'>
                          +
                        </button>
                      </span>
                    </li>
                  </ul>
                  <div className='d-flex align-items-center justify-content-end gap-2'>
                    <span className='small text-muted'>Skill points:</span>
                    <span className='badge text-bg-secondary'>2</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inventory + Burn */}
            <div className='col-12'>
              <div className='card'>
                <div className='card-body'>
                  <div className='d-flex justify-content-between align-items-center mb-2'>
                    <h6 className='section-title mb-0'>Inventory</h6>
                    <div className='small text-muted'>Burn</div>
                  </div>
                  <div className='inventory-wrap'>
                    <div className='slot-grid slot-grid--8 flex-grow-1'>
                      {Array.from({ length: 32 }).map((_, i) => (
                        <div key={i} className='slot'></div>
                      ))}
                    </div>
                    <div className='burn-slot ms-3'></div>
                  </div>
                  <div className='form-text mt-2'>
                    Store, view, equip, or discard items here. Drop into “Burn”
                    to delete.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex align-items-center mt-3 habits'>
        <h2 className=' radius-5 fw-semibold text-center w-100'>
          <Link className='nav-link' to='/habits'>
            <button className='btn btn-outline-primary w-100 bg-dark  fw-semibold text-center'>
              Habits
            </button>
          </Link>
        </h2>
      </div>
    </div>
  );
}

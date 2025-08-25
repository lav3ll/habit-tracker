import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';
import './Homepage.css';
import landingImages from '../utils/landing-images.svg';
import Leaderboard from '../Leaderboard/Leaderboard';
const Homepage = () => {
  return (
    <>
      <div className='homepage-container container-fluid vh-100'>
        <div className='row h-100 align-items-center'>
          {/* Left text */}
          <div className='col-md-6 text-start px-5'>
            <h1 className='homepage-title'>
              <span className='highlight'>Level up your life</span> — turn daily
              habits into points,
              <br /> streaks, and&nbsp;
              <span className='highlight'>rewards!</span>
            </h1>
          </div>

          {/* Right image */}
          <div className='col-md-6 d-flex justify-content-center'>
            <img
              src={landingImages}
              alt='image from character creator'
              className='homepage_img1 img-fluid'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;

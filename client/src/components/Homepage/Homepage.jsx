import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Link,
} from 'react-router-dom';
import './Homepage.css';
import landingImages from '../utils/landing-images.svg';

const Homepage = () => {
  return (
    <>
      <div className='homepage-container container-fluid '>
        <div className='row h-100 align-items-center homepage-row'>
          {/* Left text */}
          <div className='col-md-6 text-start px-5 my-md-auto'>
            {/* Large screens (lg and up) */}
            <h1 className='homepage-title d-none d-lg-block fs-1'>
              <span className='highlight'>Level up your life</span> — turn daily
              habits into points,
              <br /> streaks, and&nbsp;
              <span className='highlight'>rewards!</span>
            </h1>

            {/* Medium screens (md to lg) */}
            <h1 className='homepage-title d-none d-md-block d-lg-none fs-2'>
              <span className='highlight'>Level up your life</span> — turn daily
              habits into points,
              <br /> streaks, and&nbsp;
              <span className='highlight'>rewards!</span>
            </h1>

            {/* Small screens (sm to md) */}
            <h1 className='homepage-title d-block d-md-none fs-3'>
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

      <Link className='signup-btn' to='/Settings'>
        <h2>JOIN NOW</h2>
      </Link>
    </>
  );
};

export default Homepage;

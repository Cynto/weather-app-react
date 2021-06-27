import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  let [nowClass, setNowClass] = useState('nav-link-focused');
  let [hourlyClass, setHourlyClass] = useState('nav-link');
  let [dailyClass, setDailyClass] = useState('nav-link');

  
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <Link to="/">
          <li
            id="now"
            className={nowClass}
            onClick={() => {
              setNowClass('nav-link-focused');
              setHourlyClass('nav-link');
              setDailyClass('nav-link');
              props.setCurrentPage('now');
            }}
          >
            NOW
          </li>
        </Link>
        <Link to="/hourly">
          <li
            id="hourly"
            className={hourlyClass}
            onClick={() => {
              setNowClass('nav-link');
              setHourlyClass('nav-link-focused');
              setDailyClass('nav-link');
              props.setCurrentPage('hourly');
            }}
          >
            HOURLY
          </li>
        </Link>
        <Link to="/daily">
          <li
            id="daily"
            className={dailyClass}
            onClick={() => {
              setNowClass('nav-link');
              setHourlyClass('nav-link');
              setDailyClass('nav-link-focused');
              props.setCurrentPage('daily');
            }}
          >
            DAILY
          </li>
        </Link>
      </ul>
    </nav>
  );
};
export default Navbar;

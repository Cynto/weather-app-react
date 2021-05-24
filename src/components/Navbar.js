import React, { useState } from 'react';

const Navbar = (props) => {
  let [nowClass, setNowClass] = useState('nav-link-focused');
  let [hourlyClass, setHourlyClass] = useState('nav-link');
  let [dailyClass, setDailyClass] = useState('nav-link');
  return (
    <nav className="navbar">
      <a id="now" 
      className={nowClass}
      onClick={() => {
        setNowClass('nav-link-focused');
        setHourlyClass('nav-link');
        setDailyClass('nav-link')
        props.setCurrentPage('now')
      }}>
        NOW
      </a>
      <a id="hourly" 
      className={hourlyClass}
      onClick={() => {
        setNowClass('nav-link');
        setHourlyClass('nav-link-focused');
        setDailyClass('nav-link')
        props.setCurrentPage('hourly')
      }}>
        HOURLY
      </a>
      <a id="daily" 
      className={dailyClass}
      onClick={() => {
        setNowClass('nav-link');
        setHourlyClass('nav-link');
        setDailyClass('nav-link-focused')
        props.setCurrentPage('daily')
      }}>
        DAILY
      </a>
    </nav>
  );
};
export default Navbar;

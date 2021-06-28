import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li
          id="now"
          onClick={() => {
            props.setCurrentPage('now');
          }}
        >
          <NavLink className="nav-link" to="/" exact={true}>NOW</NavLink>
          
        </li>

        <li
          id="hourly"
          onClick={() => {
            props.setCurrentPage('hourly');
          }}
        >
          <NavLink className="nav-link" to="/hourly">HOURLY</NavLink>
        </li>

        <li
          id="daily"
          onClick={() => {
            props.setCurrentPage('daily');
          }}
        >
          <NavLink className="nav-link" to="/daily">DAILY</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

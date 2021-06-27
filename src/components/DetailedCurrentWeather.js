import React, { useState, useEffect } from 'react';
import DetailedCurrentCard from './DetailedCurrentCard';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const DetailedCurrentWeather = (props) => {
  return (
    <div>
      <div className="arrow-date-container">
        <i></i>
        <h3 className="detailed-date">
          {format(new Date(), 'EEEE, MMMM d').toUpperCase()}
        </h3>
        <Link to="/detailed-forecast-1">
          <i
            className="fas fa-arrow-right"
            onClick={() => props.setIndex(1)}
          ></i>
        </Link>
      </div>
      <DetailedCurrentCard />
    </div>
  );
};
export default DetailedCurrentWeather;

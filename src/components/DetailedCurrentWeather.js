import React, { useState, useEffect } from 'react';
import DetailedCurrentCard from './DetailedCurrentCard'

import { format } from 'date-fns';

const DetailedCurrentWeather = (props) => {
  return (
    <div>
      <div className="arrow-date-container">
        <i></i>
        <h3 className="detailed-date">
          {format(new Date(), 'EEEE, MMMM d').toUpperCase()}
        </h3>
        <i className="fas fa-arrow-right" onClick={() => props.getDetailedStats(1)}></i>
      </div>
      <DetailedCurrentCard />
    </div>
  );
};
export default DetailedCurrentWeather;

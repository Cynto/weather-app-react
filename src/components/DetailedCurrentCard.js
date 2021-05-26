import React, { useState, useEffect } from 'react';
import DetailedCurrentStatsContainer from './DetailedCurrentStatsContainer'

import { format } from 'date-fns';
import { getWeatherStorage } from '/src/api/getWeather.js';
import { getIcon } from '/src/api/weatherIcon.js';

function DetailedCurrentCard() {
  const weatherObject = getWeatherStorage();
  return (
    <div className="detailed-card">
      <div className="detailed-card-inner">
        <div className="title-time-container">
          <h2>CURRENT WEATHER</h2>
          <p>{format(new Date(), 'p')}</p>
        </div>
      </div>
      <div className="detailed-temp-container">
        <div className="icon-temp-container">
          <i className={getIcon(weatherObject)}></i>
          <div className="current-temp-detailed">
            {weatherObject.currentTemp}
            <span>{weatherObject.cOrF}</span>
          </div>
        </div>
        <p className="realfeel-detailed">RealFeel {weatherObject.realfeel}</p>
      </div>
      <p className="weather-detailed">{weatherObject.currentWeather}</p>
      <DetailedCurrentStatsContainer />
    </div>
  );
}

export default DetailedCurrentCard;

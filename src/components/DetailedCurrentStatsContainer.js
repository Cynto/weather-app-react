import React from 'react';

import { getWeatherStorage } from '/src/api/getWeather.js';

function DetailedCurrentStatsContainer() {
  const weatherObject = getWeatherStorage();
  return (
    <div className="current-stats-container">
      <div className="left-stats-container">
        <div className="detailed-spaced-content">
          <h4>UV Index</h4>
          <p>{weatherObject.current.uvi}</p>
        </div>

        <div className="detailed-spaced-content">
          <h4>Wind Speed</h4>
          <p>{Math.round(weatherObject.current.wind_speed)} km/h</p>
        </div>

        <div className="detailed-spaced-content">
          <h4>Visibility</h4>
          <p>{weatherObject.current.visibility / 1000} km</p>
        </div>
      </div>

      <div className="right-stats-container">
        <div className="detailed-spaced-content">
          <h4>Humidity</h4>
          <p>{weatherObject.current.humidity} %</p>
        </div>

        <div className="detailed-spaced-content">
          <h4>Pressure</h4>
          <p>{weatherObject.current.pressure} mb</p>
        </div>

        <div className="detailed-spaced-content">
          <h4>Cloud Cover</h4>
          <p>{weatherObject.current.clouds}%</p>
        </div>
      </div>
    </div>
  );
}

export default DetailedCurrentStatsContainer;

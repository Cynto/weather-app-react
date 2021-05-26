import React from 'react'

import { getWeatherStorage } from '/src/api/getWeather.js';

const DetailedStatsContainer = (props) => {
  const weatherObject = getWeatherStorage();
  return(
    <div className="current-stats-container">
      <div className="left-stats-container">
        <div className="detailed-spaced-content">
          <h4>Max UV Index</h4>
          <p>{Math.round(weatherObject.forecast[props.index].uvi)}</p>
        </div>
        <div className="detailed-spaced-content">
          <h4>Wind</h4>
          <p>{Math.round(weatherObject.forecast[props.index].wind_speed)} km/h</p>
        </div>
        <div className="detailed-spaced-content">
          <h4>Wind Gusts</h4>
          <p>{Math.round(weatherObject.forecast[props.index].wind_gust)} km/h</p>
        </div>
        <div className="detailed-spaced-content">
          <h4>Cloud Cover</h4>
          <p>{Math.round(weatherObject.forecast[props.index].uvi)}%</p>
        </div>
      </div>
      
      
      <div className="right-stats-container">
        <div className="detailed-spaced-content">
          <h4>Humidity</h4>
          <p>{Math.round(weatherObject.forecast[props.index].humidity)}</p>
        </div>
        <div className="detailed-spaced-content">
          <h4>Probability of Precipitation</h4>
          <p>{Math.round(weatherObject.forecast[props.index].pop * 100)}%</p>
        </div>
        <div className="detailed-spaced-content">
          <h4>Rain</h4>
          <p>{(weatherObject.forecast[props.index].rain !== undefined) ? Math.round(weatherObject.forecast[props.index].rain * 10) / 10 : 0} mm</p>
        </div>
        <div className="detailed-spaced-content">
          <h4>Pressure</h4>
          <p>{Math.round(weatherObject.forecast[props.index].pressure)} mb</p>
        </div>
      </div>
    </div>
  )
}
export default DetailedStatsContainer
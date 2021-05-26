import React, {useEffect, useState} from 'react';
import DetailedStatsContainer from './DetailedStatsContainer'

import {format} from 'date-fns';
import add from 'date-fns/add'
import { getWeatherStorage } from '/src/api/getWeather.js';
import { getForecastIcon } from '/src/api/weatherIcon.js'



const DetailedDailyCard = (props) => {
  const weatherObject = getWeatherStorage();

  return(
    <div className="detailed-card">
      <div className="detailed-card-inner">
        <div className="title-time-container">
          <h2>DAY</h2>
          <p>{format(add(new Date, {days: props.index}), 'd/M')}</p>
        </div>
        <div className="detailed-temp-container">
          <div className="icon-temp-container">
            <i className={getForecastIcon(weatherObject.forecast[props.index])}></i>
            <div className="current-temp-detailed">
              {Math.round(weatherObject.forecast[props.index].temp.max)}°
              <span>{weatherObject.cOrF}</span>
            </div>
          </div>
          <p className="realfeel-detailed">RealFeel {Math.round(weatherObject.forecast[props.index].feels_like.day)}°</p>
        </div>
        <p className="weather-detailed">{weatherObject.forecast[props.index].weather[0].main}</p>
        <DetailedStatsContainer index={props.index}/>
      </div>
    </div>
  )
}
export default DetailedDailyCard
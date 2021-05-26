import React, {useState, useEffect} from 'react';

import {format} from 'date-fns'
import {getForecastIcon} from '/src/api/weatherIcon.js'
import {getWeatherStorage} from '/src/api/getWeather.js'

const TodayForecastCard = (props) => {
  let weatherObject = getWeatherStorage()
  let [weatherIconClass, setIconClass] = useState(getForecastIcon(weatherObject.forecast[0]))
  let [forecastTemp, setForecastTemp] = useState(Math.round(weatherObject.forecast[0].temp.max))
  let [realfeel, setRealfeel] = useState(Math.round(weatherObject.forecast[0].feels_like.day))
  let [currentWeather, setCurrentWeather] = useState(weatherObject.forecast[0].weather[0].main)

  useEffect(() => {
    weatherObject = getWeatherStorage()
    
    setIconClass(getForecastIcon(weatherObject.forecast[0]))
    setForecastTemp(Math.round(weatherObject.forecast[0].temp.max))
    setRealfeel(Math.round(weatherObject.forecast[0].feels_like.day))
    setCurrentWeather(weatherObject.forecast[0].weather[0].main)
  }, [props.temp])
 
  return (
    <div className="today-forecast-div">
      <div className="card-header">
        <h2>TODAY'S WEATHER FORECAST</h2>
        <span>{format(new Date(), 'd/M')}</span>
      </div>
      <div className="forecast-container">
          <i className={weatherIconClass}></i>
          <h3>{forecastTemp}°</h3>
      </div>
      <div className="real-feel">RealFeel {realfeel}°</div>
      <div className="spaced-content">
        <h3>{currentWeather}</h3>
        <h2 onClick={() => props.getDetailedStats(0)}>MORE DETAILS -></h2>
      </div>
    </div>
  )
}
export default TodayForecastCard
import React, {useState, useEffect} from 'react'
import { format } from 'date-fns'

import {getIcon} from '/src/api/weatherIcon.js'
import unitModule from '/src/api/UnitModule.js'
import {getWeatherStorage} from '/src/api/getWeather.js'

const CurrentWeatherCard = (props) => {
  let weatherObject = getWeatherStorage()
  let [currentTemp, setCurrentTemp] = useState(weatherObject.currentTemp)
  let [unit, setUnit] = useState(weatherObject.cOrF)
  let [realfeel, setRealfeel] = useState(weatherObject.realfeel)
  let [currentWeather, setCurrentWeather] = useState(weatherObject.currentWeather)
  let [iconClass, setIconClass] = useState(getIcon(weatherObject))
  
  useEffect(() => {
    
    weatherObject = getWeatherStorage()
    
    setCurrentTemp(weatherObject.currentTemp)
    setUnit(weatherObject.cOrF)
    setRealfeel(weatherObject.realfeel)
    setCurrentWeather(weatherObject.currentWeather)
    setIconClass(getIcon(weatherObject))
  }, [props.temp])
  return (
    <div className="current-weather-div">
      <h2 className="current-weather-title">CURRENT WEATHER</h2>
      <p className="current-time">{format(new Date(), 'p')}</p>
      <div className="temp-container">
        <i className={iconClass}></i>
        <div className="current-temp">
          {currentTemp}
          <span>{unit}</span>
        </div>
        
    </div>
    <div className="real-feel">
      RealFeel {realfeel}
    </div>
    <div className="spaced-content">
      <h3>{currentWeather}</h3>
      <h2 onClick={props.getDetailedStats}>MORE DETAILS -></h2>
    </div>
  </div>)
  
}
export default CurrentWeatherCard

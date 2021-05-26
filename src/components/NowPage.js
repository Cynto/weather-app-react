import React, { useState, useEffect } from 'react'
import reactDOM from 'react-dom'

import CurrentWeatherCard from './CurrentWeatherCard'
import TodayForecastCard from './TodayForecastCard'
import DetailedCurrentWeather from './DetailedCurrentWeather'

import {getWeatherStorage} from '/src/api/getWeather.js'

const NowPage = (props) => {

  const getDetailedStats = (index) => {
    const mainContainer = document.getElementById('main-container');
    reactDOM.render(<DetailedCurrentWeather getDetailedStats={props.getDetailedStats}/>, mainContainer)
  }
  
  useEffect(() => {
    
  }, [props.temp])
  return (
    <div>
      <CurrentWeatherCard temp={props.temp} getDetailedStats={getDetailedStats}/>
      <TodayForecastCard temp={props.temp} getDetailedStats={props.getDetailedStats}/>
    </div>
  )
}
export default NowPage
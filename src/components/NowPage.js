import React, { useState, useEffect } from 'react'

import CurrentWeatherCard from './CurrentWeatherCard'
import TodayForecastCard from './TodayForecastCard'

import {getWeatherStorage} from '/src/api/getWeather.js'

const NowPage = (props) => {

  
  useEffect(() => {
    
  }, [props.temp])
  return (
    <div>
      <CurrentWeatherCard temp={props.temp} />
      <TodayForecastCard temp={props.temp} />
    </div>
  )
}
export default NowPage
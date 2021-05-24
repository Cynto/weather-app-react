import React, {useState, useEffect} from 'react';

import { getWeatherStorage } from '/src/api/getWeather.js';

const HourlyStatsContainer = (props) => {
  const weatherObject = getWeatherStorage();

  const [weather, setWeather] = useState(weatherObject.hourly[props.index].weather[0].main)
  const [uvIndex, setuvIndex] = useState(Math.round(weatherObject.hourly[props.index].uvi))
  const [windSpeed, setWindSpeed] = useState(Math.round(weatherObject.hourly[props.index].wind_speed))
  const [gustSpeed, setGustSpeed] = useState(Math.round(weatherObject.hourly[props.index].wind_gust))
  const [cloudCover, setCloudCover] = useState(Math.round(weatherObject.hourly[props.index].clouds))
  const [humidity, setHumidity] = useState(Math.round(weatherObject.hourly[props.index].humidity))
  const [pop, setPop] = useState(Math.round(weatherObject.hourly[props.index].pop * 100))
  const [pressure, setPressure] = useState(Math.round(weatherObject.hourly[props.index].pressure))
  const [visibility, setVisibility] = useState(Math.round(weatherObject.hourly[props.index].visibility / 1000))

  
  return (
    <div className="hourly-stats-container">
      <div className="hourly-inner-container">
        <div className="detailed-hourly-spaced">
          <h4>{weather}</h4>
        </div>
        <div className="detailed-hourly-spaced">
          <h4>Max UV index</h4>
          <p>{uvIndex}</p>
        </div>
        <div className="detailed-hourly-spaced">
          <h4>Wind</h4>
          <p>{windSpeed}km/h</p>
        </div>
        <div className="detailed-hourly-spaced">
          <h4>Wind Gusts</h4>
          <p>{gustSpeed}km/h</p>
        </div>
        <div className="detailed-hourly-spaced">
          <h4>Cloud Cover</h4>
          <p>{cloudCover}%</p>
        </div>
        <div className="detailed-hourly-spaced">
          <h4>Humidity</h4>
          <p>{humidity}%</p>
        </div>
        <div className="detailed-hourly-spaced">
          <h4>Probability of Precipitation</h4>
          <p>{pop}%</p>
        </div>
        <div className="detailed-hourly-spaced">
          <h4>Pressure</h4>
          <p>{pressure} mb</p>
        </div>
        <div className="detailed-hourly-spaced">
          <h4>Visibility</h4>
          <p>{visibility} km</p>
        </div>
      </div>
    </div>
  )
}
export default HourlyStatsContainer
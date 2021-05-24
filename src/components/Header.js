import React, { useState } from 'react';
import Search from './Search'



import {getIcon} from '/src/api/weatherIcon.js'
import {getWeather} from '/src/api/getWeather.js'

const Header = (props) => {
  
  
  let [weatherIconClass, setWeatherClass] = useState('')

  async function dataRender(location) {
    try {
      const weatherObject = await getWeather(location);
      console.log(weatherObject)
      
      props.setTemp(weatherObject.currentTemp)
      setWeatherClass(getIcon(weatherObject))
      return weatherObject
    }catch {}
  }
  return (
    <header>
      <div className="left-header">
        <i className="fas fa-sun logo"></i>
        <h1 className="title">Weather</h1>
        <h3 className="location-header">{props.location}</h3>
        <h4 className="header-temp">
          {props.temp}
        </h4>
        <i className={weatherIconClass}></i>
      </div>
      <div className="right-header">
        <Search setLocation={props.setLocation} dataRender={dataRender}/>
      </div>
    </header>
  );
};
export default Header;

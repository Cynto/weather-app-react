import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import add from 'date-fns/add';
import { getForecastIcon } from '/src/api/weatherIcon.js';
import { getWeatherStorage } from '/src/api/getWeather.js';

const DailyRowCard = (props) => {
  const weatherObject = getWeatherStorage();
  const [iconClass, setIconClass] = useState(
    getForecastIcon(weatherObject.forecast[props.index]) + ' daily-row-icon',
  );
  const [temp, setTemp] = useState(
    Math.round(weatherObject.forecast[props.index].temp.max),
  );
  const [minTemp, setMinTemp] = useState(
    Math.round(weatherObject.forecast[props.index].temp.min),
  );
  const [pop, setPop] = useState(
    Math.round(weatherObject.forecast[props.index].pop * 100),
  );

  useEffect(() => {
    setIconClass(
      getForecastIcon(weatherObject.forecast[props.index]) + ' daily-row-icon',
    );
    setTemp(Math.round(weatherObject.forecast[props.index].temp.max));
    setMinTemp(Math.round(weatherObject.forecast[props.index].temp.min));
    setPop(Math.round(weatherObject.forecast[props.index].pop * 100));
  }, [props.temp]);

  const style = {textDecoration: 'none', color: 'black'}
  return (
    <Link style={style} to={`/detailed-forecast-${props.index}`}>
      <div className="daily-row" onClick={() => props.setIndex(props.index)}>
        <div className="row-date-container">
          <p className="day-text">
            {format(add(new Date(), { days: props.index }), 'E')}
          </p>
          <p className="date-text">
            {format(add(new Date(), { days: props.index }), 'd/M')}
          </p>
        </div>
        <i className={iconClass}></i>
        <div className="row-temp-container">
          <h3>{temp}°</h3>
          <h4>/{minTemp}°</h4>
        </div>
        <div className="pop-icon-container">
          <i className="fas fa-tint rain-icon"></i>
          <h4>{pop}%</h4>
        </div>
      </div>
    </Link>
  );
};
export default DailyRowCard;

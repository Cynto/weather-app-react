import React, { useState, useEffect } from 'react';

import { format } from 'date-fns';
import add from 'date-fns/add';
import { getForecastIcon } from '/src/api/weatherIcon';
import { getWeatherStorage } from '/src/api/getWeather.js';

const HourlyRowCard = (props) => {
  const weatherObject = getWeatherStorage();

  let [temp, setTemp] = useState(
    Math.round(weatherObject.hourly[props.index].temp),
  );
  let [realfeel, setRealfeel] = useState(
    Math.round(weatherObject.hourly[props.index].feels_like),
  );

  let [iconClass, setIconClass] = useState(
    getForecastIcon(weatherObject.hourly[props.index]),
  );
  let [pop, setPop] = useState(
    Math.round(weatherObject.hourly[props.index].pop * 100),
  );

  useEffect(() => {
    setIconClass(
      getForecastIcon(weatherObject.hourly[props.index]) + ' daily-row-icon',
    );
    setTemp(Math.round(weatherObject.hourly[props.index].temp));
    setRealfeel(Math.round(weatherObject.hourly[props.index].feels_like));
    setPop(Math.round(weatherObject.hourly[props.index].pop * 100));
  }, [props.temp]);
  return (
    <div
      className={props.rowClass}
      id={'hourly-row' + props.index}
      onClick={() => props.detailedHourlyStatsFunction(props.index, 'show')}
    >
      <div className="row-date-container">
        <p className="hour-text">
          {format(add(new Date(), { hours: props.index }), 'h a')}
        </p>
        <p className="date-text">{format(new Date(), 'd/M')}</p>
      </div>
      <i className={iconClass}></i>
      <div>
        <h3>{temp}°</h3>
      </div>
      <h4 className="hourly-feels-like">RealFeel {realfeel}°</h4>
      <div className="pop-icon-container">
        <i className="fas fa-tint rain-icon"></i>
        <h4>{pop}%</h4>
      </div>
    </div>
  );
};
export default HourlyRowCard;

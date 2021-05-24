import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import HourlyRowCard from './HourlyRowCard';
import DetailedHourlyRow from './DetailedHourlyRow';
import HourlyStatsContainer from './HourlyStatsContainer';

import { getWeatherStorage } from '/src/api/getWeather.js';
import { format } from 'date-fns';


const HourlyPage = (props) => {
  const weatherObject = getWeatherStorage();

  let currentHour = format(new Date(), 'H');
  const timeleft = 24 - currentHour;

  let hourArray = [];
  for (let i = 0; i < timeleft; i += 1) {
    hourArray.push(i);
  }
 
  const detailedHourlyStatsFunction = (index, showOrHide) => {
    const hourlyRow = document.querySelector(`#hourly-row${index}`);

    const outerRow = document.querySelector(`#outer-${index}`);

    const detailedRow = document.querySelector(`#detailed-${index}`);
    if (showOrHide === 'show') {
      
      
      ReactDOM.render(
        [
          <DetailedHourlyRow
            index={index}
            temp={props.temp}
            rowClass={'new-daily-row'}
            detailedHourlyStatsFunction={detailedHourlyStatsFunction}
          />,
          <HourlyStatsContainer index={index} temp={props.temp} />,
        ],
        outerRow,
      );
    } else {
      ReactDOM.render(
        <HourlyRowCard
          key={index}
          index={index}
          rowClass={'daily-row'}
          temp={props.temp}
          detailedHourlyStatsFunction={detailedHourlyStatsFunction}
        />,
        outerRow,
      );
    }
  };

  useEffect(() => {
    for(let i = 0; i < hourArray.length; i += 1) {
      const outerRow = document.querySelector(`#outer-${i}`);
      ReactDOM.render(
        <HourlyRowCard
          key={i}
          index={i}
          rowClass={'daily-row'}
          temp={props.temp}
          detailedHourlyStatsFunction={detailedHourlyStatsFunction}
        />,
        outerRow,
      );
    }
  }, [props.temp]);

  return (
    <div className="weather-container">
      {hourArray.map((item) => (
        <div className="outer-row-div" key={item} id={`outer-${item}`}>
          <HourlyRowCard
            key={item}
            index={item}
            rowClass={'daily-row'}
            temp={props.temp}
            detailedHourlyStatsFunction={detailedHourlyStatsFunction}
          />{' '}
        </div>
      ))}
    </div>
  );
};
export default HourlyPage;

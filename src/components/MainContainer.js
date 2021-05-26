import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import NowPage from './NowPage';
import HourlyPage from './HourlyPage';
import DailyPage from './DailyPage';
import DetailedDailyForecast from './DetailedDailyForecast'

import { getWeatherStorage } from '/src/api/getWeather.js';

const MainContainer = (props) => {
  const weatherObject = getWeatherStorage();

  const getDetailedStats = (index) => {
    const mainContainer = document.getElementById('main-container');

    ReactDOM.render(
      <DetailedDailyForecast
        index={index}
        temp={props.temp}
        getDetailedStats={getDetailedStats}
      />,
      mainContainer,
    );
  };

  useEffect(() => {
    if (props.currentPage === 'now') {
      
      ReactDOM.render(
        <NowPage
          temp={props.temp}
          location={props.location}
          setLocation={props.setLocation}
          getDetailedStats={getDetailedStats}
        />,
        document.getElementById('main-container'),
      );
    } else if (props.currentPage === 'hourly') {
      ReactDOM.render(
        <HourlyPage
          temp={props.temp}
          location={props.location}
          setLocation={props.setLocation}
        />,
        document.getElementById('main-container'),
      );
    } else {
      ReactDOM.render(
        <DailyPage
          temp={props.temp}
          location={props.location}
          setLocation={props.setLocation}
          getDetailedStats={getDetailedStats}
        />,
        document.getElementById('main-container'),
      );
    }
  }, [props.currentPage, props.temp]);

  return (
    <div className="main-container" id="main-container">
      {/*
     <NowPage temp={props.temp} location={props.location} setLocation={props.setLocation}/> */}
    </div>
  );
};
export default MainContainer;

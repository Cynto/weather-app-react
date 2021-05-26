import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import DailyRowCard from './DailyRowCard';
import DetailedDailyForecast from './DetailedDailyForecast';

const DailyPage = (props) => {
  const dailyArray = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="weather-container">
      {dailyArray.map((item) => (
        <DailyRowCard
          key={item}
          index={item}
          temp={props.temp}
          getDetailedStats={props.getDetailedStats}
        />
      ))}
    </div>
  );
};
export default DailyPage;

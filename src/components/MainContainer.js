import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import NowPage from './NowPage';
import HourlyPage from './HourlyPage';
import DailyPage from './DailyPage';
import DetailedDailyForecast from './DetailedDailyForecast';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailedCurrentWeather from './DetailedCurrentWeather';

import { getWeatherStorage } from '/src/api/getWeather.js';

const MainContainer = (props) => {
  const weatherObject = getWeatherStorage();

  const [index, setIndex] = useState(0);

  const detailedArray = [0, 1, 2, 3, 4, 5, 6, 7];

  

  return (
    <div id="main-container">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <NowPage
              temp={props.temp}
              location={props.location}
              setLocation={props.setLocation}
            />
          )}
        />
        <Route
          exact
          path="/hourly"
          render={() => (
            <HourlyPage
              temp={props.temp}
              location={props.location}
              setLocation={props.setLocation}
            />
          )}
        />
        <Route
          exact
          path="/daily"
          render={() => (
            <DailyPage
              temp={props.temp}
              location={props.location}
              setLocation={props.setLocation}
              setIndex={setIndex}
              index={index}
            />
          )}
        />
        <Route
          exact
          path="/detailed-current"
          render={() => <DetailedCurrentWeather setIndex={setIndex} />}
        />

        {detailedArray.map((item) => {
          return (
            <Route
              key={item}
              exact
              path={`/detailed-forecast-${item}`}
              render={() => (
                <DetailedDailyForecast
                  index={item}
                  temp={props.temp}
                  setIndex={setIndex}
                />
              )}
            />
          );
        })}
      </Switch>
    </div>
  );
};
export default MainContainer;

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer';

import { getWeatherStorage } from './api/getWeather';

const App = () => {
  let [location, setLocation] = useState('London');
  let [temp, setTemp] = useState(0);
  let [currentPage, setCurrentPage] = useState('now');

  return (
    <div className="App">
      <Header
        temp={temp}
        setTemp={setTemp}
        location={location}
        setLocation={setLocation}
      />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <MainContainer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        temp={temp}
        location={location}
        setLocation={setLocation}
      />
    </div>
  );
};
export default App;
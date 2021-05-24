import getWeatherData from './weatherData';
import getCoordinates from './coordinatesModule';
import unitModule from './UnitModule';

const getWeatherStorage = () => {
  const weatherObject = JSON.parse(localStorage.getItem('weatherObject'));
  
  return weatherObject;
};

async function getWeather(location) {
  let unit = unitModule.getUnit();
  try {
    const coordArray = await getCoordinates(location);
    const weatherData = await getWeatherData(
      coordArray[0],
      coordArray[1],
      unit,
    );
    const locationCap = location.charAt(0).toUpperCase() + location.slice(1);

    const weatherObject = {
      place: locationCap,
      currentTemp: `${Math.round(weatherData.current.temp)}°`,
      currentWeather: weatherData.current.weather[0].main,
      current: weatherData.current,
      forecast: weatherData.daily,
      realfeel: `${Math.round(weatherData.current.feels_like)}°`,
      hourly: weatherData.hourly,
      cOrF: unit === 'metric' ? 'c' : 'F',
    };
    
    localStorage.setItem('weatherObject', JSON.stringify(weatherObject));
    getWeatherStorage()
    return weatherObject;
  } catch {}
}
export { getWeatherStorage, getWeather };

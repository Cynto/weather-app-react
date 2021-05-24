function getIcon(weatherObject) {
  if (weatherObject.currentWeather === 'Clouds') {
    return 'fas fa-cloud cloud';
  } else if (weatherObject.currentWeather === 'Rain') {
    return 'fas fa-cloud-rain cloud';
  } else if (weatherObject.currentWeather === 'Clear') {
    return('far fa-sun sun');
  }
  
}
function getForecastIcon(weatherObject) {
  if (weatherObject.weather[0].main === 'Clouds') {
    return('fas fa-cloud cloud');
  } else if (weatherObject.weather[0].main === 'Rain') {
    return('fas fa-cloud-rain cloud');
  } else if (weatherObject.weather[0].main === 'Clear') {
    return('far fa-sun sun');
  }
  
}
export { getIcon, getForecastIcon };

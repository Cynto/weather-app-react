import React from 'react';
import DailyRowCard from './DailyRowCard'

const DailyPage = (props) => {
  const dailyArray = [0, 1, 2, 3, 4, 5, 6, 7]

  return(
    <div className="weather-container">
     {dailyArray.map((item)=> (<DailyRowCard key={item} index={item} temp={props.temp}/>))}
    </div>
  )
}
export default DailyPage
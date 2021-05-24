import React, {useEffect} from 'react';
import HourlyRowCard from './HourlyRowCard';

const DetailedHourlyRow = (props) => {

  useEffect(() => {
    console.log('dog')
  }, [props.temp])
  return (
    <div
      className="detailed-hourly"
      id={`detailed-${props.index}`}
      onClick={() => props.detailedHourlyStatsFunction(props.index,'hide')}
    >
      <HourlyRowCard
        key={props.index}
        index={props.index}
        temp={props.temp}
        rowClass={'new-daily-row'}
        detailedHourlyStatsFunction={props.detailedHourlyStatsFunction}
      />
    </div>
  );
};
export default DetailedHourlyRow;

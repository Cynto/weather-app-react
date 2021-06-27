import React, { useState, useEffect } from 'react';
import DetailedDailyCard from './DetailedDailyCard';
import { Link } from 'react-router-dom';

import { format } from 'date-fns';
import add from 'date-fns/add';

const DetailedDailyForecast = (props) => {
  const [leftArrowClass, setLeftArrow] = useState(
    props.index != 0 ? 'fas fa-arrow-left' : '',
  );
  const [rightArrowClass, setRightArrow] = useState(
    props.index != 7 ? 'fas fa-arrow-right' : '',
  );

  useEffect(() => {
    if (props.index === 0) {
      setLeftArrow('');
    } else if (props.index === 7) {
      setRightArrow('');
    } else {
      setLeftArrow('fas fa-arrow-left');
      setRightArrow('fas fa-arrow-right');
    }
  }, [props.index]);

  return (
    <div>
      <div className="arrow-date-container">
        <Link to={`/detailed-forecast-${props.index - 1}`}>
          <i
            className={leftArrowClass}
            onClick={() => props.setIndex(props.index - 1)}
          ></i>
        </Link>
        <h3 className="detailed-date">
          {format(
            add(new Date(), { days: props.index }),
            'EEEE, MMMM d',
          ).toUpperCase()}
        </h3>
        <Link to={`/detailed-forecast-${props.index + 1}`}>
          <i
            className={rightArrowClass}
            onClick={() =>
              props.index != 7 ? props.setIndex(props.index + 1) : ''
            }
          ></i>
        </Link>
      </div>
      <DetailedDailyCard temp={props.temp} index={props.index} />
    </div>
  );
};
export default DetailedDailyForecast;

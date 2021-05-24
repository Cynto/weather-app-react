import React, { useState, useEffect } from 'react';
import unitModule from '/src/api/UnitModule.js';
import locationFunction from '/src/api/location.js';

const Unit = (props) => {
  let chosenUnitArray = ['chosen-unit', ''];
  let [unitClass1, setUnitClass1] = useState('chosen-unit');
  let [unitClass2, setUnitClass2] = useState('');

  useEffect(() => {
    const location = locationFunction.getLocation();

        if (unitClass1 === 'chosen-unit') {
          unitModule.setUnit('metric');
        } else unitModule.setUnit('imperial');
        props.dataRender(location);
        
  }, [unitClass1])
  
  return (
    <button
      onClick={() => {
        if (unitClass1 === 'chosen-unit') {
          setUnitClass1('');
          setUnitClass2('chosen-unit');
        } else {
          setUnitClass1('chosen-unit');
          setUnitClass2('');
        }
      }}
    >
      <span id="c" className={unitClass1}>
        °C
      </span>
      <span>/</span>
      <span id="f" className={unitClass2}>
        °F
      </span>
    </button>
  );
};
export default Unit;

import React from 'react';
import DirectionData from './directionData';
import { DIRECTIONDATA } from './constant';

const Directions = () => {
  return (
    <div>
       {DIRECTIONDATA.map((DIRECTION) => {
        return(
          <DirectionData 
          text1={DIRECTION.text1}
          />
        )
       })}

    </div>
  );
};

export default Directions;

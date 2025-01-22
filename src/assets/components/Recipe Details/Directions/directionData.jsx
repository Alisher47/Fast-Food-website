import React, { useEffect } from 'react';
import image from '../../../../constants/images/direction.png';
import Container from '../../Home/Bottom_Rectangle/bottomModal'
const DirectionData = ({text1}) => {
 
 useEffect(() => {
  console.log("text", text1)
 }, [text1])
  return (
    <div>
      <div className='absolute w-[165px] top-[2550px] h-[44px] text-[32px] font-inter font-semibold'>
        <h3>Directions</h3>
      </div>

      <div className='absolute top-[2650px] w-[339px] h-[29px] left-[128px] text-[20px] font-inter font-semibold'>
       <h3>1. lorem ipsum dolor sit amet</h3>
      </div>
      <div className='absolute top-[2700px] w-[792px] h-[104px] left-[128px] font-inter'>
       <p>{text1}</p>
      </div>
      <div className='absolute top-[2800px] w-[792px]  h-[400px] left-[128px] rounded-[20px]'>
      <img src={image} 
      alt="" />

      </div>
      <div className='absolute top-[3200px] w-[339px] h-[29px] left-[128px] text-[20px] font-inter font-semibold'>
        <h3>2. lorem ipsum dolor sit amet</h3>
      </div>
      <div className='absolute top-[3350px] w-[792px] h-[104px] left-[128px] font-inter'>
       <p>{text1}</p>
      </div>
      <div className='absolute top-[3500px] w-[339px] h-[29px] left-[128px] text-[20px] font-inter font-semibold'>
        <h3>3. lorem ipsum dolor sit amet</h3>
      </div>
      <div className='absolute top-[3650px] w-[792px] h-[104px] left-[128px] font-inter'>
       <p>{text1}</p>
      </div>
    </div>
  );
};

export default DirectionData;

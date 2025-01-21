import React from 'react'
import chicken from '../../../../constants/images/cheese.png';
import chicken2 from '../../../../constants/images/pasta.png';
import rice from '../../../../constants/images/rice.png';
import pic from '../../../../constants/images/pic.png';

const OtherRecipies = () => {
  return (
    <div>
      <div>
        <h3 className='absolute w-[188px] top-[1273px] h-[39px] left-[960px] font-inter font-semibold text-[30px]'>Other Recipe</h3>
      </div>
      <div>
        <img src={chicken} alt="" 
        className='absolute w-[180px] top-[1340px] h-[175px] left-[960px] rounded-[30px] '
        />
      </div>

      <div className='absolute w-[196px] h-[56px] top-[1360px] left-[1164px]'>
       <h3 className='text-[24px] font-inter font-semibold'>Chicken Meatball with Creamy Chees...</h3>

      </div>
      <div>
        <img src={chicken2} alt="" 
        className='absolute w-[180px] top-[1560px] h-[175px] left-[960px] rounded-[30px] '
        />
      </div>

      <div className='absolute w-[196px] h-[56px] top-[1580px] left-[1164px]'>
       <h3 className='text-[24px] font-inter font-semibold'>The Creamiest Creamy Chicken an...</h3>
      </div>
      
      <div>
        <img src={rice} alt="" 
        className='absolute w-[180px] top-[1780px] h-[175px] left-[960px] rounded-[30px] '
        />
      </div>

      <div className='absolute w-[196px] h-[56px] top-[1800px] left-[1164px]'>
       <h3 className='text-[24px] font-inter font-semibold'>The Creamiest Creamy Chicken an...</h3>
      </div>
      <div>
        <img src={pic} alt="" 
        className='absolute top-[2000px] w-[400px] h-[434px] left-[960px] '
        />
      </div>
      
    </div>
  )
}

export default OtherRecipies
 
import React from 'react'
import Button from '../../Home/Buttons/buttons';
import plate from '../../../../constants/images/Photo-plate.png';
import plant from '../../../../constants/images/plant.png';
import vegetables from '../../../../constants/images/vegetables.png';
const Modal = () => {
  return (
    <div>
    <div className="absolute w-[1280px] h-[442px] top-[3900px] left-[80px] bg-[#E7F9FD] rounded-[60px]">
        <div className='absolute w-[589px] h-[58px] top-[80px] font-bold right-[350px] font-inter text-[42px] '>
        Deliciousness to your inbox
        </div>
    </div>
    <div className='absolute top-[4060px] w-[620px] h-[56px] left-[410px] font-inter text-[16px] text-center'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </div>
    <div className="absolute h-[80px] top-[4150px] left-[480px] bg-[#FFFFFF] rounded-[24px] mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[480px] h-full px-4 py-2 rounded-[24px] text-gray-700"
            
          />
          <Button
          text="Subscribe"
          className="absolute w-[160px] h-[60px] top-[10px] left-[310px] bottom-[10px] rounded-[16px] font-inter font-semibold text-[14px] leading-[16.94px] tracking-[-2%] bg-black text-white"
        />
        </div>
        <div className="">
        <img
          src={plate} 
          alt="Plate"
          className="absolute w-[270px] h-[270px] top-[4060px] right-[80px] rounded-[60px]"
        />
      </div>
      <div className=''>
        <img src={plant} alt="" 
        className='absolute w-[67px] h-[90px] top-[4100px] left-[1010px]'
        />
      </div>
      <div className="">
        <img src={vegetables} alt="Vegetables" className="absolute w-[300px] h-[300px] top-[4000px] left-[40px] rotate-[-30deg]" />
      </div>
</div>
  )
}

export default Modal

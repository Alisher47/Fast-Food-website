import React from 'react'
import Button from '../Buttons/buttons'
import plate from '../../../../../src/constants/images/Photo-plate.png';
import plant from '../../../../../src/constants/images/plant.png';
import vegetables from '../../../../../src/constants/images/vegetables.png';
const Modal = () => {
  return (
    <div>
    <div className="absolute w-[1280px] h-[442px] top-[6250px] left-[80px] bg-[#E7F9FD] rounded-[60px]">
        <div className='absolute w-[589px] h-[58px] top-[80px] font-bold right-[350px] font-inter text-[42px] '>
        Deliciousness to your inbox
        </div>
    </div>
    <div className='absolute top-[6410px] w-[620px] h-[56px] left-[410px] font-inter text-[16px] text-center'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </div>
    <div className="absolute h-[80px] top-[6500px] left-[480px] bg-[#FFFFFF] rounded-[24px] mt-4">
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
          className="absolute w-[270px] h-[270px] top-[6424px] right-[80px] rounded-[60px]"
        />
      </div>
      <div className=''>
        <img src={plant} alt="" 
        className='absolute w-[67px] h-[90px] top-[6500px] left-[1010px]'
        />
      </div>
      <div className="">
        <img src={vegetables} alt="Vegetables" className="absolute w-[300px] h-[300px] top-[6350px] left-[40px] rotate-[-30deg]" />
      </div>
</div>
  )
}

export default Modal

import React from 'react';
import Button from '../Buttons/buttons';
import plate from '../../../../../src/constants/images/Photo-plate.png';
import plant from '../../../../../src/constants/images/plant.png';
import vegetables from '../../../../../src/constants/images/vegetables.png';

const Modal = () => {
  return (
    <div className="bg-[#E7F9FD] rounded-[60px] p-8 md:p-12 relative h-[442px]">
  
      <div className="font-inter font-bold text-[32px] text-center mb-4">
        Deliciousness to your inbox
      </div>

      <div className="text-[16px] text-center mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>

      <div className="flex justify-center items-center mb-6">
        <div className="relative w-full max-w-[480px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-[60px] px-4 py-2 rounded-[24px] text-gray-700 mt-4"  
          />
          <Button
            text="Subscribe"
            className="absolute right-0 top-[10px] w-[160px] h-[60px] rounded-[16px] bg-black text-white"
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <img
          src={vegetables}
          alt="Vegetables"
          className="w-[200px] h-[200px] rotate-[-30deg]"
        />
        <img
          src={plate}
          alt="Plate"
          className="w-[240px] h-[240px] rounded-[60px]"
        />
      </div>

      <img
        src={plant}
        alt="Plant"
        className="absolute bottom-0 right-0 w-[80px] h-[100px]"
      />
    </div>
  );
};

export default Modal;

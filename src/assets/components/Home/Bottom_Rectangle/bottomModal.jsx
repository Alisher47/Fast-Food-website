import React from 'react';
import Button from '../Buttons/buttons';
import plate from '../../../../../src/constants/images/Photo-plate.png';
import plant from '../../../../../src/constants/images/plant.png';
import vegetables from '../../../../../src/constants/images/vegetables.png';

const Modal = () => {
  return (
    <div className="bg-[#E7F9FD] rounded-[60px] p-8 md:p-12 h-auto flex flex-col items-center">
      <div className="font-inter font-bold text-[32px] text-center mb-4">
        Deliciousness to your inbox
      </div>

      <div className="text-[16px] text-center mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mb-6 w-full max-w-[480px] gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full h-[60px] px-4 py-2 rounded-[24px] text-gray-700"  
        />
        <Button
          text="Subscribe"
          className="w-[160px] h-[60px] rounded-[16px] bg-black text-white"
        />
      </div>

      {/* Container for images */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-8 w-full">
        <div className="flex justify-start w-1/2">
          <img
            src={vegetables}
            alt="Vegetables"
            className="w-[160px] h-[160px]"
          />
        </div>
        <div className="flex justify-end w-1/2 gap-4">
          <img
            src={plate}
            alt="Plate"
            className="w-[200px] h-[200px] rounded-[60px]"
          />
          <img
            src={plant}
            alt="Plant"
            className="w-[80px] h-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;

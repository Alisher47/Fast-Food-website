import React from 'react';
import clock from '../../../../constants/icons/clock.svg';
import forkKnife from '../../../../constants/icons/forkKnife.svg';
import Button from '../../Home/Buttons/buttons';

const Data = ({ imageSrc, title, type, time }) => {
  return (
    <div className="w-[290px] p-4">
      <div className=" w-full h-[400px] p-4 rounded-lg bg-white shadow-sm">
        <img
          src={imageSrc}
          className="w-full h-[250px] object-cover rounded-lg"
        />
        
        <h3 className="mt-4 font-inter font-semibold text-[18px] leading-[26px]">{title}</h3>

        <div className="mt-4 flex justify-between text-[14px]">
          <Button className="flex items-center space-x-2">
            <img
              src={clock}
              alt="Clock Icon"
              className="w-[18px] h-[18px]"
            />
            <span>{time} Minutes</span>
          </Button>

          <Button className="flex items-center space-x-2">
            <img
              src={forkKnife}
              alt="Fork Knife Icon"
              className="w-[18px] h-[18px]"
            />
            <span>{type}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Data;

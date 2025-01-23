import React from "react";
import forkKnife from '../../../../constants/icons/forkKnife.svg';
import clock from '../../../../constants/icons/clock.svg';
import Button from '../Buttons/buttons';

const RecipeCard = ({ imageSrc, title, time, type }) => {
  return (
    <div className="w-[290px] h-[290px] rounded-[20px] p-4">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[290px] object-cover rounded-[15px]"
      />
      <div className="mt-4">
        <h3 className="font-inter font-semibold text-[18px] leading-[26px] tracking-[-4%]">
          {title}
        </h3>
      </div>

      <div className="flex justify-between mt-4">
        <Button className="h-[17px] text-black text-[14px] font-inter font-semibold leading-[16.94px] tracking-[-0.02em] border-0 cursor-pointer flex items-center">
          <img
            src={clock}
            alt="Icon"
            style={{ width: "24px", height: "24px", marginRight: "8px" }}
          />
          {time} Minutes
        </Button>

        <Button className="h-[17px] text-black text-[14px] font-inter font-semibold leading-[16.94px] tracking-[-0.02em] border-0 cursor-pointer flex items-center">
          <img
            src={forkKnife}
            alt="Icon"
            style={{ width: "24px", height: "24px", marginRight: "8px" }}
          />
          {type}
        </Button>
      </div>
    </div>
  );
};

export default RecipeCard;

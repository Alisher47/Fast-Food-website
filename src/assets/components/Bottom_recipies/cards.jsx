import React from "react";
import forkKnife from '../../../constants/icons/forkKnife.svg';
import clock from '../../../constants/icons/clock.svg';
import Button from '../Buttons/buttons'

const RecipeCard = ({ imageSrc, title, time, type }) => {
  return (
    <div className="w-[290px] h-[291.2px] top-[5291px] left-[80px] rounded-[20px] p-4 relative">
      <img
        src={imageSrc}
        alt={title}
        className="w-[368px] h-[250px] object-cover rounded-[15px]"
      />
      <div className="mt-4">
        <h3 className="font-inter font-semibold text-[18px] leading-[26px] tracking-[-4%]">
          {title}
        </h3>
      </div>

      <Button className="absolute top-[240px] left-[20px] h-[17px] text-black text-[14px] font-inter font-semibold leading-[16.94px] tracking-[-0.02em] border-0 cursor-pointer flex items-center justify-center">
        <img
          src={clock}
          alt="Icon"
          style={{ width: "24px", height: "24px", marginRight: "8px" }}
        />
        {time} Minutes
      </Button>

      <Button className="absolute top-[240px] left-[170px] h-[17px] text-black text-[14px] font-inter font-semibold leading-[16.94px] tracking-[-0.02em] border-0 cursor-pointer flex items-center justify-center">
        <img
          src={forkKnife}
          alt="Icon"
          style={{ width: "24px", height: "24px", marginRight: "8px" }}
        />
        {type}
      </Button>
    </div>
  );
};

export default RecipeCard;

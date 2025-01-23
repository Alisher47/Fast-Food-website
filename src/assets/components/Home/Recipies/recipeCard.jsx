import React from 'react';
import Button from '../Buttons/buttons';

const RecipeCard = ({ imgSrc, title, timeText, buttonLabel, buttonText }) => {
  return (
    <div className="w-[350px] h-[450px] bg-[#E7F9FD] rounded-[30px] p-4 flex flex-col items-center">
      <div className="w-full h-[250px] mb-4">
        <img
          src={imgSrc}
          alt="Recipe"
          className="w-full h-full object-cover rounded-[15px]"
        />
      </div>

      <div className="text-center">
        <h3 className="font-inter font-bold text-[24px] mb-4">{title}</h3>

        <Button className="w-[140px] h-[40px] bg-[#E7F9FD] text-black text-[14px] font-inter font-semibold rounded-[16px] flex items-center justify-center mb-2">
          <img
            src={buttonText}
            alt="Icon"
            className="w-[16px] h-[16px] mr-2"
          />
          {timeText}
        </Button>

        <Button className="w-[140px] h-[40px] bg-black text-white text-[14px] font-inter font-semibold rounded-[16px]">
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default RecipeCard;

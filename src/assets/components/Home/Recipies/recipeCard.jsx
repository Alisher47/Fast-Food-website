import React from 'react';
import Button from '../Buttons/buttons';

const RecipeCard = ({ imgSrc, title, timeText, buttonLabel, buttonText }) => {
  return (
    <div className="w-[400px] h-[450px] bg-[#E7F9FD] rounded-[30px] p-4">
      <img
        src={imgSrc}
        alt="Recipesss"
        className="w-[368px] h-[250px] object-cover rounded-[15px] ml-0 mt-[0px]"
      />
      <div className="mt-4 text-center relative">
        <h3 className="font-inter font-bold text-[24px]">{title}</h3>
        

        <button
          className="absolute w-[73px] h-[17px] top-[70px] left-[138px] bg-[#E7F9FD] text-black text-[14px] font-inter font-semibold"
        >
          <img
            src={buttonText}
            alt="Icon"
          />
          {timeText}
        </button>
        
        {/* Second button */}
        <button
          className="absolute w-[40px] h-[17px] top-[2090px] left-[269px] bg-[#E7F9FD] text-black text-[14px] font-inter font-semibold leading-[16.94px] tracking-[-0.02em] border-0 cursor-pointer flex items-center justify-center"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;

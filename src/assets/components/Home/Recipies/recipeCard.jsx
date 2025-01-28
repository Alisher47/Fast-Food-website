import React from 'react';
import Button from '../Buttons/buttons';
import { useDispatch } from 'react-redux';
import addProduct from '../../../../features/cartSlice'

const RecipeCard = ({ imgSrc, title, timeText, buttonText }) => {
  const dispatch = useDispatch()

  const addProduct = (e) => {
    e.preventDefault()
    dispatch(addProduct())
  }
  
  return (
    <div
      className="w-[350px] h-[450px] bg-[#E7F9FD] rounded-[30px] p-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
    >
      <div className="w-full h-[250px] mb-4 overflow-hidden rounded-[15px]">
        <img
          src={imgSrc}
          alt="Recipe"
          className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-500"
        />
      </div>

      <div className="text-center">
        <h3 className="font-inter font-bold text-[24px] mb-4 transition-colors duration-300 hover:text-blue-600">
          {title}
        </h3>

        <button
          className="w-[140px] h-[40px] bg-[#E7F9FD] text-black text-[14px] font-inter font-semibold rounded-[16px] flex items-center justify-center mb-2 transition-colors duration-300 hover:bg-blue-600 hover:text-white"
        >
          <img
            src={buttonText}
            alt="Icon"
            className="w-[16px] h-[16px] mr-2"
          />
          {timeText}
        </button>

        <div className="mt-4">
          <Button 
            text="Add to Cart"
            className="bg-black text-white font-inter text-[18px] font-semibold rounded-[16px] transition-transform transform hover:scale-110 hover:shadow-2xl duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

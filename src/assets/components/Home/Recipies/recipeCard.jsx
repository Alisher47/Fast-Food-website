import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../../features/cartSlice'; // Correct path to your cartSlice
import Button from '../Buttons/buttons';

const RecipeCard = ({ imgSrc, title, description, price }) => {
  const dispatch = useDispatch();

  const addToCart = (e) => {
    e.preventDefault();
    
    const product = {
      imgSrc, 
      title, 
      description, 
      price, 
    };

    dispatch(addProduct(product)); // Dispatch the action to add the product to the cart
  };

  return (
    <div className="w-[350px] h-[450px] bg-[#E7F9FD] rounded-[30px] p-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
      <div className="w-full h-[250px] mb-4 overflow-hidden rounded-[15px]">
        <img
          src={imgSrc}
          alt="Recipe"
          className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-500"
        />
      </div>

      <div className="text-center flex flex-col items-center w-full">
        <h3 className="font-inter font-bold text-[24px] mb-4 transition-colors duration-300 hover:text-blue-600">
          {title}
        </h3>
        
        {/* Simple price style */}
        <h3 className="text-lg font-semibold text-white">{price}</h3>
        
        <div className="w-full flex justify-end">
          <Button
            text="Add to Cart"
            className="bg-black text-white font-inter text-[18px] font-semibold rounded-[16px] px-6 py-2"
            onClick={addToCart} 
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

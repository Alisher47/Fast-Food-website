import React from "react";
import image from '../../../../../src/constants/images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.jpg';
import image1 from '../../../../../src/constants/images/image 14.jpg';
import image2 from '../../../../../src/constants/images/Vector.jpg';

const Container = () => {
  return (
    <div className="mt-[100px] flex"> 
      <div className="bg-[#E7FAFE] w-1/2 p-8 flex flex-col justify-center rounded-tl-[30px] rounded-bl-[30px]">

        <div className="flex justify-start mb-8">
          <button className="w-[156px] h-[45px] rounded-[30px] bg-white text-black border-0 text-[16px] cursor-pointer flex items-center justify-center">
            <img
              src={image1}
              alt="Icon"
              className="w-[24px] h-[24px] mr-2"
            />
            Hot Recipes
          </button>
        </div>

        <div className="font-inter font-semibold text-[64px] leading-[77.45px] tracking-[-0.04em] mb-4">
          Spicy Delicious Chicken Wings
        </div>

        <div className="text-[16px] leading-[28px] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
        </div>

        <div className="flex space-x-4 mb-8">
          <button className="w-[156px] h-[45px] rounded-[30px] bg-gray-300 text-black border-0 text-[16px] cursor-pointer flex items-center justify-center">
            <img
              src={image2}
              alt="Icon"
              className="w-[24px] h-[24px] mr-2"
            />
            30 Minutes
          </button>

          <button className="w-[156px] h-[45px] rounded-[30px] bg-gray-300 text-black border-0 text-[16px] cursor-pointer flex items-center justify-center">
            Chicken
          </button>
        </div>

        <div className="flex justify-center">
          <button className="w-[200px] h-[60px] rounded-[16px] bg-black text-white text-[18px] cursor-pointer flex items-center justify-center font-inter">
            View Recipes
          </button>
        </div>
      </div>

      <div className="w-1/2">
        <img
          src={image}
          alt="Chicken Wings"
          className="w-full h-full object-cover rounded-tr-[30px] rounded-br-[30px]"
        />
      </div>
    </div>
  );
};

export default Container;

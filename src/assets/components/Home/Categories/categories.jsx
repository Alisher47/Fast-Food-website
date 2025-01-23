import React from "react";
import image4 from "../../../../../src/constants/images/image 25.jpg";
import image5 from "../../../../../src/constants/images/image 20.jpg";
import image7 from '../../../../../src/constants/images/image 22.png';
import image8 from "../../../../../src/constants/images/image 23.png";
import image9 from "../../../../../src/constants/images/image 24.png";
import image6 from "../../../../../src/constants/images/image 21.png";

const Categories = () => {
  return (
    <div className="mt-[150px] px-12 w-full max-w-[1280px] mx-auto"> {/* Center container and make width responsive */}
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div className="text-[32px] font-semibold">Categories</div>
        <button className="text-[16px] text-black bg-[#E7FAFE] h-[60px] w-[200px] rounded-[16px]">
          View all categories
        </button>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        <div className="flex flex-col items-center justify-center w-full">
          <img
            src={image4}
            alt="Breakfast"
            className="w-[100px] h-[100px] rounded-[15px] mb-[10px]"
          />
          <button className="bg-[#E7FAFE] text-black rounded-[30px] py-2 px-4 hover:text-blue-700">
            Breakfast
          </button>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <img
            src={image5}
            alt="Vegan"
            className="w-[100px] h-[100px] rounded-[15px] mb-[10px]"
          />
          <button className="bg-[#E7FAFE] text-black rounded-[30px] py-2 px-4 hover:text-blue-700">
            Vegan
          </button>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <img
            src={image6}
            alt="Meat"
            className="w-[100px] h-[100px] rounded-[15px] mb-[10px]"
          />
          <button className="bg-[#E7FAFE] text-black rounded-[30px] py-2 px-4 hover:text-blue-700">
            Meat
          </button>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <img
            src={image7}
            alt="Dessert"
            className="w-[100px] h-[100px] rounded-[15px] mb-[10px]"
          />
          <button className="bg-[#E7FAFE] text-black rounded-[30px] py-2 px-4 hover:text-blue-700">
            Dessert
          </button>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <img
            src={image8}
            alt="Lunch"
            className="w-[100px] h-[100px] rounded-[15px] mb-[10px]"
          />
          <button className="bg-[#E7FAFE] text-black rounded-[30px] py-2 px-4 hover:text-blue-700">
            Lunch
          </button>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <img
            src={image9}
            alt="Chocolate"
            className="w-[100px] h-[100px] rounded-[15px] mb-[10px]"
          />
          <button className="bg-[#E7FAFE] text-black rounded-[30px] py-2 px-4 hover:text-blue-700">
            Chocolate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;

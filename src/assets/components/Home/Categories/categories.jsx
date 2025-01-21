import React from "react";
import image4 from "../../../../../src/constants/images/image 25.jpg";
import image5 from "../../../../../src/constants/images/image 20.jpg";
import image7 from '../../../../../src/constants/images/image 22.png';
import image8 from "../../../../../src/constants/images/image 23.png";
import image9 from "../../../../../src/constants/images/image 24.png";
import image6 from "../../../../../src/constants/images/image 21.png";
const Categories = () => {
  return (
    <div>
      <div className="absolute top-[800px] left-[80px] w-[1280px] h-[342px] flex justify-between items-center">
        <div className="text-[32px] font-semibold">Categories</div>
        <button className="text-[16px] text-black bg-[#E7FAFE] h-[60px] w-[200px] rounded-[16px]">
          View all categories
        </button>
      </div>

      <div className="absolute top-[1180px] left-[70px] w-[1280px] flex justify-between space-x-4">
        <button className="w-[180px] h-[40px] rounded-[30px] bg-[#E7FAFE] text-black cursor-pointer hover:text-blue-700">
          <div className="absolute bottom-[40px] left-[40px]">
            <img
              src={image4}
              alt="Image 4"
              className="w-[100px] h-[100px] rounded-[15px] mb-[10px]"
            />
          </div>
          Breakfast
        </button>
        <button className="w-[180px] h-[40px] rounded-[30px] bg-[#E7FAFE] text-black cursor-pointer hover:text-blue-700">
          <div className="absolute bottom-[40px] left-[260px]">
            <img
              src={image5}
              alt="Image 4"
              className="w-[100px] h-[100px] rounded-[15px] mb-[10px]"
            />
          </div>
          Vegan
        </button>
        <button className="w-[180px] h-[40px] rounded-[30px] bg-[#E7FAFE] text-black cursor-pointer hover:text-blue-700">
          <div className="absolute bottom-[40px] left-[490px]">
            <img
              src={image6}
              alt="Image 4"
              className="w-[100px] h-[100px] rounded-[15px] mb-[10px]"
            />
          </div>
          Meat
        </button>
        <button className="w-[180px] h-[40px] rounded-[30px] bg-[#E7FAFE] text-black cursor-pointer hover:text-blue-700">
          <div className="absolute bottom-[40px] left-[690px]">
            <img
              src={image7}
              alt="Image 4"
              className="w-[100px] h-[100px] rounded-[15px] mb-[10px]"
            />
          </div>
          Dessert
        </button>
        <button className="w-[180px] h-[40px] rounded-[30px] bg-[#E7FAFE] text-black cursor-pointer hover:text-blue-700">
          <div className="absolute bottom-[40px] right-[270px]">
            <img
              src={image8}
              alt="Image 4"
              className="w-[100px] h-[100px] rounded-[15px] mb-[10px]"
            />
          </div>
          Lunch
        </button>
        <button className="w-[180px] h-[40px] rounded-[30px] bg-[#E7FAFE] text-black cursor-pointer hover:text-blue-700">
          <div className="absolute bottom-[40px] right-[40px]">
            <img
              src={image9}
              alt="Image 4"
              className="w-[100px] h-[100px] rounded-[15px] mb-[10px]"
            />
          </div>
          Chocolate
        </button>
      </div>
    </div>
  );
};

export default Categories;

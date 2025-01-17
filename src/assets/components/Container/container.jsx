import React from "react";
import image from '../../../../src/constants/images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.jpg'
import image1 from '../../../../src/constants/images/image 14.jpg';
import image2 from '../../../../src/constants/images/Vector.jpg';

const Container = () => {
  return (
    <div>
      <div className="absolute top-[150px] right-[50px] h-[650px] w-[1340px] bg-[#E7FAFE] rounded-[15px]">
        <button className="absolute top-[50px] left-[80px] w-[156px] h-[45px] rounded-[30px] bg-white text-black border-0 text-[16px] cursor-pointer flex items-center justify-center px-[10px]">
          <img
            src={image1}
            alt="Icon"
            style={{
              width: "24px",    
              height: "24px",
              marginRight: "8px",
            }}
          />
          Hot Recipies
        </button>
      </div>

      <div className="absolute top-[277px] left-[80px] w-[520px] h-[154px] font-inter font-semibold text-[64px] leading-[77.45px] tracking-[-0.04em]">
        Spicy delicious chicken wings
      </div>
      <div className="absolute top-[455px] left-[120px] w-[520px] h-[56px] font-inter font-normal text-[16px] leading-[28px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non
        nulla sit amet nisl tempus convallis quis ac lectus.
      </div>

      <div className="absolute top-[577px] left-[125px] w-[520px] flex space-x-4">
        <button className="w-[156px] h-[45px] rounded-[30px] bg-gray-300 text-black border-0 text-[16px] cursor-pointer flex items-center justify-center px-[10px]">
          <img
            src={image2}
            alt="Icon"
            style={{
              width: "24px",
              height: "24px",
              marginRight: "8px",
            }}
          />
          30 Minutes
        </button>

        <button className="w-[156px] h-[45px] rounded-[30px] bg-gray-300 text-black border-0 text-[16px] cursor-pointer flex items-center justify-center px-[10px]">
          Chicken
        </button>
      </div>

      <button className="absolute top-[680px] left-[450px] w-[200px] h-[60px] rounded-[16px] bg-black text-white text-[18px] cursor-pointer flex items-center justify-center font-inter">
        View Recipes
      </button>

      <img
        src={image}
        style={{
          position: "absolute",
          top: "150px",
          right: "50px",
          height: "650px",
          borderRadius: "15px",
        }}
      />
    </div>
  );
};

export default Container;

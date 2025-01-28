import React from "react";
import image5 from "../../../../../src/constants/images/image 20.jpg";
import image6 from "../../../../../src/constants/images/image 21.png";
import chef from "../../../../../src/constants/images/chef.png";
import onion from "../../../../../src/constants/images/onion.png";
import image27 from "../../../../../src/constants/images/image 27.png";

const Chef = () => {
  return (
    <div className="px-8 py-16">
      <div className="flex justify-between items-center mb-8">
        
        <div className="w-[50%]">
          <h2 className="text-[48px] font-inter font-semibold mb-4">
            Everyone can be a chef in their own kitchen
          </h2>
          <p className="text-[16px] font-inter max-w-[508px] mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab
            maxime nemo mollitia delectus ut quos quia minima exercitationem.
          </p>
         
          <button className="h-[60px] w-[180px] rounded-[16px] bg-black text-white">
            Learn More
          </button>
        </div>

        {/* Chef Image */}
        <div className="w-[45%] flex items-center justify-center relative">
          <img
            src={chef}
            alt="Chef"
            className="w-full h-[597px] object-cover rounded-[15px]"
          />
          <div className="absolute flex gap-4 bottom-0 left-0 p-4">
            <img
              src={image5}
              alt="Image 5"
              className="w-[80px] h-[80px] rounded-[15px]"
            />
            <img
              src={onion}
              alt="Onion"
              className="w-[50px] h-[50px] rounded-[15px]"
            />
            <img
              src={image6}
              alt="Image 6"
              className="w-[80px] h-[80px] rounded-[15px]"
            />
            <img
              src={image27}
              alt="Image 27"
              className="w-[50px] h-[50px] rounded-[15px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;

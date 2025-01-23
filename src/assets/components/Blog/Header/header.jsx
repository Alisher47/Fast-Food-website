import React from "react";
import Button from "../../Home/Buttons/buttons";
const Header = () => {
  return (
    <div>
      <div className="  top-[190px] w-[385px] h-[77px] left-[528px] text-[64px] font-inter font-semibold whitespace-nowrap">
        <h3>Blog & Article</h3>
      </div>
      <div className="  top-[291px] w-[840px] h-[28px] text-[16px] font-inter left-[300px]">
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>
      <div className="  h-[80px] w-[700px] top-[399px] left-[370px] bg-[#FFFFFF] rounded-[24px] mt-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-[700px] h-full px-4 py-2 rounded-[24px] text-gray-700"
        />
        <Button
          text="Subscribe"
          className="  w-[160px] h-[60px] top-[10px] left-[520px] bottom-[10px] rounded-[16px] font-inter font-semibold text-[14px] leading-[16.94px] tracking-[-2%] bg-black text-white"
        />
      </div>
    </div>
  );
};

export default Header;

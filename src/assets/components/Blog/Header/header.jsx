import React from "react";
import Button from "../../Home/Buttons/buttons";

const Header = () => {
  return (
    <div className="text-center p-8 md:p-12">
      <h3 className="text-[64px] font-inter font-semibold mb-4">Blog & Article</h3>

      <p className="text-[16px] font-inter mb-6 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="relative w-full max-w-[700px] mx-auto bg-white rounded-[24px] p-4">
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-[60px] px-4 py-2 rounded-[24px] text-gray-700"
          />
          <Button
            text="Search"
            className="w-[160px] h-[60px] rounded-[16px] bg-black text-white ml-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

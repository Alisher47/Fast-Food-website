import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#F9F9F9] py-8 mt-[150px]">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-4">
        <h1 className="font-lobster text-3xl">FoodieLand</h1>

        <div className="flex space-x-12">
          <h3 className="cursor-pointer hover:text-gray-400 text-lg">Recipes</h3>
          <h3 className="cursor-pointer hover:text-gray-400 text-lg">Blog</h3>
          <h3 className="cursor-pointer hover:text-gray-400 text-lg">Contact</h3>
          <h3 className="cursor-pointer hover:text-gray-400 text-lg">About Us</h3>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-4">
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  );
};

export default Footer;

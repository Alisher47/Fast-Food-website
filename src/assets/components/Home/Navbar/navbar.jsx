import React from "react";
import { useNavigate } from "react-router-dom";
import FacebookSvg from '../../../../constants/icons/facebook.svg';
import TwitterSvg from '../../../../constants/icons/twitter.svg';
import InstagramSvg from "../../../../constants/icons/instagram.svg"

const Navbar = () => {
  const navigate = useNavigate();

  const hanldeBlog = () => {
    navigate(`/blog`);
  };

  return (
    <div className="">
     
      <div className="flex justify-between items-center px-6 py-4">

        <h1 className="font-lobster text-3xl">FoodieLand</h1>

        <div className="flex space-x-8">
          <h3 className="cursor-pointer hover:text-gray-400 text-lg">Home</h3>
          <h3 className="cursor-pointer hover:text-gray-400 text-lg">Recipes</h3>
          <h3
            className="cursor-pointer hover:text-gray-400 text-lg"
            onClick={hanldeBlog}
          >
            Blog
          </h3>
          <h3 className="cursor-pointer hover:text-gray-400 text-lg">Contact</h3>
          <h3 className="cursor-pointer hover:text-gray-400 text-lg">About Us</h3>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <img src={FacebookSvg} alt="Facebook" className="w-6 h-6" />
          <img src={TwitterSvg} alt="Twitter" className="w-6 h-6" />
          <img src={InstagramSvg} alt="Instagram" className="w-6 h-6" />
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-full bg-slate-300 h-[1px] mt-[30px]"></div>
    </div>
  );
};

export default Navbar;

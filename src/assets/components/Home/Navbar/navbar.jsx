import React from "react";
import { useNavigate } from "react-router-dom";
import FacebookSvg from '../../../../constants/icons/facebook.svg';
import TwitterSvg from '../../../../constants/icons/twitter.svg';
import InstagramSvg from "../../../../constants/icons/instagram.svg"

const Navbar = () => {
 const navigate = useNavigate()

 const hanldeBlog = () => {
   navigate(`/blog`)
 }
 
  return (
    <div>
      <div className="flex justify-between items-center px-4 py-2">
        <h1 className="font-lobster text-3xl ml-4">FoodieLand</h1>
        <div className="flex space-x-16 flex-grow justify-center">
          <h3 className="cursor-pointer hover:text-gray-400 text-lg">Home</h3>
          <h3 className="cursor-pointer hover:text-gray-400 text-lg">
            Recipes
          </h3>
          <h3 className="cursor-pointer hover:text-gray-400 text-lg" onClick={hanldeBlog}>Blog</h3>
          <h3 className="cursor-pointer hover:text-gray-400 text-lg">
            Contact
          </h3>
          <h3 className="cursor-pointer hover:text-gray-400 text-lg">
            About Us
          </h3>
        </div>

        <div className="flex space-x-6 ml-4">
          <img src={FacebookSvg} alt="" />
          <img src={TwitterSvg} alt="" />
          <img src={InstagramSvg} alt="" />
        </div>
        <div
          className="w-full absolute top-[calc(110px)] left-1/2 transform -translate-x-1/2 bg-slate-300 h-[1px] rounded-full"
          style={{ width: "1440px" }}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;

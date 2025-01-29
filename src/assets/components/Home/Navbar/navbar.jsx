import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; 
import FacebookSvg from "../../../../constants/icons/facebook.svg";
import TwitterSvg from "../../../../constants/icons/twitter.svg";
import InstagramSvg from "../../../../constants/icons/instagram.svg";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const cartItemCount = useSelector((state) => state.cart.cartItemCount); 
  function handleHome(){
    navigate(`/`)
  }

  const handleBlog = () => {
    navigate(`/blog`);
  };

  const handleContact = () => {
    navigate(`/contact`);
  };

  const handleAbout = () => {
    navigate(`/about`);
  };

  const handleCart = () => {
    navigate(`/cart`)
  }

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="overflow-x-visible shadow-md"
    >
      <div className="flex justify-between items-center px-6 py-4 bg-white">
        {/* Logo with animation */}
        <motion.h1
          className="font-lobster text-3xl text-gray-800"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          FoodieLand
        </motion.h1>

        {/* Navigation */}
        <motion.div
          className="flex space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.h3
            className="cursor-pointer hover:text-gray-400 text-lg"
            onClick={handleHome}
            whileHover={{ scale: 1.05, color: "#9CA3AF" }}
          >
            Home
          </motion.h3>
          <motion.h3
            className="cursor-pointer hover:text-gray-400 text-lg"
            whileHover={{ scale: 1.05, color: "#9CA3AF" }}
          >
            Recipes
          </motion.h3>
          <motion.h3
            className="cursor-pointer hover:text-gray-400 text-lg"
            onClick={handleBlog}
            whileHover={{ scale: 1.05, color: "#9CA3AF" }}
          >
            Blog
          </motion.h3>
          <motion.h3
            className="cursor-pointer hover:text-gray-400 text-lg"
            onClick={handleContact}
            whileHover={{ scale: 1.05, color: "#9CA3AF" }}
          >
            Contact
          </motion.h3>
          <motion.h3
            className="cursor-pointer hover:text-gray-400 text-lg"
            onClick={handleAbout}
            whileHover={{ scale: 1.05, color: "#9CA3AF" }}
          >
            About Us
          </motion.h3>
        </motion.div>

        {/* Social Media & Cart */}
        <motion.div
          className="flex space-x-6 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.img
            src={FacebookSvg}
            alt="Facebook"
            className="w-6 h-6 cursor-pointer"
            whileHover={{ scale: 1.2 }}
          />
          <motion.img
            src={TwitterSvg}
            alt="Twitter"
            className="w-6 h-6 cursor-pointer"
            whileHover={{ scale: 1.2 }}
          />
          <motion.img
            src={InstagramSvg}
            alt="Instagram"
            className="w-6 h-6 cursor-pointer"
            whileHover={{ scale: 1.2 }}
          />

          {/* Cart Icon with Badge */}
          <div className="relative">
        <IoCartOutline className="w-8 h-8 cursor-pointer"
        onClick={handleCart}
        />
        {cartItemCount > 0 && (
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
            {cartItemCount} 
          </div>
        )}
      </div>
        </motion.div>
      </div>

      {/* Horizontal Line */}
      <motion.div
        className="w-full h-[1px] bg-slate-300 mt-6"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.7 }}
      ></motion.div>
    </motion.div>
  );
};

export default Navbar;

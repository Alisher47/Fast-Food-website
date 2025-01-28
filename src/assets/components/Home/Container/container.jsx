import React from "react";
import { motion } from "framer-motion";
import image from '../../../../../src/constants/images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.jpg';
import image1 from '../../../../../src/constants/images/image 14.jpg';
import image2 from '../../../../../src/constants/images/Vector.jpg';

const Container = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div 
      className="mt-[100px] flex"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    > 
      <motion.div
        className="bg-[#E7FAFE] w-1/2 p-8 flex flex-col justify-center rounded-tl-[30px] rounded-bl-[30px]"
        variants={slideInLeft}
      >
        <motion.div className="flex justify-start mb-8" variants={fadeIn}>
          <button className="w-[156px] h-[45px] rounded-[30px] bg-white text-black border-0 text-[16px] cursor-pointer flex items-center justify-center shadow-lg hover:scale-105 transform transition-all">
            <img
              src={image1}
              alt="Icon"
              className="w-[24px] h-[24px] mr-2"
            />
            Hot Recipes
          </button>
        </motion.div>

        <motion.div
          className="font-inter font-semibold text-[64px] leading-[77.45px] tracking-[-0.04em] mb-4"
          variants={fadeIn}
        >
          Spicy Delicious Chicken Wings
        </motion.div>

        <motion.div
          className="text-[16px] leading-[28px] mb-6"
          variants={fadeIn}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
        </motion.div>

        <motion.div className="flex space-x-4 mb-8" variants={fadeIn}>
          <button className="w-[156px] h-[45px] rounded-[30px] bg-gray-300 text-black border-0 text-[16px] cursor-pointer flex items-center justify-center shadow-lg hover:scale-105 transform transition-all">
            <img
              src={image2}
              alt="Icon"
              className="w-[24px] h-[24px] mr-2"
            />
            30 Minutes
          </button>

          <button className="w-[156px] h-[45px] rounded-[30px] bg-gray-300 text-black border-0 text-[16px] cursor-pointer flex items-center justify-center shadow-lg hover:scale-105 transform transition-all">
            Chicken
          </button>
        </motion.div>

        <motion.div className="flex justify-center" variants={fadeIn}>
          <button className="w-[200px] h-[60px] rounded-[16px] bg-black text-white text-[18px] cursor-pointer flex items-center justify-center font-inter shadow-lg hover:scale-105 transform transition-all">
            View Recipes
          </button>
        </motion.div>
      </motion.div>

      <motion.div 
        className="w-1/2"
        variants={slideInRight}
      >
        <motion.img
          src={image}
          alt="Chicken Wings"
          className="w-full h-full object-cover rounded-tr-[30px] rounded-br-[30px]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } }}
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Container;

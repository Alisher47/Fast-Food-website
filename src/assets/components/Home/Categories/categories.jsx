import React from "react";
import { motion } from "framer-motion";
import image4 from "../../../../../src/constants/images/image 25.jpg";
import image5 from "../../../../../src/constants/images/image 20.jpg";
import image7 from '../../../../../src/constants/images/image 22.png';
import image8 from "../../../../../src/constants/images/image 23.png";
import image9 from "../../../../../src/constants/images/image 24.png";
import image6 from "../../../../../src/constants/images/image 21.png";

const Categories = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const hoverEffect = {
    whileHover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <motion.div 
      className="mt-[150px] px-12 w-full max-w-[1280px] mx-auto"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="flex justify-between items-center mb-8">
        <motion.div 
          className="text-[32px] font-semibold" 
          variants={fadeIn}
        >
          Categories
        </motion.div>
        <motion.button
          className="text-[16px] text-black bg-[#E7FAFE] h-[60px] w-[200px] rounded-[16px] shadow-lg hover:scale-105 transform transition-all"
          whileHover={{ scale: 1.05 }}
        >
          View all categories
        </motion.button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        {[{
          src: image4, alt: "Breakfast", label: "Breakfast"
        }, {
          src: image5, alt: "Vegan", label: "Vegan"
        }, {
          src: image6, alt: "Meat", label: "Meat"
        }, {
          src: image7, alt: "Dessert", label: "Dessert"
        }, {
          src: image8, alt: "Lunch", label: "Lunch"
        }, {
          src: image9, alt: "Chocolate", label: "Chocolate"
        }].map(({ src, alt, label }, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center w-full"
            variants={fadeIn}
          >
            <motion.img
              src={src}
              alt={alt}
              className="w-[100px] h-[100px] mb-[10px] shadow-lg"
              {...hoverEffect}
            />
            <motion.button
              className="bg-[#E7FAFE] text-black rounded-[30px] py-2 px-4 shadow-lg hover:text-blue-700"
              {...hoverEffect}
            >
              {label}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Categories;

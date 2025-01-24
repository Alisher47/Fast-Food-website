import React from 'react';

const BlogData = ({ title, imageSrc, text }) => {
  return (
    <div className="mb-8 relative flex items-start ml-20">
      {/* Image */}
      <div className="w-[290px] h-[200px] rounded-[20px]">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-[20px]" />
      </div>

  
      <div className="ml-4 w-[375px]">
        <h3 className="font-inter font-semibold text-[24px] leading-[26px] tracking-[-4%] mt-6 whitespace-nowrap">{title}</h3>
        <p className="text-[16px] text-gray-600 mt-4">{text}</p>
      </div>
    </div>
  );
};

export default BlogData;

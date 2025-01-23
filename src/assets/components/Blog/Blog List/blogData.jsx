import React from 'react';

const BlogData = ({ title, imageSrc, text }) => {
  return (
  <div>
  <div className="mb-52 relative">
      <div className="  top-[590px] w-[290px] h-[200px] rounded-[20px] mb-4">
        <img src={imageSrc} alt="" className="w-full h-full object-cover rounded-[20px]" />
      </div>

      <div className="  left-[320px] top-[620px] font-inter font-semibold text-[24px] leading-[26px] tracking-[-4%] w-[375px] h-[29px]">
        <h3>{title}</h3>
      </div>
      <div className="ml-4 text-[16px] left-[320px] top-[630px]">
        <p>{text}</p>
      </div>
    </div>
    <div>
        
    </div>
    </div>
  );
};

export default BlogData;

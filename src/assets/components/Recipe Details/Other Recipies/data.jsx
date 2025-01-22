import React from 'react';
import clock from '../../../../constants/icons/clock.svg';
import forkKnife from '../../../../constants/icons/forkKnife.svg';
import Button from '../../Home/Buttons/buttons';
import Footer from '../../Home/Footer/footer'

const Data = ({ imageSrc, title, type, time }) => {
  return (
    <div>
   <div className='absolute w-[468px] h-[44px] top-[4500px] left-[486px] font-inter font-semibold text-[32px] whitespace-nowrap'>
    <h3>You may like these recipes too</h3>
 </div>
   <div className="relative top-[4500px] w-[290px] h-[400px] p-4 rounded-[20px] left-[80px]">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[250px] object-cover rounded-[15px]"
      />
      
      <div className="mt-4">
        <h3 className="font-inter font-semibold text-[18px] leading-[26px] tracking-[-4%]">
          {title}
        </h3>
      </div>

      <div className="mt-4 flex justify-between">
        <Button className="h-[30px] text-black text-[14px] font-inter font-semibold leading-[16.94px] tracking-[-0.02em] border-0 cursor-pointer flex items-center justify-center">
          <img
            src={clock}
            alt="Clock Icon"
            style={{ width: "18px", height: "18px", marginRight: "8px" }}
          />
          {time} Minutes
        </Button>

        <Button className="h-[30px] text-black text-[14px] font-inter font-semibold leading-[16.94px] tracking-[-0.02em] border-0 cursor-pointer flex items-center justify-center">
          <img
            src={forkKnife}
            alt="Fork Knife Icon"
            style={{ width: "18px", height: "18px", marginRight: "8px" }}
          />
          {type}
        </Button>
      </div>
    </div>
    </div>
  );
};

export default Data;

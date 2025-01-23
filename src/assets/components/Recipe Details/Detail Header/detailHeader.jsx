import React from 'react';
import PrinterSvg from '../../../../constants/icons/printer.svg';
import ShareSvg from '../../../../constants/icons/Share.svg';
import group from '../../../../constants/images/group.png';
import DetailCard from './detailCard';

const DetailHeader = ({ title, imageSrc }) => {
  return (
    <div className="px-4 py-6">
      {/* Title and Action Buttons Section */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-inter font-semibold text-[46px]">{title}</h1>

        {/* Action Buttons (Printer and Share) */}
        <div className="flex space-x-4">
          <div className="w-[80px] h-[80px] bg-[#E7FAFE] rounded-full flex justify-center items-center">
            <img src={PrinterSvg} alt="Print" className="w-[24px] h-[24px]" />
          </div>
          <div className="w-[80px] h-[80px] bg-[#E7FAFE] rounded-full flex justify-center items-center">
            <img src={ShareSvg} alt="Share" className="w-[24px] h-[24px]" />
          </div>
        </div>
      </div>

      {/* Group Image Section */}
      <div className="mb-6 mt-16">
        <img 
          src={group} 
          alt="Group" 
          className="w-[600px] h-[40px] mx-auto ml-2" 
        />
      </div>

      <div className="flex mb-6 mt-16">
        <img 
          src={imageSrc} 
          alt="Recipe" 
          className="w-[915px] h-[623px]" 
        />
        
        {/* DetailCard aligned to the right of the image with same height and width */}
        <div className="ml-8 w-[915px] h-[623px]">
          <DetailCard />
        </div>
      </div>
    </div>
  );
};

export default DetailHeader;

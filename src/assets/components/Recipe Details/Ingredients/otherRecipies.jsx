import React from 'react';
import chicken from '../../../../constants/images/cheese.png';
import chicken2 from '../../../../constants/images/pasta.png';
import rice from '../../../../constants/images/rice.png';
import pic from '../../../../constants/images/pic.png';

const OtherRecipies = () => {
  return (
    <div className="px-6 py-4">
      <div className="mb-4 mt-[100px] text-right">
        <h3 className="text-[36px] font-semibold">Other Recipes</h3>
      </div>
      <div className="space-y-8 ml-6"> 

        <div className="flex justify-end items-center space-x-6">
          <div className="w-[180px] h-[175px]">
            <img
              src={chicken}
              alt="Chicken Meatball"
              className="w-full h-full rounded-[30px]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-[24px] font-semibold">Chicken Meatball <br /> with Creamy Chees...</h3>
          </div>
        </div>

        <div className="flex justify-end items-center space-x-6">
          <div className="w-[180px] h-[175px]">
            <img
              src={chicken2}
              alt="Creamiest Creamy Chicken"
              className="w-full h-full rounded-[30px]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-[24px] font-semibold">The Creamiest<br /> Creamy Chicken an...</h3>
          </div>
        </div>

        <div className="flex justify-end items-center space-x-6 mr-9">
          <div className="w-[180px] h-[175px]">
            <img
              src={rice}
              alt="Creamiest Rice"
              className="w-full h-full rounded-[30px]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-[24px] font-semibold">The Best Easy one <br /> Chicken and rice</h3>
          </div>
        </div>

      </div>

      <div className="flex justify-end mt-[80px]">
        <img src={pic} alt="Recipe Pic" className="w-[400px] h-[434px]" />
      </div>
    </div>
  );
};

export default OtherRecipies;

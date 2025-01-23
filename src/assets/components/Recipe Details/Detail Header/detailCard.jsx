import React from 'react';

const DetailCard = () => {
  return (
    <div className="w-full sm:w-[400px] bg-[#E7FAFE] rounded-[20px] p-6 h-[620px]">
      <h3 className="text-[22px] font-inter mb-4">Nutrition Information</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <h3 className="text-[16px] font-inter">Calories</h3>
          <p className="text-[16px] font-inter">219.9 kcal</p>
        </div>
        <div className="flex justify-between">
          <h3 className="text-[16px] font-inter">Total Fat</h3>
          <p className="text-[16px] font-inter">10.7g</p>
        </div>
        <div className="flex justify-between">
          <h3 className="text-[16px] font-inter">Protein</h3>
          <p className="text-[16px] font-inter">7.9g</p>
        </div>
        <div className="flex justify-between">
          <h3 className="text-[16px] font-inter">Carbohydrates</h3>
          <p className="text-[16px] font-inter">22.3g</p>
        </div>
        <div className="flex justify-between">
          <h3 className="text-[16px] font-inter">Cholesterol</h3>
          <p className="text-[16px] font-inter">37.4mg</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-[14px]">
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default DetailCard;

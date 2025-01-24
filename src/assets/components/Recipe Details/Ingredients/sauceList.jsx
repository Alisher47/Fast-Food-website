import React from 'react';

const SauceList = ({ sauceData }) => {
  return (
    <div className="px-6 py-4">
      <h3 className="text-[24px] font-semibold text-left mb-6">For the sauce</h3> 

      <div className="ml-6 mb-6 space-y-16"> 
        <div className="flex items-center space-x-3">
          <input type="checkbox" className="w-6 h-6" />
          <span className="text-xl">{sauceData}</span>
        </div>

        <div className="flex items-center space-x-3">
          <input type="checkbox" id="sauce2" className="w-6 h-6" />
          <label htmlFor="sauce2" className="text-xl">{sauceData}</label>
        </div>

        <div className="flex items-center space-x-3">
          <input type="checkbox" id="sauce3" className="w-6 h-6" />
          <label htmlFor="sauce3" className="text-xl">{sauceData}</label>
        </div>
      </div>
    </div>
  );
};

export default SauceList;

import React from "react";
import OtherRecipies from "./otherRecipies";
const IngredientList = ({ listData }) => {
  return (
    <div className="px-6 py-4">
      <div className="mb-4">
        <h3 className="text-[36px] font-semibold text-left">Ingredients</h3>
      </div>

      <div className="mb-6">
        <h1 className="text-[24px] font-semibold text-left">For main dish</h1>
      </div>

      <div className="space-y-16 ml-6">

        <div className="flex items-center space-x-2">
          <input type="checkbox" className="w-6 h-6" /> 
          <span className="text-lg">{listData}</span>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" className="w-6 h-6" />
          <span className="text-lg">{listData}</span>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" className="w-6 h-6" /> 
          <span className="text-lg">{listData}</span>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" className="w-6 h-6" /> 
          <span className="text-lg">{listData}</span>
        </div>
      </div>
      <OtherRecipies />
    </div>
  );
};

export default IngredientList;

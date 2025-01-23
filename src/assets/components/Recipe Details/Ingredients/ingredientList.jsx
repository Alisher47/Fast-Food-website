import React from "react";

const IngredientList = ({ listData }) => {
  return (
    <div className="px-6 py-4">
      {/* Ingredients Title - Align Left */}
      <div className="mb-4">
        <h3 className="text-3xl font-semibold text-left">Ingredients</h3>
      </div>

      {/* For main dish section - Align Left */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-left">For main dish</h1>
      </div>

      {/* Ingredient List - Align Left */}
      <div className="space-y-4 ml-6">
        <div className="flex items-center space-x-2">
          <input type="checkbox" className="w-5 h-5" />
          <span className="text-lg">{listData}</span>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" className="w-5 h-5" />
          <span className="text-lg">{listData}</span>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" className="w-5 h-5" />
          <span className="text-lg">{listData}</span>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" className="w-5 h-5" />
          <span className="text-lg">{listData}</span>
        </div>
      </div>
    </div>
  );
};

export default IngredientList;

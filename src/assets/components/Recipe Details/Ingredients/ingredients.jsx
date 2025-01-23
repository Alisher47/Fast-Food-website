import React from "react";
import IngredientList from "./ingredientList";
import { INGREDIENTS } from "./constant";
import { SAUCELISTS } from "./constant";
import SauceList from "./sauceList";

const Ingredients = () => {
  return (
    <div className="px-4 py-6">
      {/* Loop through ingredients (if dynamic) */}
      <div className="space-y-6">
        {
          INGREDIENTS.map((INGREDIENT, index) => {
            return(
              <IngredientList 
                key={index} // Add key to avoid warning in React
                listData={INGREDIENT.listData}
              />
            )
          })
        }
      </div>

      {/* Loop through SauceList if needed */}
      <div className="space-y-4">
        {
          SAUCELISTS.map((SAUCELIST, index) => {
            return (
              <SauceList 
                key={index} 
                sauceData={SAUCELIST.sauceData} 
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default Ingredients;

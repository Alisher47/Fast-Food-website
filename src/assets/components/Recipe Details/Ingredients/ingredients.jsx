import React from "react";
import IngredientList from "./ingredientList";
import OtherRecipies from "./otherRecipies";
import { INGREDIENTS } from "./constant";
import { SAUCELISTS } from "./constant";
import SauceList from "./sauceList";

const Ingredients = () => {
  return (
    <div>
      <div className="space-y-4">
        {INGREDIENTS.map((INGREDIENT) => {
          return <IngredientList listData={INGREDIENT.listData} />;
        })}

        <OtherRecipies />
      <div>
        {SAUCELISTS.map((SAUCELIST, index) => {
          return (
            <SauceList 
            key={index}
            sauceData={SAUCELIST.sauceData}
            />
          )
        })} 
  
        </div>
      </div>
    </div>
  );
};

export default Ingredients;

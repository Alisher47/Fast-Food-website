import React from 'react'
import IngredientList from './ingredientList'
import ingredients from './constant'
import OtherRecipies from './otherRecipies'
import otherRecipes from './constant'

const Ingredients = () => {
    return (
    <div>
      <div className="space-y-4"> 

            <IngredientList 
            //   key={index} 
            //   listData={ingredient.listData}
            />
            <OtherRecipies />
           
      </div>
      </div>
    )
}

export default Ingredients


import React from 'react'
import IngredientList from './ingredientList'
const Ingredients = () => {
  
  const ingredients = [
    {
        title: "For main Dish",
    },
    {
        listData: "Lorem ipsum dolor sit amet",
    },
    {
        listData: "Lorem ipsum dolor sit amet",
    },
    {
        listData: "Lorem ipsum dolor sit amet",
    },
    {
        listData: "Lorem ipsum dolor sit amet",
    },
    {
        listData: "Lorem ipsum dolor sit amet",
    },
  ]


    return (
   <div className='flex flex-wrap gap-4 top-[5291px]'>
     {ingredients.map((ingredient, index) => {
       <IngredientList
       key={index}
       title={ingredient.title}
       listData={ingredient.listData}
       
       />
     })}
    
   </div>
  )
}

export default Ingredients

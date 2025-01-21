import React from 'react'
import Navbar from '../../components/Home/Navbar/navbar'
import RecipeHeader from '../../components/Recipe Details/Detail Header/recipeHeader'
import Ingredients from '../../components/Recipe Details/Ingredients/ingredients'
import OtherRecipies from '../../components/Recipe Details/Ingredients/otherRecipies'



const recipeDetail = () => {

  return (
    <div>
      <Navbar />
     
     <RecipeHeader />
     <Ingredients />
     <OtherRecipies />
    </div>
  )
}

export default recipeDetail

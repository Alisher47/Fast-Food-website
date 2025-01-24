import React from "react";
import Navbar from "../../components/Home/Navbar/navbar";
import RecipeHeader from "../../components/Recipe Details/Detail Header/recipeHeader";
import Ingredients from "../../components/Recipe Details/Ingredients/ingredients";
import OtherRecipies from "../../components/Recipe Details/Ingredients/otherRecipies";
import DirectionData from "../../components/Recipe Details/Directions/directionData";
import OtherRecipe from "../../components/Recipe Details/Other Recipies/otherRecipe";
import Container from "../../components/Recipe Details/Container/container";

const recipeDetail = () => {
  return (
    <div className="overflow-visible">
      <Navbar />

      <RecipeHeader />
      <Ingredients />
      <OtherRecipies />
      <DirectionData />
      <OtherRecipe />
      <Container />
    </div>
  );
};

export default recipeDetail;

import React from "react";
import RecipeCards from './cards.jsx';
import recipes from "./constants.js";
import { useNavigate } from "react-router-dom";

const BottomRecipes = () => {
  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="flex justify-between items-center mb-8">
        <div className="w-[60%]">
          <h2 className="text-[48px] font-semibold font-inter leading-tight">
            Try this delicious recipe <br/> to make your day
          </h2>
        </div>

        <div className="w-[40%] text-right">
          <p className="text-[16px] font-inter">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam.
          </p>
        </div>
      </div>

      <div className="px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="mb-20" onClick={() => handleDetail(recipe.id)}> 
            <RecipeCards
              imageSrc={recipe.imageSrc}
              title={recipe.title}
              time={recipe.time}
              type={recipe.type}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BottomRecipes;

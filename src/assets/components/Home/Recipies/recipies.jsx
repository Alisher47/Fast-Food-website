import React from 'react';
import RecipeCard from './recipeCard';
import recipeData from './constants';

const Recipes = () => {
  return (
    <div className="px-8 mt-16">
      <div className="text-center text-[48px] font-inter font-semibold mb-4">
        Simple and tasty recipes
      </div>
      <div className="text-center text-[16px] font-inter mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
      </div>

      <div className="flex flex-wrap justify-between gap-8">
        {recipeData.map((recipe, index) => (
          <div key={index} className="w-[350px]">
            <RecipeCard
              imgSrc={recipe.imgSrc}
              title={recipe.title}
              timeText={recipe.timeText}
              price={recipe.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;

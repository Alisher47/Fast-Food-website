import React from 'react';
import RecipeCard from './recipeCard.jsx';
import recipeData from './constants.js';
const Recipes = () => {
  

  return (
    <div>
      <div className="absolute top-[1450px] left-[457px] w-[526px] h-[58px] font-inter font-semibold text-[48px] leading-[58.09px] tracking-[-0.04em]">
        Simple and tasty recipes
      </div>
      <div className="absolute top-[1557px] left-[364px] w-[706px] h-[56px] font-inter font-normal text-[16px] leading-[28px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
      </div>
      <div className="flex flex-wrap justify-start absolute top-[1709px] left-[50px] w-full">
        {recipeData.map((recipe, index) => (
          <div key={index} className=" w-[400px] h-[450px] bg-[#E7F9FD] rounded-[30px] mr-[80px] gap-4">
            <RecipeCard
              imgSrc={recipe.imgSrc}
              title={recipe.title}
              timeText={recipe.timeText}
              buttonLabel={recipe.buttonLabel}
              buttonText={recipe.buttonText}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;

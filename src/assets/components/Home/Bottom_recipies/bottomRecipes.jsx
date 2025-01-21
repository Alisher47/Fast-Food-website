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
    <div>
      <div className="absolute top-[5115px] left-[80px] w-[507px] h-[116px] font-inter font-semibold text-[48px] leading-[58.09px] tracking-[-0.04em]">
        Try this delicious recipe to make your day
      </div>
      <div className="absolute top-[5145px] left-[740px] w-[620px] h-[56px] font-inter text-[16px]">
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
      </div>

      <div className="flex flex-wrap gap-4 top-[5291px]">
        {recipes.map((recipe) => (
          <div key={recipe.id} onClick={() => handleDetail(recipe.id)} style={{ cursor: 'pointer' }}>
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
  );
};

export default BottomRecipes;

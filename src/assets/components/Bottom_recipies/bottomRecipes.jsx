import React from "react";
import RecipeCards from './cards.jsx';
import fruits from "../../../../src/constants/images/fruits.png";
import burger2 from "../../../../src/constants/images/burger2.png";
import rice from "../../../../src/constants/images/rice.png";
import meat from "../../../../src/constants/images/meat.png";
import honey from "../../../../src/constants/images/honey.png";
import sandwich from "../../../../src/constants/images/sandwich.png";
import spicy from "../../../../src/constants/images/spicy.jpg";
import mushroom from "../../../../src/constants/images/mushroom.jpg";

const BottomRecipes = () => {
  const recipes = [
    {
      title: 'Mixed Tropical Fruit Salad with Superfood Boosts',
      imageSrc: fruits,
      time: 30,
      type: 'Healthy',
    },
    {
      title: 'Big and Juicy Wagyu Beef Cheeseburger',
      imageSrc: burger2,
      time: 30,
      type: 'Healthy',
    },
    {
      title: 'Healthy Japanese Fried Rice with Asparagus',
      imageSrc: rice,
      time: 30,
      type: 'Healthy',
    },
    {
      title: 'Cauliflower Walnut Vegetarian Taco Meat',
      imageSrc: meat,
      time: 30,
      type: 'Healthy',
    },
    {
      title: 'Rainbow Chicken Salad with Almond Honey Mustard',
      imageSrc: honey,
      time: 30,
      type: 'Healthy',
    },
    {
      title: 'Barbeque Spicy Sandwiches with Chips',
      imageSrc: sandwich,
      time: 30,
      type: 'Healthy',
    },
    {
      title: 'Firecracker Vegan Lettuce Wraps - Spicy!',
      imageSrc: spicy,
      time: 30,
      type: 'Healthy',
    },
    {
      title: 'Chicken Ramen Soup with Mushroom',
      imageSrc: mushroom,
      time: 30,
      type: 'Healthy',
    },
  ];

  return (
    <div>
      <div className="absolute top-[5115px] left-[80px] w-[507px] h-[116px] font-inter font-semibold text-[48px] leading-[58.09px] tracking-[-0.04em]">
        Try this delicious recipe to make your day
      </div>
      <div className="absolute top-[5145px] left-[740px] w-[620px] h-[56px] font-inter text-[16px]">
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim
      </div>

      <div className="flex flex-wrap gap-4 top-[5291px]">
        {recipes.map((recipe, index) => {
          const {imageSrc } = recipe
          return (

            <RecipeCards
              key={index}
              imageSrc={recipe.imageSrc}
              title={recipe.title}
              time={recipe.time}
              type={recipe.type}
            />
          )
        }
        )}
      </div>
    </div>
  );
};

export default BottomRecipes;

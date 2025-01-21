import React from 'react';
import burger from "../../../../../src/constants/images/image 26.jpg";
import fish from "../../../../../src/constants/images/fish.jpg";
import strawberry from "../../../../../src/constants/images/cake.jpg";
import salad from '../../../../../src/constants/images/salad.png';
import cheese from '../../../../../src/constants/images/cheese.png';
import cake from '../../../../../src/constants/images/cake2.png';
import chicken from '../../../../../src/constants/images/chicken.png';
import pasta from '../../../../../src/constants/images/pasta.png';
import image2 from "../../../../../src/constants/images/Vector.jpg";
import pic from '../../../../../src/constants/images/pic.png';
import RecipeCard from './recipeCard.jsx';

const Recipes = () => {
  const recipeData = [
    { imgSrc: burger, title: 'Big and Juicy Wagyu Beef Cheese Burger', timeText: '30 Minutes', buttonLabel: 'Snack', buttonText: image2 },
    { imgSrc: fish, title: 'Fresh Lime Roasted Salmon with ginger sauce', timeText: '30 Minutes', buttonLabel: 'Fish', buttonText: image2 },
    { imgSrc: strawberry, title: 'Strawberry Oatmeal Pancake with Honey Syrup', timeText: '30 Minutes', buttonLabel: 'Breakfast', buttonText: image2 },
    { imgSrc: salad, title: 'Fresh and Healthy Mixed Mayonese Salad', timeText: '30 Minutes', buttonLabel: 'Snack', buttonText: image2 },
    { imgSrc: cheese, title: 'Chicken Meetballs with Cream Cheese', timeText: '30 Minutes', buttonLabel: 'Fish', buttonText: image2 },
    { imgSrc: cake, title: 'Fruit PanCake with Orange & Blueberry', timeText: '30 Minutes', buttonLabel: 'Sweet', buttonText: image2 },
    { imgSrc: chicken, title: 'The Best Easy One Pot Chicken and Rice', timeText: '30 Minutes', buttonLabel: 'Snack', buttonText: image2 },
    { imgSrc: pasta, title: 'The Cremiest Creamy Chicken and Bacon Pasta', timeText: '30 Minutes', buttonLabel: 'Noodles', buttonText: image2 },
    { imgSrc: pic, title: 'Some Title', timeText: '30 Minutes', buttonLabel: 'Noodles', buttonText: image2 }, // Example for the last image
  ];

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

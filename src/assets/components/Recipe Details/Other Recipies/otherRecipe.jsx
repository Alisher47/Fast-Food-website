import React from 'react'
import RECIPIES from './constant'
import Data from './data'

const OtherRecipe = () => {
  return (
    <div className="flex flex-col items-center">
    <div className="font-inter font-semibold text-[32px] mb-6">
      <h3>You may like these recipes too</h3>
    </div>
    <div className="flex flex-wrap justify-center">
      {RECIPIES.map((recipe, index) => (
        <Data
          key={index}
          imageSrc={recipe.imageSrc}
          title={recipe.title}
          type={recipe.type}
          time={recipe.time}
        />
      ))}
    </div>
  </div>
    
  )
}

export default OtherRecipe

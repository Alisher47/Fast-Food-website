import React from 'react'
import RECIPIES from './constant'
import Data from './data'

const OtherRecipe = () => {
  return (
    <div className='flex'>
    {RECIPIES.map((RECIPIE) => {
        return(
            <Data 
            imageSrc={RECIPIE.imageSrc}
            title={RECIPIE.title}
            type={RECIPIE.type}
            time={RECIPIE.time}
            />
        )
    })}
      
    </div>
  )
}

export default OtherRecipe

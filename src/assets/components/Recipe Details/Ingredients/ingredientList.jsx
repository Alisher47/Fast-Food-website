import React from 'react'

const ingredientList = ({title, listData}) => {
  return (
    <div>
          <div>
      <div className='absolute top-[1273px] w-[184px] h-[44px] left-[80px] font-inter font-semibold text-[36px] '>
       <h3>Ingredients</h3>
       <div className='absolute w-[144px] h-[29px] top-[48px] left-[80px] text-[24px] font-inter font-semibold'>
        <h1>{title}</h1>
        <div className='absolute w-[206px] h-[28px] top-[33px] left-[128px] text-[16px] font-inter font-semibold'>
         <h3>{listData}</h3>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default ingredientList

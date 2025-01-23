import React from 'react'

const DetailCard = () => {
  return (
    <div>
      <div className='w-[400px] h-[600px] top-[429px] left-[960px] border-[1px] bg-[#E7FAFE] rounded-[20px]'>
        <div className=' w-[223px] h-[29px] top-[32px] left-[32px] font-inter text-[22px]'>
          <h3>Nutrition Information</h3>
        </div>
        <div>
            <h3 className=' top-[85px] left-[32px] text-[16px] font-inter'>Calories</h3>
            <h3 className=' top-[85px] left-[302px] text-[16px] font-inter'>219.9 kcal</h3>
        </div>
        <div>
            <h3 className=' top-[139px] left-[32px] text-[16px] font-inter'>Total Fat</h3>
            <h3 className=' top-[139px] left-[302px] text-[16px] font-inter'>10.7</h3>
        </div>
        <div>
            <h3 className=' top-[193px] left-[32px] text-[16px] font-inter'>Protien</h3>
            <h3 className=' top-[193px] left-[302px] text-[16px] font-inter'>7.9</h3>
        </div>
        <div>
            <h3 className=' top-[247px] left-[32px] text-[16px] font-inter'>Carbohydrate</h3>
            <h3 className=' top-[247px] left-[302px] text-[16px] font-inter'>22.3</h3>
        </div>
        <div>
            <h3 className=' top-[307px] left-[32px] text-[16px] font-inter'>Cholestrol</h3>
            <h3 className=' top-[307px] left-[302px] text-[16px] font-inter'>37.4</h3>
        </div>
        <div className=' top-[512px] left-[32px] w-[336px] h-[56px]'>
            <p>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>

      </div>
      <div className=' w-[1280px] h-[84px] top-[1109px] left-[80px] text-[16px]'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
}

export default DetailCard

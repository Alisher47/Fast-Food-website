import React from 'react'

const SauceList = ({sauceData}) => {
  return (
    <div>
      <div>
      <h3 className='absolute top-[1900px] w-[146px] h-[29px] left-[100px] text-[22px] font-inter font-semibold'>For the sauce</h3>
      </div>
      <input type="checkbox" name="checbox" id="" className='absolute top-[2000px] left-[132px]'/>
      <div className='absolute  h-[22px] top-[2000px] left-[170px] text-[18px] '>
        {sauceData}
      </div>
      <input type="checkbox" name="checbox" id="" className='absolute top-[2120px] left-[132px]'/>
      <div className='absolute  h-[22px] top-[2120px] left-[170px] text-[18px] '>
        {sauceData}
      </div>
      <input type="checkbox" name="checbox" id="" className='absolute top-[2250px] left-[132px]'/>
      <div className='absolute  h-[22px] top-[2250px] left-[170px] text-[18px] '>
        {sauceData}
      </div>
    </div>
  )
}

export default SauceList

import React from 'react'

const AboutData = ({title, text, bigtitle, imageSrc}) => {
  return (
    <div>
        <div className='mt-20 font-inter font-semibold text-[24px] text-left ml-[190px]'>
            {imageSrc}
            <h3>{title}</h3>
        </div>
        <div className='font-inter text-[16px] text-left ml-[190px] mt-6'>
            <p>{text}</p>
        </div>
        <div className='font-inter text-[36px]'>
            <h3>{bigtitle}</h3>
        </div>
    </div>
  )
}

export default AboutData

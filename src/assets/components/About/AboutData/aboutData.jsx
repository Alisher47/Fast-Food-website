import React from 'react'
import Container from '../../Home/Bottom_Rectangle/bottomModal'

const AboutData = ({title, text, bigtitle}) => {
  return (
    <div>
        <div className='mt-20 ml-48 font-inter font-semibold text-[24px]'>
            <h3>{title}</h3>
        </div>
        <div>
            <p>{text}</p>
        </div>
        <div>
            <h3>{bigtitle}</h3>
        </div>
    </div>
  )
}

export default AboutData

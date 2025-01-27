import React from 'react'
import ABOUTS from './constants'
import AboutData from './aboutData'
import Container from '../../Home/Bottom_Rectangle/bottomModal'

const AboutList = () => {
  return (
    <div>
      {ABOUTS.map((ABOUT) => {
        return(
           <AboutData 
           title={ABOUT.title}
           text={ABOUT.text}
           bigtitle={ABOUT.bigtitle}
           />
        )
      })}
     <div className='mt-32'>
        <Container />
     </div>

    </div>
  )
}

export default AboutList

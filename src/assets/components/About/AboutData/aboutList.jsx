import React from 'react';
import ABOUTS from './constants';
import AboutData from './aboutData';
import Container from '../../Home/Bottom_Rectangle/bottomModal';

const AboutList = () => {
  return (
    <div>
      {ABOUTS.map((ABOUT, index) => {
        return (
          <div key={index} className="mb-[200px]">
            <AboutData 
              title={ABOUT.title}
              text={ABOUT.text}
              bigtitle={ABOUT.bigtitle}
            />
          </div>
        );
      })}
      <div className='mt-32'>
        <Container />
      </div>
    </div>
  );
};

export default AboutList;

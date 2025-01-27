import React from 'react';
import About from '../../../../constants/images/about.png';
import image29 from '../../../../constants/images/image 29.png';
const Header = () => {
  return (
    <div>
   <div className='mt-20 font-inter font-semibold text-[56px] text-center'>
      <h3>Full Guide to Becoming a Professional Chef</h3>
      <div className='mt-8 flex justify-center'>
        <img src={About} alt="About" />
      </div>
    </div>
    <div className='ml-48 mr-48 mt-12 font-inter text-[16px] text-gray-500'>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.</p>
    </div>
    <div className='mt-[64px] ml-20 mr-20'>
        <img src={image29} alt="" 
        className='w-[1280px] h-[600px] rounded-[30px] '
        />
    </div>
    </div>
  );
};

export default Header;

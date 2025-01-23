import React from 'react'

const Footer = () => {


  return (
    <div className="relative w-[1280px] h-[193px] top-[6200px] left-[80px]">
      <div className="flex justify-between items-center px-4 py-2">
        <h1 className="font-lobster text-3xl ml-4 left-[80px]">FoodieLand</h1>
        <div className="flex space-x-16 flex-grow justify-center">
          <h3 className="cursor-pointer hover:text-gray-400 text-lg">Recipes</h3>
          <h3 className="cursor-pointer hover:text-gray-400 text-lg">Blog</h3>
          <h3 className="cursor-pointer hover:text-gray-400 text-lg">Contact</h3>
          <h3 className="cursor-pointer hover:text-gray-400 text-lg">About Us</h3>
        </div>
      </div>
       <div className='  left-[35px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, </div>
    </div>
  )
}

export default Footer

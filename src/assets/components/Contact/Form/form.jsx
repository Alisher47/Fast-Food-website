import React from 'react';
import Layer from '../../../../constants/images/Layer .png';
import Container from '../../Home/Bottom_Rectangle/bottomModal'
import OtherRecipe from '../../Recipe Details/Other Recipies/otherRecipe';

const Form = () => {
  return (
   <div>
   <div className="mt-[80px] flex justify-center items-center space-x-16 mr-60">
      <img src={Layer} alt="Chef" className="w-[350px] h-auto" />

      <div className="w-[600px]">
        <form className="space-y-6">
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-inter font-semibold text-black mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-[16px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-inter font-semibold text-black mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-[16px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-inter font-semibold text-black mb-2">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-[16px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-inter font-semibold text-black mb-2">Enquiry</label>
              <input
                type="text"
                placeholder="Enquiry"
                className="w-full p-3 rounded-[16px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-inter font-semibold text-black mb-2">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-[16px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full p-3 rounded-[16px] bg-black text-white font-semibold transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <div className='mt-40'>
        <Container />
    </div>
    <div>
        <div className='mt-40 font-inter font-semibold text-[36px] '>
            <h3>Check out the delicious recipes</h3>
        </div>
        <div>
        <OtherRecipe />
        </div>
    </div>
    </div>
  );
};

export default Form;

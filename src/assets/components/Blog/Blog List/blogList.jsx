import React from 'react';
import BLOGSDATA from './constant';
import BlogData from './blogData';
import OtherRecipies from '../../Recipe Details/Ingredients/otherRecipies';

const BlogList = () => {
  return (
    <div className="px-4 py-8">
   
      <div className="flex gap-8">

        <div className="flex-1">
          <div className="space-y-8">
            {BLOGSDATA.map((BLOGDATA, index) => (
              <BlogData
                key={index} 
                title={BLOGDATA.title}
                imageSrc={BLOGDATA.imageSrc}
                text={BLOGDATA.text}
              />
            ))}
          </div>
        </div>

        <div>
          <OtherRecipies />
        </div>
      </div>
    </div>
  );
};

export default BlogList;

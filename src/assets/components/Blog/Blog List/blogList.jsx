import React from 'react';
import BLOGSDATA from './constant';
import BlogData from './blogData';
import OtherRecipies from '../../Recipe Details/Ingredients/otherRecipies';

const BlogList = () => {
  return (
    <div className="flex">
      <div className="flex-1"> {/* This is the left side container */}
        {BLOGSDATA.map((BLOGDATA) => {
          return (
            <BlogData 
              key={BLOGDATA.title} // Always a good idea to add a unique key for mapping
              title={BLOGDATA.title}
              imageSrc={BLOGDATA.imageSrc}
              text={BLOGDATA.text}
            />
          );
        })}
      </div>
      <div className="ml-8 mt-4"> {/* Add top margin to OtherRecipies */}
        <OtherRecipies />
      </div>
    </div>
  );
};

export default BlogList;

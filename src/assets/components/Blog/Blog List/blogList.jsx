import React from 'react'
import BLOGSDATA from './constant'
import BlogData from './blogData'
import OtherRecipies from '../../Recipe Details/Ingredients/otherRecipies'

const BlogList = () => {
  return (
    <div>
      {BLOGSDATA.map((BLOGDATA) => {
        return(
          <BlogData 
          title={BLOGDATA.title}
          imageSrc={BLOGDATA.imageSrc}
          text={BLOGDATA.text}
          />
        )
      })}
      <div>
      <OtherRecipies />
      </div>
    </div>
  )
}

export default BlogList

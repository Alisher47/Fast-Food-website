import React from 'react'
import BLOGSDATA from './constant'
import BlogData from './blogData'

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
    </div>
  )
}

export default BlogList

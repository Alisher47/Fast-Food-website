import React from 'react'
import Navbar from '../../components/Home/Navbar/navbar'
import Header from '../../components/Blog/Header/header'
import BlogList from '../../components/Blog/Blog List/blogList'
import BreadCrumbs from '../../components/Blog/BreadCrumbs/breadCrumbs'
import Footer from '../../components/Home/Footer/footer'

const Blog = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <BlogList />
      <BreadCrumbs />
      <Footer />
    </div>
  )
}

export default Blog
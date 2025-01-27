import React from 'react'
import Navbar from '../../components/Home/Navbar/navbar'
import Header from '../../components/About/Header/aboutHeader'
import AboutList from '../../components/About/AboutData/aboutList'
import Footer from '../../components/Home/Footer/footer'
const About = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <AboutList />
        <Footer />
    </div>
  )
}

export default About

import React from "react";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "../../components/Home/Navbar/navbar";
import Container from "../../components/Home/Container/container";
import Categories from "../../components/Home/Categories/categories";
import Recipes from "../../components/Home/Recipies/recipies";
import Chef from "../../components/Home/Chef_Container/chef";
import Instagram from '../../components/Home/Instagram_Posts/instagram'
import BottomRecipies from '../../components/Home/Bottom_recipies/bottomRecipes'
import Modal from "../../components/Home/Bottom_Rectangle/bottomModal";
import Footer from "../../components/Home/Footer/footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Container />
      <Categories />

      <Recipes />
      <Chef />
      <Instagram />
      <BottomRecipies  />
      <Modal />
      <Footer />
    </div>
  );
};

export default Home;

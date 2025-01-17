import React from "react";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "../../components/Navbar/navbar";
import Container from "../../components/Container/container";
import Categories from "../../components/Categories/categories";
import Recipes from "../../components/Recipies/recipies";
import Chef from "../../components/Chef_Container/chef";
import Instagram from "../../components/Instagram_Posts/instagram";
import BottomRecipies from '../../components/Bottom_recipies/bottomRecipes'
import Modal from "../../components/Bottom_Rectangle/bottomModal";
import Footer from "../../components/Footer/footer";

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

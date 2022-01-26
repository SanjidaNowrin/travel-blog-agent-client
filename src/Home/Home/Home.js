import React from "react";
import Header from "../../Shared/Header/Header";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import TopRated from "./../TopRated/TopRated";
import Footer from "./../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Blogs></Blogs>
      <TopRated></TopRated>
      <Footer></Footer>
    </div>
  );
};

export default Home;

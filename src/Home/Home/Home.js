import React from "react";
import Header from "../../Shared/Header/Header";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Footer from "./../../Shared/Footer/Footer";
import QuoteSection from "./../QuoteSection/QuoteSection";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f7f8fc" }}>
      <Header />
      <About />
      <Blogs />
      <QuoteSection />
      <Footer />
    </div>
  );
};

export default Home;

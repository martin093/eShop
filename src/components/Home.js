import React, { Component } from "react";
import CustomNavBar from "./CustomNavBar";
import CustomCarousel from "./CustomCarousel";
import Features from "./Features";
import Categories from "./Categories";
import Footer from "./Footer";
import BlogHome from "./BlogHome";
import Divider from "./Divider";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <CustomNavBar />
        <CustomCarousel />
        <Features />
        <Categories />
        <Divider />
        <BlogHome />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;

import React from "react";
import Contact from "../Shared/Contact";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar";
import ScrollTop from "../Shared/ScrollTop";
import Faculties from "./Faculties/Faculties.js";
import Gallery from "./Gallery/Gallery";
import Hero from "./Hero/Hero";
import "./home.css";
import Mission from "./Mission/Mission";
import RecentEvents from "./Events/RecentEvents";
import About from "./WhyEEE/About";

// import WhyEEE from './WhyEEE/WhyEEE'

// import Stats from './Stats/Stats'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Stats/> */}
      {/* <Mission /> */}
      {/* Faculties */}
      <Faculties />
      {/* About */}
      <About />
      {/* news and event */}
    
      {/* Gallery */}
      <Gallery />
      <RecentEvents />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default Home;

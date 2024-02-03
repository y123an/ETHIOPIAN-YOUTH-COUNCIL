import React, { useEffect } from "react";
import Navbar from "../componenets/LandingPage/Navbar";
import Hero from "../componenets/LandingPage/Hero";
import About from "../componenets/LandingPage/About";
import Message from "../componenets/LandingPage/Message";
import CoreValues from "../componenets/LandingPage/CoreValues";
import Footer from "../componenets/LandingPage/Footer";
import { partners } from "../assets/partners";
import News from "../componenets/LandingPage/News";

const LandingPage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Message />
      </div>
      <div>
        <CoreValues />
      </div>
      <div>
        <News />
      </div>
      <div className="flex p-16 justify-center">
        <img src={partners} alt="" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;

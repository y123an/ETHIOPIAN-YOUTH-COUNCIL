import React from "react";
import Navbar from "../componenets/LandingPage/Navbar";
import Hero from "../componenets/LandingPage/Hero";
import About from "../componenets/LandingPage/About";
import Message from "../componenets/LandingPage/Message";
import CoreValues from "../componenets/LandingPage/CoreValues";
import Footer from "../componenets/LandingPage/Footer";

const LandingPage = () => {
  return (
    <div>
      <div className="z-10 absolute w-[100%]">
        <div>
          <Navbar />
        </div>
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
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;

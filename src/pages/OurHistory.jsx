import React from "react";
import Navbar from "../componenets/LandingPage/Navbar";
import OurCouncilImage from "../componenets/OurCouncil/OurCouncilImage";
import OurCouncilNavigation from "../componenets/OurCouncil/OurCouncilNavigation";
import History from "../componenets/OurCouncil/History";
import Objectives from "../componenets/OurCouncil/Objectives";
import Footer from "../componenets/LandingPage/Footer";
const OurHistory = () => {
  return (
    <div>
      <div className="absolute z-10 w-[100%]">
        <Navbar />
      </div>
      <div>
        <OurCouncilImage />
      </div>
      <div className="absolute top-[250px] right-[200px]">
        <OurCouncilNavigation />
      </div>
      <div>
        <History />
      </div>
      <div>
        <Objectives />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default OurHistory;

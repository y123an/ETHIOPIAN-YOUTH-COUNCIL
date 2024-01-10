import React from "react";
import Footer from "../componenets/LandingPage/Footer";
import OurCouncilNavigation from "../componenets/OurCouncil/OurCouncilNavigation";
import OurCouncilImage from "../componenets/OurCouncil/OurCouncilImage";
import Navbar from "../componenets/LandingPage/Navbar";
import Mission from "../componenets/OurCouncil/Mission";

const OurMission = () => {
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
        <Mission />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default OurMission;

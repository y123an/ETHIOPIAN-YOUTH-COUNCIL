import React from "react";
import Footer from "../componenets/LandingPage/Footer";
import OurCouncilNavigation from "../componenets/OurCouncil/OurCouncilNavigation";
import OurCouncilImage from "../componenets/OurCouncil/OurCouncilImage";
import Navbar from "../componenets/LandingPage/Navbar";
import Mission from "../componenets/OurCouncil/Mission";

const OurMission = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div>
        <OurCouncilImage
          title={"our mission"}
          description={"missions of the ethiopian youth council "}
        />
      </div>
      <div className="flex gap-[200px]">
        <div className="">
          <OurCouncilNavigation />
        </div>
        <div>
          <Mission />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default OurMission;

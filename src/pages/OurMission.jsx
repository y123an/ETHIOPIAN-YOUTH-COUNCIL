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
      <div className="flex w-full flex-col md:flex-row md:items-start items-center justify-center gap-10">
        <div className="pt-5">
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

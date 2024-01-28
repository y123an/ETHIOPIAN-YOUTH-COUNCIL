import React from "react";
import Footer from "../componenets/LandingPage/Footer";
import OurCouncilNavigation from "../componenets/OurCouncil/OurCouncilNavigation";
import OurCouncilImage from "../componenets/OurCouncil/OurCouncilImage";
import Navbar from "../componenets/LandingPage/Navbar";
import Vision from "../componenets/OurCouncil/Vision";

const OurVision = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div>
        <OurCouncilImage
          title={"our vision"}
          description={"ethiopian youth council's Vision and goals "}
        />
      </div>
      <div className="flex gap-[200px]">
        <div className="">
          <OurCouncilNavigation />
        </div>
        <div>
          <Vision />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default OurVision;

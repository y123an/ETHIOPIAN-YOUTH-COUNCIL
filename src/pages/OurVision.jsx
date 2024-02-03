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
      <div className="flex w-full flex-col md:flex-row md:items-start items-center justify-center gap-10">
        <div className="pt-5">
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

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
      <div className="">
        <Navbar />
      </div>
      <div>
        <OurCouncilImage
          title={"Introduction"}
          description={"About Ethiopian youth council"}
        />
      </div>
      <div className="flex w-full gap-[200px]">
        <div className="">
          <OurCouncilNavigation />
        </div>
        <div>
          <History />
        </div>
      </div>
      {/* <div>
        <Objectives />
      </div> */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default OurHistory;

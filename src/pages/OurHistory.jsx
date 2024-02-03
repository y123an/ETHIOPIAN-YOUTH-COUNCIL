import React from "react";
import Navbar from "../componenets/LandingPage/Navbar";
import OurCouncilImage from "../componenets/OurCouncil/OurCouncilImage";
import OurCouncilNavigation from "../componenets/OurCouncil/OurCouncilNavigation";
import History from "../componenets/OurCouncil/History";
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
      <div className="flex w-full flex-col md:flex-row md:items-start items-center justify-center gap-10">
        <div className="pt-5">
          <OurCouncilNavigation />
        </div>
        <div>
          <History />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default OurHistory;

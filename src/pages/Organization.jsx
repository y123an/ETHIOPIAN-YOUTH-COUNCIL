import React from "react";
import OurCouncilImage from "../componenets/OurCouncil/OurCouncilImage";
import Navbar from "../componenets/LandingPage/Navbar";
import Footer from "../componenets/LandingPage/Footer";
import FromCouncilNavigation from "../componenets/OurCouncil/FromCouncilNavigation";
import Organizations from "../componenets/fromCouncil/Organization";

const Organization = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div>
        <OurCouncilImage
          title={"Organization"}
          description={"Search and find about the organizations "}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-20">
        <div className="pt-5">
          <FromCouncilNavigation />
        </div>
        <div className="">
          <Organizations />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Organization;

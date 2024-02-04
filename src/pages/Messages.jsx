import React from "react";
import Navbar from "../componenets/LandingPage/Navbar";
import OurCouncilImage from "../componenets/OurCouncil/OurCouncilImage";
import Footer from "../componenets/LandingPage/Footer";
import Message from "../componenets/LandingPage/Messages";
import NewsNavigation from "../componenets/OurCouncil/NewsNavigation";

const Messages = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div>
        <OurCouncilImage
          title={"Messages"}
          description={
            "Messages from the council members and the parntner organization  "
          }
        />
      </div>
      <div className="flex w-full flex-col md:flex-row md:items-start items-center justify-center gap-10">
        <NewsNavigation />
        <div className="">
          <Message />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Messages;

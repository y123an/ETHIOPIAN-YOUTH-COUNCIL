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
      <div className="flex gap-[100px]">
        <div className="">
          <NewsNavigation />
        </div>
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

import Footer from "../componenets/LandingPage/Footer";
import Navbar from "../componenets/LandingPage/Navbar";
import NewsNavigation from "../componenets/OurCouncil/NewsNavigation";
import OurCouncilImage from "../componenets/OurCouncil/OurCouncilImage";
import Publications from "../componenets/Publications";
import Resource from "../componenets/Resource";

const Publication = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div>
        <OurCouncilImage
          title={"Resources"}
          description={"Resources from Ethiopian youth council"}
        />
      </div>
      <div className="flex gap-[100px]">
        <div className="">
          <NewsNavigation />
        </div>
        <div className="py-20 px-10">
          <Publications />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Publication;

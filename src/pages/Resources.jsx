import Footer from "../componenets/LandingPage/Footer";
import Navbar from "../componenets/LandingPage/Navbar";
import NewsNavigation from "../componenets/OurCouncil/NewsNavigation";
import OurCouncilImage from "../componenets/OurCouncil/OurCouncilImage";
import Resource from "../componenets/Resource";

const Resources = () => {
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
      <div className="flex justify-center">
        <div className="pt-5">
          <NewsNavigation />
        </div>
        <div className="py-20 px-10">
          <Resource />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Resources;

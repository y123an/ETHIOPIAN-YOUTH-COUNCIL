import Footer from "../componenets/LandingPage/Footer";
import Navbar from "../componenets/LandingPage/Navbar";
import NewsNavigation from "../componenets/OurCouncil/NewsNavigation";
import OurCouncilImage from "../componenets/OurCouncil/OurCouncilImage";
import Publications from "../componenets/Publications";

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
      <div className="flex w-full flex-col md:flex-row md:items-start items-center justify-center gap-10">
        <div className="pt-5">
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

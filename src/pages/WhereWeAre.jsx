import Navbar from "../componenets/LandingPage/Navbar";
import OurCouncilImage from "../componenets/OurCouncil/OurCouncilImage";
import Footer from "../componenets/LandingPage/Footer";
import WhereWeAreNavigation from "../componenets/OurCouncil/WhereWeAreNavigation";
import Gallery from "../componenets/Gallery";

const WhereWeAre = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div>
        <OurCouncilImage
          title={"Where We are"}
          description={"the places where you can find us"}
        />
      </div>
      <div className="flex w-full flex-col md:flex-row md:items-start items-center justify-center gap-10">
        <div className="pt-5">
          <WhereWeAreNavigation />
        </div>
        <div className="py-20 px-10">
          <Gallery />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default WhereWeAre;

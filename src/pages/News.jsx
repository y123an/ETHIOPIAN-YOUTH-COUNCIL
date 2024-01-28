import New from "../componenets/LandingPage/News";
import Navbar from "../componenets/LandingPage/Navbar";
import OurCouncilImage from "../componenets/OurCouncil/OurCouncilImage";
import Footer from "../componenets/LandingPage/Footer";
import NewsNavigation from "../componenets/OurCouncil/NewsNavigation";

const News = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div>
        <OurCouncilImage
          title={"news and updates"}
          description={
            "news and updatas that happens in the ethiopian youth Council"
          }
        />
      </div>
      <div className="flex">
        <div className="">
          <NewsNavigation />
        </div>
        <div className="">
          <New />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default News;

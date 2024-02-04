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
            "News and updatas that happened in the Ethiopian Youth Council"
          }
        />
      </div>
      <div className="flex w-full flex-col md:flex-row md:items-start items-center justify-center gap-10">
        <div className="pt-5">
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

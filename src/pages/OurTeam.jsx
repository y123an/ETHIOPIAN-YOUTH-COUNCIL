import Footer from "../componenets/LandingPage/Footer";
import Navbar from "../componenets/LandingPage/Navbar";
import LeaderShip from "../componenets/OurCouncil/LeaderShip";
import OurCouncilImage from "../componenets/OurCouncil/OurCouncilImage";
import OurCouncilNavigation from "../componenets/OurCouncil/OurCouncilNavigation";
import TeamCard from "../componenets/OurTeam/TeamCard";

const OurTeam = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div>
        <OurCouncilImage
          title={"Leadership"}
          description={"ethiopian youth council's leaders "}
        />
      </div>
      <div className="flex w-full flex-col md:flex-row md:items-start items-center justify-center gap-10">
        <div className="pt-5">
          <OurCouncilNavigation />
        </div>
        <div>
          <LeaderShip />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default OurTeam;

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
      <div className="flex gap-[200px]">
        <div className="">
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

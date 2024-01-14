import Footer from "../componenets/LandingPage/Footer";
import Navbar from "../componenets/LandingPage/Navbar";
import OurCouncilImage from "../componenets/OurCouncil/OurCouncilImage";
import TeamCard from "../componenets/OurTeam/TeamCard";

const OurTeam = () => {
  return (
    <div className="font-Dosis bg-[rgba(255,146,24,0.2)]">
      <div>
        <div className="absolute z-10 w-[100%]">
          <Navbar />
        </div>
        <div className="h-[]">
          <OurCouncilImage />
        </div>
      </div>
      <div className="p-10">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold text-primary  underline underline-offset-4">
            Our Team
          </h1>
        </div>
        <div className="p-10">
          <div>
            <h2 className="uppercase text-xl underline font-bold">executive</h2>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-10">
            <div>
              <TeamCard />
            </div>
            <div className="flex w-full justify-around">
              <TeamCard />
              <TeamCard />
            </div>
          </div>
        </div>
        <div className="p-10 space-y-10">
          <div>
            <h2 className="uppercase text-xl underline font-bold">directors</h2>
          </div>
          <div className=" grid grid-cols-5 gap-5">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
        <div className="p-10 space-y-10">
          <div>
            <h2 className="uppercase text-xl underline font-bold">officers</h2>
          </div>
          <div className=" grid grid-cols-5 gap-5">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default OurTeam;

import CountUp from "react-countup";
import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <div className="bg-gradient-to-b  from-black/[.2] to-black/[.2] md:pt-20 text-white md:min-[80vh] flex flex-col justify-center items-center md:px-4 lg:px-20">
      <div className="text-center mb-8">
        {/* <h1 className="text-sm head-font md:text-3xl lg:text-4xl xl:text-5xl w-[300px] md:w-auto font-bold mb-4">
          Empowering 40 Million Leading Youth Representative and Partner to
          1500+ Organizations!
        </h1> */}
        <p className="bg-black text-sm md:text-2xl lg:text-4xl bg-opacity-50 p-2 md:p-4 lg:p-6 border-2 border-primary mb-4">
          Empowered Youth For Empowered Ethiopia
        </p>
        <div className="flex gap-4 md:flex-row justify-center">
          <Link
            to={"/our-council/history"}
            className="md:py-3 md:px-6 p-2 text-sm bg-white text-blue-800 flex justify-center items-center font-semibold hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out"
          >
            More About Us
          </Link>
          <Link
            to={"/register-youth"}
            className="md:py-3 md:px-6 p-2 bg-primary text-white font-semibold hover:bg-white hover:text-primary border-2 border-primary transition duration-300 ease-in-out"
          >
            Become A Member
          </Link>
        </div>
      </div>
      <div className="md:flex hidden gap-10">
        <div className="mb-8">
          <p className="text-base  md:text-lg capitalize mb-2">
            Official Representative of
          </p>
          <p className="text-xl md:text-2xl lg:text-4xl font-bold mb-2">
            <CountUp start={2} end={40} duration={3} delay={0} /> Million+
          </p>
          <p className="text-base md:text-lg capitalize mb-2">Youth</p>
        </div>
        <div>
          <p className="text-base mb-2">Partner Of</p>
          <p className="text-xl md:text-2xl lg:text-4xl font-bold mb-2">
            <CountUp start={100} end={1500} duration={3} delay={0} />+
          </p>
          <p className="text-base capitalize">Organization</p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;

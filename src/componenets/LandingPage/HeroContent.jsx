import CountUp from "react-countup";
const HeroContent = () => {
  return (
    <div
      style={{
        boxShadow: "0px 0px 10px rgb(255,255,255)",
      }}
      className="w-[700px] absolute z-10 bg-[#1975BE] rounded-lg border-primary border-2  text-white"
    >
      <div className="flex flex-col">
        <div className="flex justify-center">
          <h1 className="text-[60px] w-full text-center  absolute -mt-[100px] z-10">
            Ethiopian Youth Council
          </h1>
        </div>
        <div className="flex justify-center py-10 gap-32">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[18px] capitalize">
              official Represenatative of
            </p>
            <p className="text-[40px]">
              <CountUp start={2} end={40} duration={3} delay={0} />{" "}
              <span>Million</span>+
            </p>
            <p className="text-[18px] capitalize">Youth</p>
          </div>
          <div className="flex flex-col justify-center text-center items-center">
            <p className="text-[18px]">Partner Of</p>
            <p className="text-[40px]">
              <CountUp start={100} end={1500} duration={3} delay={0} />+
            </p>
            <p className="text-[18px] capitalize">Organization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;

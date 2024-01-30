import CountUp from "react-countup";
const HeroContent = () => {
  return (
    <div className="text-white h-full items-center justify-start flex">
      <div className="flex flex-col gap-10 w-[900px]">
        <div className="flex flex-col ">
          <div className="text-[50px] head-font font-light capitalize ">
            Empowering 40 Million Leading Youth Representative and Partner to
            1500+ Organizations!
          </div>
          <div className="bg-black/[0.4] w-[500px] p-5 border-s-4  border-primary">
            <h1 className="text-2xl font-extralight">
              Empowered Youth For Empowered Ethiopia
            </h1>
          </div>
        </div>
        <div className=" flex gap-6">
          <button className="p-5 border border-primary">More About Us</button>
          <button className="p-5 border border-primary bg-primary">
            Become A Member
          </button>
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col justify-center items-center font-light">
          <div className="gap-5 ml-[200px]">
            <div className="flex justify-start">
              <p className="text-[22px] capitalize">
                official Represenatative of
              </p>
            </div>
            <div className="flex justify-center">
              <p className="text-[90px]">
                <CountUp start={2} end={40} duration={3} delay={0} />{" "}
                <span>Million</span>+
              </p>
            </div>
            <div className="flex justify-end">
              <p className="text-[22px] capitalize font-">Youth</p>
            </div>
          </div>
          <div className="gap-5 mr-[200px]">
            <div className="flex">
              <p className="text-[22px]">Partner Of</p>
            </div>
            <div className="flex justify-center">
              <p className="text-[90px]">
                <CountUp start={100} end={1500} duration={3} delay={0} />+
              </p>
            </div>
            <div className="flex justify-end">
              <p className="text-[22px] capitalize">Organization</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeroContent;

{
  /* <div
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
</div> */
}

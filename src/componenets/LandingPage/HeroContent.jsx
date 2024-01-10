import React from "react";
import CountUp from "react-countup";
const HeroContent = () => {
  return (
    <div className="bg-gradient-to-b from-[#252424] from-10% to-[#111111] to-90% text-white">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <h1 className="text-[60px] w-full text-center  absolute -mt-[100px] z-10">
            Ethiopian Youth Council
          </h1>
          <div className="h-[1px] w-[800px] bg-white "></div>
        </div>
        <div className="flex justify-center py-10 gap-20">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[40px]">
              <CountUp start={40000} end={40000000} duration={3} delay={0} />+
            </p>
            <p className="text-[10px]">official Represenatative</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[40px]">
              <CountUp start={100} end={1500} duration={3} delay={0} />+
            </p>
            <p className="text-[10px]">official Partner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;

import React from "react";
import { heroImage3, heroImage4 } from "../../assets/images";

const OurCouncilImage = ({ title, description }) => {
  return (
    <div className="w-[100%] h-[400px]">
      <img
        src={heroImage4}
        alt=""
        className="w-full h-full object-center object-cover"
      />
      <div className="absolute bg-black/[0.4] h-[400px] w-full top-[100px]">
        <div className="flex  items-center h-full p-[170px] font-light ">
          <div className="flex border-s-8 border-b-8 p-5 gap-[200px] items-center">
            <h1 className="capitalize text-white text-5xl p-10 head-font">
              {title}
            </h1>
            <p className="capitalize text-2xl text-white w-[500px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCouncilImage;

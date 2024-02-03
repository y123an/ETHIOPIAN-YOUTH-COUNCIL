import React from "react";
import { heroImage4 } from "../../assets/images";

const OurCouncilImage = ({ title, description }) => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <img
        src={heroImage4}
        alt={title}
        className="w-full h-full object-cover filter brightness-70"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold head-font capitalize mb-4">
            {title}
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white text-opacity-80 max-w-[600px] mx-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurCouncilImage;

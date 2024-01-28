import React from "react";
import { heroImage1, heroImage2 } from "../../assets/images";

const About = () => {
  return (
    <div className="flex flex-col items-center text-justify h-[600px] p-10 gap-5 ">
      <div className="flex">
        <h1 className="text-3xl p-2 border-b-4 capitalize border-primary">
          About Us
        </h1>
      </div>
      <div className="flex flex-col gap-10">
        <div className="w-[500px]">
          <p>
            The Ethiopian Youth Council is a statutory organization established
            according to the National Youth Policy of Ethiopia on April 02,
            2023.dedicated to empowering Ethiopian youth and promoting their
            active participation in the country's social, economic, and
            political development.
          </p>
        </div>
        <div className="w-[500px]">
          <p>
            EYC is the official representative And voice of more than 40.1
            million young people of Ethiopia, Aims to promote Active youth
            participation and engagement in decision-making processes, foster a
            culture of volunteerism, holistic youth empowerment,inclusion of the
            youth in governance, national and international affairs and ensures
            programs are youth-centered and driven.
          </p>
        </div>
        <div className="flex justify-end">
          <button className="py-3 px-6 bg-primary text-white">Read More</button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-9">
        <div className="w-[900px] h-[2px] rounded-md bg-[#F2BC64]"></div>
      </div>
    </div>
  );
};

export default About;

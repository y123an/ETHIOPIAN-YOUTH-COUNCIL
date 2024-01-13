import React from "react";
import { heroImage1, heroImage2 } from "../../assets/images";

const About = () => {
  return (
    <div className="flex justify-around h-[600px] p-10 gap-10 text-center items-center">
      <div className="flex flex-col gap-10">
        <div className="w-[500px]">
          <p>
            The Ethiopian Youth Council (EYC) is a statutory organization
            established according to the National Youth Policy of Ethiopia
            (2004), dedicated to empowering Ethiopian youth and promoting their
            active participation in the country's social, economic, and
            political development. Established on April 02, 2023, and registered
            by Authority for Civil Society Organizations with registry number
            6884 on May 29, 2023.
          </p>
        </div>
        <div className="w-[500px]">
          <p>
            It is the official representative voice of more than 41 million
            young people in Ethiopia. It aims to promote youth participation in
            decision-making processes, foster a culture of volunteerism, provide
            opportunities for personal and professional development, and
            inclusion of the youth in governance and national affairs, and
            ensures programs are youth-centered and driven.
          </p>
        </div>
      </div>
      <div className="">
        <img src={heroImage1} alt="" className="w-[500px] rounded-md" />
      </div>
    </div>
  );
};

export default About;

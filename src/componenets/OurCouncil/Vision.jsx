import React from "react";
import { ladder, opportunity, participation, voice } from "../../assets/icons";
import { motion } from "framer-motion";
const Vision = () => {
  return (
    <div className="grid gap-10 justify-center font-light p-10">
      <div className="flex">
        <h1 className="text-3xl font-light p-2 border-b-4 border-primary ">
          Our Vision
        </h1>
      </div>
      <div className="bg-blue-300/[0.5] rounded-sm shadow-lg font-light p-10 w-[700px]">
        <p>
          The council envision building a youth-centered society that values
          voices, respects rights, ensures benefits, enhances capacity, and
          fosters unity among diverse backgrounds.
        </p>
      </div>
      <div className="flex">
        <h1 className="text-3xl  font-light p-2 border-b-4 border-primary ">
          Our Goals
        </h1>
      </div>
      <div className="grid w-[800px] gap-20 text-center">
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          className="flex flex-col justify-center items-center"
        >
          <div className="flex w-full text-justify  bg-primary/70 gap-10 p-2 rounded-b-md">
            <img src={ladder} alt="opportunity" className="w-[30px]" />
            <h1 className="text-white font-light text-xl">
              Empowering Young People
            </h1>
          </div>
          <div className="bg-yellow-200/[0.2] p-5 shadow-md">
            <p className=" text-lg text-justify">
              The Ethiopian Youth Council seeks to empower young people by
              providing them with the tools, resources, and opportunities they
              need to reach their full potential. This includes promoting
              education, skills development, and entrepreneurship among young
              people.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          className="flex flex-col justify-center items-center "
        >
          <div className="flex w-full text-justify  bg-primary/70 gap-10 p-2 rounded-b-md">
            <img src={participation} alt="opportunity" className="w-[30px]" />
            <h1 className="text-white font-light text-xl">
              Promoting Youth Engagement
            </h1>
          </div>
          <div className="bg-yellow-200/[0.2] p-5 shadow-md">
            <p className=" text-lg text-justify">
              The Ethiopian Youth Council aims to promote the engagement of
              young people in the social, economic, and political development of
              Ethiopia. This includes advocating for the rights and interests of
              young people and supporting their participation in decision-making
              processes.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          className="flex flex-col justify-center items-center "
        >
          <div className="flex w-full text-justify  bg-primary/70 gap-10 p-2 rounded-b-md">
            <img src={voice} alt="opportunity" className="w-[30px]" />
            <h1 className="text-white font-light text-xl">
              Fostering Leadership
            </h1>
          </div>
          <div className="bg-yellow-200/[0.2] p-5 shadow-md">
            <p className=" text-lg text-justify">
              The Ethiopian Youth Council aims to foster the development of
              young leaders who can contribute to the development of Ethiopia.
              This includes providing leadership training, mentorship, and
              support to young people.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
          }}
          className="flex flex-col justify-center items-center "
        >
          <div className="flex w-full text-justify  bg-primary/70 gap-10 p-2 rounded-b-md">
            <img src={opportunity} alt="opportunity" className="w-[30px]" />
            <h1 className="text-white font-light text-xl">Building Networks</h1>
          </div>
          <div className="bg-yellow-200/[0.2] p-5 shadow-md">
            <p className=" text-lg text-justify">
              The Ethiopian Youth Council aims to foster the development of
              young leaders who can contribute to the development of Ethiopia.
              This includes providing leadership training, mentorship, and
              support to young people.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;

import React from "react";
import { ladder, opportunity, participation, voice } from "../../assets/icons";
import { motion } from "framer-motion";
const Vision = () => {
  return (
    <div className="grid gap-32 justify-center p-10">
      <h1 className="text-3xl text-primary font-extrabold ">Our Vision</h1>
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
          className="flex flex-col justify-center items-center gap-10"
        >
          <h2 className="text-3xl font-bold">Empowering Young People</h2>
          <img src={ladder} alt="ladder" />
          <p>
            The Ethiopian Youth Council seeks to empower young people by
            providing them with the tools, resources, and opportunities they
            need to reach their full potential. This includes promoting
            education, skills development, and entrepreneurship among young
            people.
          </p>
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
          className="flex flex-col justify-center items-center gap-10"
        >
          <h2 className="text-3xl font-bold">Promoting Youth Engagement</h2>
          <img src={participation} alt="ladder" />
          <p>
            The Ethiopian Youth Council aims to promote the engagement of young
            people in the social, economic, and political development of
            Ethiopia. This includes advocating for the rights and interests of
            young people and supporting their participation in decision-making
            processes.
          </p>
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
          className="flex flex-col justify-center items-center gap-10"
        >
          <h2 className="text-3xl font-bold">Fostering Leadership</h2>
          <img src={voice} alt="ladder" />
          <p>
            The Ethiopian Youth Council aims to foster the development of young
            leaders who can contribute to the development of Ethiopia. This
            includes providing leadership training, mentorship, and support to
            young people.
          </p>
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
          className="flex flex-col justify-center items-center gap-10"
        >
          <h2 className="text-3xl font-bold">Building Networks</h2>
          <img src={opportunity} alt="ladder" />
          <p>
            The Ethiopian Youth Council aims to foster the development of young
            leaders who can contribute to the development of Ethiopia. This
            includes providing leadership training, mentorship, and support to
            young people.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;

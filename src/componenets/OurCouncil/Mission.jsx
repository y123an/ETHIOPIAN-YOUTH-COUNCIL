import React from "react";
import {
  idea,
  networking,
  opportunity,
  participation,
  role,
  world,
} from "../../assets/icons";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <div className="grid gap-32 justify-center p-10">
      <h1 className="text-3xl text-primary font-extrabold ">Our Mission</h1>
      <div className="grid gap-20 text-center">
        <div className="flex gap-32">
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              type: "tween",
            }}
            className="flex gap-10 flex-col w-[400px]"
          >
            <img src={opportunity} alt="opportunity" />
            <p className=" text-lg">
              To provide young people with opportunities for education, skills
              training, and leadership development,
            </p>
          </motion.div>
          <motion.div
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              type: "tween",
            }}
            className="flex gap-10  flex-col w-[400px]"
          >
            <p className="text-lg ">
              To support their development through advocacy, capacity building,
              and networking.
            </p>
            <img src={networking} alt="networking" />
          </motion.div>
        </div>
        <div className="flex gap-32">
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              type: "tween",
            }}
            className="flex gap-10 flex-col w-[400px]"
          >
            <img src={participation} alt="opportunity" />
            <p className=" text-lg">
              To ensure the political participation and representation of the
              youth in the formulation and implementation of emerging policies,
              strategies, programs, and projects;
            </p>
          </motion.div>
          <motion.div
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              type: "tween",
            }}
            className="flex gap-10  flex-col w-[400px]"
          >
            <p className="text-lg ">
              To enable the youth to play a significant role in the formulation
              and implementation of policies, strategies, programs, and projects
              to ensure their political, economic, and social participation and
              benefits
            </p>
            <img src={role} alt="networking" />
          </motion.div>
        </div>
        <div className="flex gap-32">
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              type: "tween",
            }}
            className="flex gap-10 flex-col w-[400px]"
          >
            <img src={idea} alt="opportunity" />
            <p className=" text-lg">
              To work for the youth in promoting their ideas freely and
              according to the law, free from interference and influence
            </p>
          </motion.div>
          <motion.div
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              type: "tween",
            }}
            className="flex gap-10  flex-col w-[400px]"
          >
            <p className="text-lg ">
              To work in coordination with concerned entities and equivalent
              organizations to establish connections and mutual links with the
              youth at national, continental, and international levels
            </p>
            <img src={world} alt="networking" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Mission;

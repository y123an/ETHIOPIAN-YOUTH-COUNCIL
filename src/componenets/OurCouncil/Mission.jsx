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
    <div className="grid gap-10 font-light justify-center p-10">
      <div className="flex">
        <h1 className="text-3xl  font-light py-2 border-b-4 border-primary">
          Our Mission
        </h1>
      </div>
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
            className="flex flex-col w-[400px]"
          >
            <div className="flex text-justify  bg-primary/70 gap-10 p-2 rounded-b-md">
              <img src={opportunity} alt="opportunity" className="w-[30px]" />
              <h1 className="text-white font-light text-xl">Opportunity</h1>
            </div>
            <div className="bg-yellow-200/[0.2] p-5 shadow-md">
              <p className=" text-lg">
                To provide young people with opportunities for education, skills
                training, and leadership development,
              </p>
            </div>
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
            className="flex flex-col w-[400px]"
          >
            <div className="flex  bg-primary/70 gap-10 p-2 rounded-b-md">
              <img src={networking} alt="opportunity" className="w-[30px]" />
              <h1 className="text-white font-light text-xl">Networking</h1>
            </div>
            <div className="bg-yellow-200/[0.2] p-5 shadow-md">
              <p className=" text-lg text-justify">
                To support their development through advocacy, capacity
                building, and networking.
              </p>
            </div>
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
            className="flex flex-col w-[400px]"
          >
            <div className="flex  bg-primary/70 gap-10 p-2 rounded-b-md">
              <img src={opportunity} alt="opportunity" className="w-[30px]" />
              <h1 className="text-white font-light text-xl">Participation</h1>
            </div>
            <div className="bg-yellow-200/[0.2] p-5 shadow-md">
              <p className=" text-lg text-justify">
                To ensure the political participation and representation of the
                youth in the formulation and implementation of emerging
                policies, strategies, programs, and projects
              </p>
            </div>
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
            className="flex  flex-col w-[400px]"
          >
            <div className="flex  bg-primary/70 gap-10 p-2 rounded-b-md">
              <img src={role} alt="opportunity" className="w-[30px]" />
              <h1 className="text-white font-light text-xl">Role</h1>
            </div>
            <div className="bg-yellow-200/[0.2] p-5 shadow-md">
              <p className=" text-lg text-justify">
                To enable the youth to play a significant role in the
                formulation and implementation of policies, strategies,
                programs, and projects to ensure their political, economic, and
                social participation and benefits
              </p>
            </div>
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
            className="flex flex-col w-[400px]"
          >
            <div className="flex  bg-primary/70 gap-10 p-2 rounded-b-md">
              <img src={idea} alt="opportunity" className="w-[30px]" />
              <h1 className="text-white font-light text-xl">Idea</h1>
            </div>
            <div className="bg-yellow-200/[0.2] p-5 shadow-md">
              <p className=" text-lg text-justify">
                To work for the youth in promoting their ideas freely and
                according to the law, free from interference and influence
              </p>
            </div>
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
            className="flex  flex-col w-[400px]"
          >
            <div className="flex  bg-primary/70 gap-10 p-2 rounded-b-md">
              <img src={world} alt="opportunity" className="w-[30px]" />
              <h1 className="text-white font-light text-xl">Connection</h1>
            </div>
            <div className="bg-yellow-200/[0.2] p-5 shadow-md">
              <p className=" text-lg text-justify">
                To work in coordination with concerned entities and equivalent
                organizations to establish connections and mutual links with the
                youth at national, continental, and international levels
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Mission;

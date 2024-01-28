import React from "react";
import {
  empower,
  inclusive,
  innovation,
  partisan,
  transparncy,
  volunter,
} from "../../assets/icons";
import { motion } from "framer-motion";
const CoreValues = () => {
  return (
    <div className="bg-[#F2BC64]">
      <div className="grid gap-20 p-10 rounded-3xl">
        <div className="flex justify-center">
          <motion.h1
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
            className="text-3xl text-center p-2 border-b-4 border-primary"
          >
            Core Values
          </motion.h1>
        </div>
        <div className="flex gap-20 flex-col justify-center items-center text-center">
          <div className="flex gap-20 ">
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
              className="flex justify-center gap-2 flex-col items-center"
            >
              <img src={empower} alt="empower" className="w-[90px]" />
              <h2 className="text-xl font-bold ">Empowerment</h2>
              <p className="w-[250px] font-light">
                Enable young people to take charge of their futures and make a
                positive impact
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
              className="flex justify-center gap-2 flex-col items-center"
            >
              <img src={volunter} alt="volunter" className="w-[90px]" />
              <h2 className="text-xl font-bold ">Volunteerism</h2>
              <p className="w-[250px] font-light">
                Encourages its members to give their time and energy to support
                the mission of the organization.
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
              className="flex justify-center gap-2 flex-col text-black items-center"
            >
              <img src={inclusive} alt="volunter" className="w-[90px]" />
              <h2 className="text-xl font-bold ">Inclusiveness</h2>
              <p className="w-[250px]  font-light">
                Embrace and respect diversity, ensuring equal opportunities for
                all
              </p>
            </motion.div>
          </div>
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
            className="flex gap-20"
          >
            <div className="flex justify-center gap-2 flex-col items-center">
              <img src={partisan} alt="empower" className="w-[90px]" />
              <h2 className="text-xl font-bold ">Non-partisanship</h2>
              <p className="w-[250px] font-light">
                Operates on a non-partisan basis, and does not align itself with
                any political party or ideology.
              </p>
            </div>
            <div className="flex justify-center flex-col items-center">
              <img src={transparncy} alt="empower" className="w-[90px]" />
              <h2 className="text-xl font-bold ">Transparency</h2>
              <p className="w-[250px] font-light">
                Committed to transparency and accountability in all its
                activities and operations
              </p>
            </div>
            <div className="flex justify-center flex-col items-center">
              <img src={innovation} alt="empower" className="w-[90px]" />
              <h2 className="text-xl font-bold capitalize ">innovation</h2>
              <p className="w-[250px] font-light">
                Encourage creative thinking and innovation to drive positive
                change
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;

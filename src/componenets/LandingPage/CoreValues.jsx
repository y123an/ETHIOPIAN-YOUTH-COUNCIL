import React from "react";
import { empower, volunter } from "../../assets/icons";
import { motion } from "framer-motion";
const CoreValues = () => {
  return (
    <div className="core-values  text-white bg-cover p-20">
      <div className="grid gap-20 p-10 rounded-3xl">
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
          className="text-3xl text-center font-extrabold"
        >
          Core Values
        </motion.h1>
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
              <img src={empower} alt="empower" />
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
              <img src={volunter} alt="volunter" />
              <h2 className="text-xl font-bold ">Volunteerism</h2>
              <p className="w-[250px]">
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
              className="flex justify-center gap-2 flex-col items-center"
            >
              <img src={volunter} alt="volunter" />
              <h2 className="text-xl font-bold ">Inclusiveness</h2>
              <p className="w-[250px]">
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
              <img src={empower} alt="empower" />
              <h2 className="text-xl font-bold ">Non-partisanship</h2>
              <p className="w-[250px]">
                Operates on a non-partisan basis, and does not align itself with
                any political party or ideology.
              </p>
            </div>
            <div className="flex justify-center flex-col items-center">
              <img src={empower} alt="empower" />
              <h2 className="text-xl font-bold ">Transparency</h2>
              <p className="w-[250px]">
                Committed to transparency and accountability in all its
                activities and operations
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;

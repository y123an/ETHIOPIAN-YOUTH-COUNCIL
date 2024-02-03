import React from "react";
import { presidant } from "../../assets/images";
import { motion } from "framer-motion";

const LeaderShip = () => {
  const leaders = [
    {
      name: "Hon. Fuad Gena",
      position: "President",
    },
    {
      name: "Hon. Yusuf Muhammed",
      position: "Vice President",
    },
  ];

  return (
    <div className="py-10">
      <div className="flex">
        <h1 className="text-3xl font-light py-2 border-b-4 border-primary head-font">
          Leadership
        </h1>
      </div>
      <div className="flex gap-10">
        {leaders.map((leader, index) => (
          <motion.div
            key={index}
            initial={{ y: 100, opacity: 0 }}
            whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 * index }}
            className="flex flex-col justify-center items-center"
          >
            <img
              src={presidant}
              alt={leader.name}
              className="w-[400px] hover:-translate-y-2 duration-100 rounded-md"
            />
            <div className="bg-white p-5 shadow-xl shadow-black rounded-lg -mt-[20px] hover:translate-y-2 duration-200 z-20 w-[250px] font-light flex flex-col justify-center items-center rounded-md">
              <p className="text-lg font-bold">{leader.name}</p>
              <p>{leader.position}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LeaderShip;

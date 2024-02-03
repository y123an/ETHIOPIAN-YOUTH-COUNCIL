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
  const coreValues = [
    {
      icon: empower,
      title: "Empowerment",
      description:
        "Enable young people to take charge of their futures and make a positive impact",
    },
    {
      icon: volunter,
      title: "Volunteerism",
      description:
        "Encourages its members to give their time and energy to support the mission of the organization.",
    },
    {
      icon: inclusive,
      title: "Inclusiveness",
      description:
        "Embrace and respect diversity, ensuring equal opportunities for all",
    },
    {
      icon: partisan,
      title: "Non-partisanship",
      description:
        "Operates on a non-partisan basis, and does not align itself with any political party or ideology.",
    },
    {
      icon: transparncy,
      title: "Transparency",
      description:
        "Committed to transparency and accountability in all its activities and operations",
    },
    {
      icon: innovation,
      title: "Innovation",
      description:
        "Encourage creative thinking and innovation to drive positive change",
    },
  ];

  return (
    <div className="bg-white p-32 text-black">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl sm:text-5xl font-bold p-2 border-b-4 head-font border-primary inline-block"
          >
            Our Core Values
          </motion.h1>
        </div>
        <div className="grid grid-cols-1 justify-items-center i sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-secondary p-8 rounded-md text-center hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={value.icon}
                alt={value.title}
                className="w-16 h-16 mb-4 mx-auto"
              />
              <h2 className="text-xl font-bold mb-2">{value.title}</h2>
              <p className="text-sm text-gray-900">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;

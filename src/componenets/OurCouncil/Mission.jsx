import React from "react";
import { idea, networking, opportunity, role, world } from "../../assets/icons";
import { motion } from "framer-motion";

const Mission = () => {
  const missions = [
    {
      icon: opportunity,
      title: "Opportunity",
      description:
        "To provide young people with opportunities for education, skills training, and leadership development.",
    },
    {
      icon: networking,
      title: "Networking",
      description:
        "To support their development through advocacy, capacity building, and networking.",
    },
    {
      icon: opportunity,
      title: "Participation",
      description:
        "To ensure the political participation and representation of the youth in the formulation and implementation of emerging policies, strategies, programs, and projects.",
    },
    {
      icon: role,
      title: "Role",
      description:
        "To enable the youth to play a significant role in the formulation and implementation of policies, strategies, programs, and projects to ensure their political, economic, and social participation and benefits.",
    },
    {
      icon: idea,
      title: "Idea",
      description:
        "To work for the youth in promoting their ideas freely and according to the law, free from interference and influence.",
    },
    {
      icon: world,
      title: "Connection",
      description:
        "To work in coordination with concerned entities and equivalent organizations to establish connections and mutual links with the youth at national, continental, and international levels.",
    },
  ];

  return (
    <div className="grid gap-10 font-light justify-center p-10">
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-3xl font-light py-2 border-b-4 head-font border-primary">
          Our Mission
        </h1>
      </div>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-center">
        {missions.map((mission, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 * index, type: "spring", stiffness: 120 }}
            className="flex flex-col items-center p-6 border border-primary rounded-lg shadow-lg"
          >
            <img
              src={mission.icon}
              alt={mission.title}
              className="w-16 h-16 mb-4"
            />
            <h1 className="text-xl font-semibold mb-2">{mission.title}</h1>
            <p className="text-gray-700 text-sm">{mission.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Mission;

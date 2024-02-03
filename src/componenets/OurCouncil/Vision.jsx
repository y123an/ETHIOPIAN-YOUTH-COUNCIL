import { ladder, opportunity, participation, voice } from "../../assets/icons";
import { motion } from "framer-motion";

const Vision = () => {
  const goals = [
    {
      icon: ladder,
      title: "Empowering Young People",
      description:
        "The Ethiopian Youth Council seeks to empower young people by providing them with the tools, resources, and opportunities they need to reach their full potential. This includes promoting education, skills development, and entrepreneurship among young people.",
    },
    {
      icon: participation,
      title: "Promoting Youth Engagement",
      description:
        "The Ethiopian Youth Council aims to promote the engagement of young people in the social, economic, and political development of Ethiopia. This includes advocating for the rights and interests of young people and supporting their participation in decision-making processes.",
    },
    {
      icon: voice,
      title: "Fostering Leadership",
      description:
        "The Ethiopian Youth Council aims to foster the development of young leaders who can contribute to the development of Ethiopia. This includes providing leadership training, mentorship, and support to young people.",
    },
    {
      icon: opportunity,
      title: "Building Networks",
      description:
        "The Ethiopian Youth Council aims to foster the development of young leaders who can contribute to the development of Ethiopia. This includes providing leadership training, mentorship, and support to young people.",
    },
  ];

  return (
    <div className="grid gap-10 justify-center font-light p-10">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-3xl head-font font-light p-2 border-b-4 border-primary text-gray-500">
          Our Vision
        </h1>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-blue-500/[0.8] rounded-md shadow-lg p-8 w-full md:w-[700px] text-white  text-lg font-bold text-center"
        >
          <p className="text-lg">
            The council envisions building a youth-centered society that values
            voices, respects rights, ensures benefits, enhances capacity, and
            fosters unity among diverse backgrounds.
          </p>
        </motion.div>
      </div>
      <div className="flex">
        <h1 className="text-3xl head-font font-light p-2 border-b-4 border-primary text-black">
          Our Goals
        </h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10"
      >
        {goals.map((goal, index) => (
          <motion.div
            key={index}
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.2 + index * 0.2,
            }}
            className="flex flex-col justify-center items-center"
          >
            <div className="flex w-full text-justify bg-primary/[0.4] shadow-lg text-black gap-10 p-4 rounded-md">
              <img src={goal.icon} alt="goal icon" className="w-[30px]" />
              <h1 className="font-light text-xl">{goal.title}</h1>
            </div>
            <div className="bg-white/[0.4] p-4 shadow-lg text-gray-500 rounded-md">
              <p className="text-lg text-justify">{goal.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Vision;

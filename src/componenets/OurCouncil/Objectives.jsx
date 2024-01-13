import React from "react";
import { objectives } from "../../assets/images";
import { motion } from "framer-motion";

const Objectives = () => {
  return (
    <div className="flex items-center text-justify justify-center p-10 gap-20">
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
      >
        <img src={objectives} alt="objectives" className="" />
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
        className="w-[700px] grid gap-10 bg-[#FFFDE2] py-10 px-5 rounded-lg shadow-2xl"
      >
        <h1 className="text-3xl font-extrabold ">Objectives</h1>
        <div className="grid gap-10">
          <p>
            The objective of the Ethiopian Youth Council is to promote the
            development and empowerment of young people in Ethiopia by providing
            them with opportunities to engage in volunteerism, leadership,
            digitalization, and civic engagement activities that address the
            social, economic, and environmental challenges facing their
            communities. The organization's overall goal is to create a more
            just, equitable, and sustainable society in Ethiopia, where young
            people have access to the resources and opportunities, they need to
            realize their full potential and contribute to the development of
            their communities and country.
          </p>
          <p>
            To achieve this objective, the Ethiopian Youth Council engages in a
            variety of activities and initiatives that focus on youth
            development and empowerment, including youth-led community service
            projects, peer education and mentoring programs, advocacy and policy
            development initiatives, and disaster relief and emergency response
            efforts. The council also works to build partnerships and
            collaborations with other organizations and stakeholders, both
            locally and internationally, to leverage resources and promote youth
            development and empowerment on a larger scale.
          </p>
          <p>
            The Council has a strong commitment to promoting gender equality and
            social inclusion. The council recognizes that young women, young
            people with disabilities, IDPs, and marginalized groups face unique
            challenges and barriers including limited access to education,
            economic opportunities, and political participation, and works to
            address these challenges through targeted programs and advocacy
            efforts, and therefore seeks to create a safe and inclusive space
            where all young people can engage and contribute. It believes that
            the youth have a vital role to play in promoting peace, development,
            and democracy in Ethiopia, and therefore seeks to amplify their
            voices and promote their interests.
          </p>
          <p>
            In addition, the Ethiopian Youth Council is actively involved in
            advocacy and policy development. The organization works closely with
            government agencies, civil society organizations, and other
            stakeholders to advocate for policies that promote the interests and
            well-being of young people. The council also conducts research and
            analysis to inform policy development and decision-making
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Objectives;

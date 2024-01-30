import { history } from "../../assets/images";
import { motion } from "framer-motion";

const History = () => {
  return (
    <div className="flex  gap-20 text-justify justify-center p-10">
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
        className="w-[700px] grid gap-10"
      >
        <div className="flex">
          <h1 className="font-light text-3xl py-3 border-b-4 head-font border-primary">
            Introduction
          </h1>
        </div>
        <div className="grid gap-10">
          <p>
            The Ethiopian Youth Council is a statutory organization established
            according to the National Youth Policy of Ethiopia on April 02,
            2023, Dedicated to empowering Ethiopian youth and promoting their
            active participation in the country's social, economic, and
            political development
          </p>
          <p>
            EYC is the official representative And voice of more than 40.1
            million young people of Ethiopia, Aims to promote Active youth
            participation and engagement in decision-making processes, foster a
            culture of volunteerism, holistic youth empowerment,inclusion of the
            youth in governance, national and international affairs and ensures
            programs are youth-centered and driven.
          </p>
          <p>
            The organization recognizes the important role that young people can
            play in creating positive social change and promoting sustainable
            development, and it provides opportunities for young people to
            engage in volunteer activities that address the social, economic,
            and environmental challenges facing their communities.
          </p>
          <p>
            The self-governing council operates with a mandate to voice for the
            young people, mobilize, coordinate, and supervise youth and
            youth-led or youth focused organizations, design and implement
            national youth programs and policies, protect the rights, ensure
            benefits, and enhance the capacity of the young people and advise
            the government on youth matters.
          </p>
          <p>
            The Council is a member of the Pan African Youth Union (PAYU). This
            partnership enables the council to connect with other Youth Councils
            and Youth Organizations across Africa and to participate in regional
            and international initiatives aimed at promoting youth development
            and empowerment.
          </p>
          <p>
            Overall, the Ethiopian Youth Council is a dynamic and impactful
            institution that is making a significant contribution to youth
            development and empowerment in Ethiopia. Through its various
            programs and initiatives, the council empowers young people to
            become active and engaged citizens who can drive positive change in
            their communities and beyond and build a more inclusive and
            prosperous society.
          </p>
        </div>
      </motion.div>
      {/* <motion.div
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
        className="flex justify-center items-center"
      >
        <img src={history} alt="" className="w-[600px]" />
      </motion.div> */}
    </div>
  );
};

export default History;

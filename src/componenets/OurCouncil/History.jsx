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
        <h1 className="text-primary  font-extrabold text-3xl">History </h1>
        <div className="grid gap-10">
          <p>
            The Ethiopian Youth Council (EYC) is a statutory organization
            established according to the National Youth Policy of Ethiopia
            (2004), dedicated to empowering Ethiopian youth and promoting their
            active participation in the country's social, economic, and
            political development. Established on April 02, 2023, and registered
            by Authority for Civil Society Organizations with registry number
            6884 on May 29, 2023. It is the official representative voice of
            more than 41 million young people in Ethiopia. It aims to promote
            youth participation in decision-making processes, foster a culture
            of volunteerism, provide opportunities for personal and professional
            development, and inclusion of the youth in governance and national
            affairs, and ensures programs are youth-centered and driven.
          </p>
          <p>
            The self-governing Council operates with a mandate to voice for the
            young people, mobilize, coordinate, and supervise youth and youth
            organizations, design and implement national youth programs and
            policies, protect the rights, ensure benefits, and enhance the
            capacity of the young people and advise the government on youth
            matters
          </p>
          <p>
            The Council is a member of the Pan African Youth Union (PAYU). This
            partnership enables the council to connect with other Youth Councils
            and Youth Organizations across Africa and to participate in regional
            and international initiatives aimed at promoting youth development
            and empowerment.
          </p>
          <p>
            As part of its commitment to transparency and accountability, the
            Ethiopian Youth Council regularly publishes reports and updates on
            its activities and achievements. The organization also engages with
            its stakeholders through various channels, including social media,
            community events, and public forums.
          </p>
          <p>
            The organization recognizes the important role that young people can
            play in creating positive social change and promoting sustainable
            development, and it provides opportunities for young people to
            engage in volunteer activities that address the social, economic,
            and environmental challenges facing their communities.
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
        className="flex justify-center items-center"
      >
        <img src={history} alt="" className="w-[600px]" />
      </motion.div>
    </div>
  );
};

export default History;

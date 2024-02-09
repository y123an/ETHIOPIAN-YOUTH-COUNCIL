import { FaCalendarAlt } from "react-icons/fa";
import Footer from "../componenets/LandingPage/Footer";
import Navbar from "../componenets/LandingPage/Navbar";
import OurCouncilImage from "../componenets/OurCouncil/OurCouncilImage";
import { heroImage1 } from "../assets/images";

const WhatWeDo = () => {
  const programs = [
    {
      name: "Peace Education and Conflict Resolution",
      description:
        "Develop and implement peace education programs in schools and communities to promote conflict resolution skills, tolerance, and peaceful coexistence. Organize workshops, seminars, and training sessions on non-violent communication, mediation, and negotiation techniques. Establish youth-led peace clubs or networks that engage young people in promoting peace and resolving conflicts within their communities.",
      img: heroImage1,
    },
    {
      name: "Diplomatic Skill Development",
      description:
        "Conduct workshops and training sessions on diplomatic skills such as negotiation, public speaking, intercultural communication, and conflict resolution. Offer mentorship programs where experienced diplomats and experts guide and support young individuals interested in diplomacy. Provide resources and guidance on career paths in diplomacy and international organizations.",
      img: heroImage1,
    },
    {
      name: "Health and Well-being",
      description:
        "Promote awareness of health issues relevant to youth, including sexual and reproductive health, mental health, and substance abuse prevention. Advocate for improved access to healthcare services, including reproductive health clinics, counseling centers, and youth-friendly health facilities. Organize health campaigns, workshops, and awareness programs to educate youth on healthy lifestyles and disease prevention.",
      img: heroImage1,
    },
    {
      name: "Policy Advocacy and Youth Representation",
      description:
        "Advocate for youth-friendly policies and legislation in areas such as education, employment, health, and social welfare. Collaborate with government agencies, civil society organizations, and other stakeholders to ensure youth voices are heard in policy-making processes. Engage in dialogues and consultations with decision-makers to address the specific needs and concerns of Ethiopian youth.",
      img: heroImage1,
    },
    {
      name: "Community Service and Volunteerism Program",
      description:
        "Encourage youth to engage in community service activities to address local challenges and make a positive impact. Collaborate with local organizations to identify community needs and organize volunteer projects. Recognize and reward outstanding youth volunteers for their contributions to society.",
      img: heroImage1,
    },
    {
      name: "Education and Career Development Program",
      description:
        "Organize career fairs and job placement events to connect young job seekers with potential employers. Conduct workshops on resume writing, interview skills, and professional development. Establish scholarship programs or provide financial assistance for deserving youth to pursue higher education.",
      img: heroImage1,
    },
    {
      name: "Entrepreneurship and Innovation Program",
      description:
        "Provide training and resources on entrepreneurship, business planning, and financial literacy. Organize business idea competitions or startup challenges to encourage innovative thinking and creativity. Offer mentorship and incubation support to promising young entrepreneurs to help them develop and launch their ventures.",
      img: heroImage1,
    },
    {
      name: "Leadership Development Program",
      description:
        "Conduct workshops and training sessions on leadership skills, communication, and decision-making for young individuals. Organize mentoring programs where experienced leaders and professionals guide and inspire young participants. Offer networking opportunities with established leaders from different sectors to foster connections and learning.",
      img: heroImage1,
    },
  ];
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div>
        <OurCouncilImage
          title={"Our Programs"}
          description={"the places where you can find us"}
        />
      </div>
      <div className="p-5">
        <div className="flex justify-center">
          <h1 className="text-4xl text-primary font-bold">Our Programs</h1>
        </div>
        <div className="flex w-full flex-col md:flex-row md:items-start items-center justify-center gap-10">
          <div className="grid grid-cols-3 gap-3 py-20 px-10">
            {/* Content Section */}
            {programs.map((program, index) => (
              <div
                key={index}
                className="w-[400px] flex flex-col p-2 rounded-lg text-justify overflow-hidden"
              >
                <div className="px-4 w-full grid gap-3 shadow-lg p-3 rounded-lg -mt-10 z-20 bg-white">
                  <div className="relative">
                    <img
                      src={heroImage1}
                      className="object-cover rounded-lg shadow-lg"
                    />
                    {/* Overlay for transition effect */}
                    <div
                      className={`absolute inset-0 bg-indigo-500 opacity-0 transition-opacity`}
                    ></div>
                  </div>
                  <div className="flex justify-center">
                    <h1 className="text-2xl text-primary">{program.name}</h1>
                  </div>
                  <p className="font-bold text-gray-800">
                    {program.description}
                  </p>

                  {/* Read More Section */}
                  <div
                    className={`flex justify-end opacity-0 transform translate-y-2 transition-opacity transition-transform`}
                  >
                    <button className="p-2 capitalize text-primary hover:underline">
                      read more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default WhatWeDo;

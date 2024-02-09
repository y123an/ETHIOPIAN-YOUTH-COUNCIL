import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex text-justify flex-col items-center text-center p-10 gap-5 bg-gray-100">
      <div className="flex">
        <h1 className="text-3xl p-2 border-b-4 head-font capitalize border-primary">
          About Us
        </h1>
      </div>
      <div className="flex flex-col gap-10 max-w-3xl">
        <p>
          The Ethiopian Youth Council is a statutory organization established
          according to the National Youth Policy of Ethiopia on April 02, 2023.
          We are dedicated to empowering Ethiopian youth and promoting their
          active participation in the country's social, economic, and political
          development.
        </p>
        <p>
          EYC is the official representative and voice of more than 40.1 million
          young people of Ethiopia. Our mission is to promote active youth
          participation and engagement in decision-making processes, foster a
          culture of volunteerism, holistic youth empowerment, inclusion of the
          youth in governance, national and international affairs. We ensure our
          programs are youth-centered and driven.
        </p>
        <div className="flex justify-center">
          <Link
            to={"/our-council/history"}
            className="py-2 px-6 bg-primary text-white font-semibold rounded-full hover:bg-white hover:text-primary border-2 border-primary transition duration-300 ease-in-out"
          >
            Read More
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center mt-9">
        <div className="w-full max-w-3xl h-[2px] rounded-md bg-[#F2BC64]"></div>
      </div>
    </div>
  );
};

export default About;

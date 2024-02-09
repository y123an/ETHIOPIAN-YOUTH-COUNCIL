import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const OurCouncilNavigation = () => {
  const { pathname } = useLocation();

  const isActiveLink = (path) => pathname === path;

  return (
    <div className="shadow-lg space-y-4 w-[250px] md:w-[300px] h-auto sticky top-0 pb-4 rounded-b-lg">
      <div className="shadow-md gap-2 flex items-center p-4">
        <IoMenuSharp size={25} />
        <h1 className="text-2xl font-regular head-font text-primary">
          OUR COUNCIL
        </h1>
      </div>
      <div className="flex flex-col font-light">
        <Link
          to="/our-council/history"
          className={`px-4 py-2 flex items-center gap-2 ${
            isActiveLink("/our-council/history")
              ? "text-primary font-bold"
              : "text-gray-700"
          }`}
        >
          <FaAngleDoubleRight size={20} />
          History
        </Link>
        <Link
          to="/our-council/vision"
          className={`px-4 py-2 flex items-center gap-2 ${
            isActiveLink("/our-council/vision")
              ? "text-primary font-bold"
              : "text-gray-700"
          }`}
        >
          <FaAngleDoubleRight size={20} />
          Our Vision
        </Link>
        <Link
          to="/our-council/mission"
          className={`px-4 py-2 flex items-center gap-2 ${
            isActiveLink("/our-council/mission")
              ? "text-primary font-bold"
              : "text-gray-700"
          }`}
        >
          <FaAngleDoubleRight size={20} />
          Our Mission
        </Link>
        <Link
          to="/our-council/leadership"
          className={`px-4 py-2 flex items-center gap-2 ${
            isActiveLink("/our-council/leadership")
              ? "text-primary font-bold"
              : "text-gray-700"
          }`}
        >
          <FaAngleDoubleRight size={20} />
          Leadership
        </Link>
      </div>
    </div>
  );
};

export default OurCouncilNavigation;

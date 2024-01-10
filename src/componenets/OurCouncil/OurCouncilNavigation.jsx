import React from "react";
import { Link, useLocation } from "react-router-dom";

const OurCouncilNavigation = () => {
  const { pathname } = useLocation();
  return (
    <div className=" text-white  w-[250px] rounded-md pb-4 bg-primary">
      <h1 className="text-2xl font-extrabold p-6">OUR COUNCIL</h1>
      <div className="flex flex-col">
        <Link
          to={"/our-council/history"}
          className={`px-5 py-3 ${
            pathname === "/our-council/history" && "bg-[#b96b11]"
          } `}
        >
          History
        </Link>
        <Link
          to={"/our-council/mission"}
          className={`px-5 py-3 ${
            pathname === "/our-council/mission" && "bg-[#b96b11]"
          } `}
        >
          Our Mission
        </Link>
        <Link
          to={"/our-council/vision"}
          className={`px-5 py-3 ${
            pathname === "/our-council/vision" && "bg-[#b96b11]"
          } `}
        >
          Our Vision
        </Link>
      </div>
    </div>
  );
};

export default OurCouncilNavigation;

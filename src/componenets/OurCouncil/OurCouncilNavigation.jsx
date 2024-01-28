import React from "react";
import { Link, useLocation } from "react-router-dom";

const OurCouncilNavigation = () => {
  const { pathname } = useLocation();
  return (
    <div className=" text-white  w-[250px] h-[400px] sticky top-0 pb-4 rounded-b-lg bg-primary/90">
      <h1 className="text-2xl font-regular p-6">OUR COUNCIL</h1>
      <div className="flex flex-col font-light">
        <Link
          to={"/our-council/history"}
          className={`px-5 py-3 ${
            pathname === "/our-council/history" && "bg-primary"
          } `}
        >
          History
        </Link>
        <Link
          to={"/our-council/mission"}
          className={`px-5 py-3 ${
            pathname === "/our-council/mission" && "bg-primary"
          } `}
        >
          Our Mission
        </Link>
        <Link
          to={"/our-council/vision"}
          className={`px-5 py-3 ${
            pathname === "/our-council/vision" && "bg-primary"
          } `}
        >
          Our Vision
        </Link>
        <Link
          to={"/our-council/leadership"}
          className={`px-5 py-3 ${
            pathname === "/our-council/leadership" && "bg-primary"
          } `}
        >
          LeaderShip
        </Link>
      </div>
    </div>
  );
};

export default OurCouncilNavigation;

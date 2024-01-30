import { FaAngleDoubleRight } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const OurCouncilNavigation = () => {
  const { pathname } = useLocation();
  return (
    <div className="shadow-lg space-y-4 w-[250px] h-[300px] sticky top-0 pb-4 rounded-b-lg">
      <div className="shadow-md gap-2 flex items-center p-4">
        <IoMenuSharp size={25} />
        <h1 className="text-2xl font-regular head-font text-primary">
          OUR COUNCIL
        </h1>
      </div>
      <div className="flex flex-col font-light">
        <Link
          to={"/our-council/history"}
          className={`px-5 py-1 flex items-center gap-2 ${
            pathname === "/our-council/history" && "text-primary"
          } `}
        >
          <FaAngleDoubleRight />
          History
        </Link>
        <Link
          to={"/our-council/vision"}
          className={`px-5 py-1 flex items-center gap-2 ${
            pathname === "/our-council/vision" && "text-primary"
          } `}
        >
          <FaAngleDoubleRight />
          Our Vision
        </Link>
        <Link
          to={"/our-council/leadership"}
          className={`px-5 py-1 flex items-center gap-2 ${
            pathname === "/our-council/leadership" && "text-primary"
          } `}
        >
          <FaAngleDoubleRight />
          LeaderShip
        </Link>
        <Link
          to={"/our-council/mission"}
          className={`px-5 py-1 flex items-center gap-2 ${
            pathname === "/our-council/mission" && "text-primary"
          } `}
        >
          <FaAngleDoubleRight />
          Our Mission
        </Link>
      </div>
    </div>
  );
};

export default OurCouncilNavigation;

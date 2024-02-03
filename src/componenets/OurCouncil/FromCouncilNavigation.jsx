import { FaAngleDoubleRight } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const FromCouncilNavigation = () => {
  const { pathname } = useLocation();

  return (
    <div className="shadow-lg space-y-4 w-[250px] md:w-[300px] h-auto sticky top-0 pb-4 rounded-b-lg">
      <div className="shadow-md gap-2 flex items-center p-4">
        <IoMenuSharp size={25} />
        <h1 className="text-2xl font-regular  head-font text-primary">
          From Council
        </h1>
      </div>
      <div className="flex flex-col font-light">
        <Link
          to={"/organization"}
          className={`px-4 py-2 flex items-center gap-2 ${
            pathname === "/organization"
              ? "text-primary font-bold"
              : "text-gray-700"
          } `}
        >
          <FaAngleDoubleRight />
          Organizations
        </Link>
        <Link
          to={"/opportunity"}
          className={`px-4 py-2 flex items-center gap-2 ${
            pathname === "/opportunity"
              ? "text-primary font-bold"
              : "text-gray-700"
          } `}
        >
          <FaAngleDoubleRight />
          Opportunities
        </Link>
        <Link
          to={"/resources"}
          className={`px-4 py-2 flex items-center gap-2 ${
            pathname === "/resources"
              ? "text-primary font-bold"
              : "text-gray-700"
          } `}
        >
          <FaAngleDoubleRight />
          Resources
        </Link>
      </div>
    </div>
  );
};

export default FromCouncilNavigation;

import { FaAngleDoubleRight } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const FromCouncilNavigation = () => {
  const { pathname } = useLocation();

  return (
    <div className="shadow-lg space-y-4 w-[270px] h-[300px] sticky top-0 pb-4 rounded-b-lg">
      <div className="shadow-md gap-2 flex items-center p-3">
        <IoMenuSharp size={25} />
        <h1 className="text-2xl font-regular  head-font text-primary">
          From Council
        </h1>
      </div>
      <div className="flex flex-col font-light">
        <Link
          to={"/organization"}
          className={`px-5 py-1 flex items-center gap-2 ${
            pathname === "/news" && "text-primary"
          } `}
        >
          <FaAngleDoubleRight />
          Organizations
        </Link>
        <Link
          to={"/opportunity"}
          className={`px-5 py-1 flex items-center gap-2 ${
            pathname === "/publication" && "text-primary"
          } `}
        >
          <FaAngleDoubleRight />
          Opportunities
        </Link>
        <Link
          to={"/resources"}
          className={`px-5 py-1 flex items-center gap-2 ${
            pathname === "/resources" && "text-primary"
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

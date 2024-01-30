import { FaAngleDoubleRight } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const NewsNavigation = () => {
  const { pathname } = useLocation();
  return (
    <div className="shadow-lg space-y-4 w-[270px] h-[300px] sticky top-0 pb-4 rounded-b-lg">
      <div className="shadow-md gap-2 flex items-center p-3">
        <IoMenuSharp size={25} />
        <h1 className="text-2xl font-regular  head-font text-primary">
          News And Update
        </h1>
      </div>
      <div className="flex flex-col font-light">
        <Link
          to={"/news"}
          className={`px-5 py-1 flex items-center gap-2 ${
            pathname === "/news" && "text-primary"
          } `}
        >
          <FaAngleDoubleRight />
          News And Update
        </Link>
        <Link
          to={"/publication"}
          className={`px-5 py-1 flex items-center gap-2 ${
            pathname === "/publication" && "text-primary"
          } `}
        >
          <FaAngleDoubleRight />
          Publication
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
        <Link
          to={"/messages"}
          className={`px-5 py-1 flex items-center gap-2 ${
            pathname === "/messages" && "text-primary"
          } `}
        >
          <FaAngleDoubleRight />
          Messages
        </Link>
      </div>
    </div>
  );
};

export default NewsNavigation;

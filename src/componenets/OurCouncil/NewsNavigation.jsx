import React from "react";
import { Link, useLocation } from "react-router-dom";

const NewsNavigation = () => {
  const { pathname } = useLocation();
  return (
    <div className=" text-white  w-[250px] h-[400px] sticky top-0 pb-4 rounded-b-lg bg-primary/90">
      <h1 className="text-2xl font-regular p-6">News And Media</h1>
      <div className="flex flex-col font-light">
        <Link
          to={"/news"}
          className={`px-5 py-3 ${pathname === "/news" && "bg-primary"} `}
        >
          News And Update
        </Link>
        <Link
          to={"/publication"}
          className={`px-5 py-3 ${
            pathname === "/publication" && "bg-primary"
          } `}
        >
          Publication
        </Link>
        <Link
          to={"/resources"}
          className={`px-5 py-3 ${pathname === "/resources" && "bg-primary"} `}
        >
          Resources
        </Link>
        <Link
          to={"/messages"}
          className={`px-5 py-3 ${pathname === "/messages" && "bg-primary"} `}
        >
          Messages
        </Link>
      </div>
    </div>
  );
};

export default NewsNavigation;

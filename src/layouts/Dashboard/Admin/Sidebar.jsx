import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaBuilding,
  FaBriefcase,
  FaBook,
  FaNewspaper,
} from "react-icons/fa";
import { logo } from "../../../assets/images";
import { Link, useLocation } from "react-router-dom";
// import TopNavbar from "./TopNavbar";

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen  text-black">
      <div className="w-full md:w-64 bg-[#f3f3f3] py-4 shadow-2xl shadow-blue-200">
        <div className="text-center mb-4 border-b-4 p-2">
          <h1 className="text-2xl hidden md:block">Dashboard</h1>
          <img src={logo} alt="Logo" className="w-20  rounded-full mx-auto" />
          <div className="hidden md:block">
            <h1 className="text-primary font-bold">የኢትዮጲያ ወጣቶች ምክር ቤት</h1>
            <p className="text-[#DFB683] font-bold">Ethiopian Youth Council</p>
          </div>
        </div>
        <div className="flex flex-col divide-y-2 ">
          <SidebarItem
            icon={<FaHome />}
            path={"/admin/dashboard"}
            text="Overview"
          />
          <SidebarItem icon={<FaUser />} path={"/admin/youth"} text="Youth" />
          <SidebarItem
            icon={<FaBuilding />}
            path={"/admin/organization"}
            text="Organizations"
          />
          <SidebarItem
            icon={<FaBriefcase />}
            path={"/admin/resources"}
            text="Resources"
          />
          <SidebarItem
            icon={<FaBook />}
            path={"/admin/publication"}
            text="Publications"
          />
          <SidebarItem
            icon={<FaNewspaper />}
            path={"/admin/news"}
            text="News"
          />
          <SidebarItem
            icon={<FaBuilding />}
            path={"/admin/opportunity"}
            text="Opportunities"
          />
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, path }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={path}
      className={`flex items-center p-2 cursor-pointer hover:bg-gray-300 ${
        path == pathname && "bg-black/50 text-white"
      }`}
    >
      <div className="text-xl">{icon}</div>
      <div className="hidden md:block ml-2">{text}</div>
    </Link>
  );
};

export default Sidebar;

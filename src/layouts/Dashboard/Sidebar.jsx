import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaBuilding,
  FaBriefcase,
  FaBook,
} from "react-icons/fa";
import { logo } from "../../assets/images";
import { Link } from "react-router-dom";
// import TopNavbar from "./TopNavbar";

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-800 text-white">
      <div className="w-full md:w-64 bg-gray-700 p-4">
        <div className="text-center mb-4">
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 rounded-full mx-auto"
          />
        </div>
        <div className="flex flex-col ">
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
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, path }) => {
  return (
    <Link
      to={path}
      className="flex items-center p-2 cursor-pointer hover:bg-gray-600"
    >
      <div className="text-xl">{icon}</div>
      <div className="hidden md:block ml-2">{text}</div>
    </Link>
  );
};

export default Sidebar;

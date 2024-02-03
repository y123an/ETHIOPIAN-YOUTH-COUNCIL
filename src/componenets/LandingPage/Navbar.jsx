import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { motion } from "framer-motion";
import { logo } from "../../assets/images";

const Navbar = () => {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="flex flex-col lg:flex-row justify-around items-center z-40 bg-[#ECF0F1] w-full text-black">
      <div className="flex items-center gap-4 lg:gap-8 p-4">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} alt="" className="w-[70px]" />
          <div>
            <h1 className="text-primary font-bold">የኢትዮጲያ ወጣቶች ምክር ቤት</h1>
            <p className="text-[#DFB683] font-bold">Ethiopian Youth Council</p>
          </div>
        </Link>

        <div className="lg:hidden cursor-pointer" onClick={toggleMobileMenu}>
          <FaBars size={24} />
        </div>
      </div>

      <div
        className={`lg:flex flex-col lg:flex-row gap-4 z-40 bg-[#ECF0F1] w-full md:w-auto lg:gap-8 ${
          mobileMenuOpen ? "block" : "hidden"
        } p-4`}
      >
        <NavLink to={"/"} label="Home" pathname={pathname} />
        <DropdownNavLink
          label="Our Council"
          sublinks={[
            { to: "/our-council/history", label: "History" },
            { to: "/our-council/vision", label: "Our Vision" },
            { to: "/our-council/leadership", label: "Leadership" },
            { to: "/our-council/mission", label: "Our Mission" },
          ]}
          pathname={pathname}
        />
        <DropdownNavLink
          label="From Council"
          sublinks={[
            { to: "/organization", label: "Organizations" },
            { to: "/opportunity", label: "Opportunities" },
            { to: "/resources", label: "Resources" },
          ]}
          pathname={pathname}
        />
        <NavLink
          to={"/where-we-are"}
          label="Where We Are"
          pathname={pathname}
        />
        <NavLink to={"/what-we-do"} label="What We Do" pathname={pathname} />
        <DropdownNavLink
          label="News And Media"
          sublinks={[
            { to: "/news", label: "News" },
            { to: "/publication", label: "Publication" },
            { to: "/resources", label: "Resources" },
            { to: "/messages", label: "Messages" },
          ]}
          pathname={pathname}
        />
        <NavLink to={"/contact"} label="Contact Us" pathname={pathname} />
      </div>
    </nav>
  );
};

const NavLink = ({ to, label, pathname }) => (
  <motion.button
    whileHover={{
      scale: 1.2,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
    }}
    className={`${pathname === to && "border-b-4 border-primary"}`}
  >
    <Link to={to}>{label}</Link>
  </motion.button>
);

const DropdownNavLink = ({ label, sublinks, pathname }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        whileHover={{
          scale: 1.2,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        className={`ps-1 flex items-center`}
        // onMouseEnter={() => setIsDropdownOpen(true)}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        // onMouseLeave={() => setIsDropdownOpen(false)}
      >
        {label}
        <MdArrowDropDown size={20} />
      </motion.button>

      {isDropdownOpen && (
        <div
          className="relative md:absolute  flex flex-col  bg-[#ECF0F1] z-50 top-full font-light left-0 p-2 w-[150px] gap-2"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          {sublinks.map(({ to, label }) => (
            <NavLink key={to} to={to} label={label} pathname={pathname} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

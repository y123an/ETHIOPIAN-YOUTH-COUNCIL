import React from "react";
import { logo } from "../../assets/images";
import { Link, useLocation } from "react-router-dom";
import { color, motion } from "framer-motion";
const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex justify-around items-center h-[250px]">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex gap-14 items-center rounded-md text-white ">
        <motion.button
          whileHover={{
            scale: 1.2,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          className={`${pathname === "/" && "bg-primary"} p-2`}
        >
          <Link to={"/"}>Home</Link>
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.2,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          className={`${
            pathname === "/our-council/history"
              ? "bg-primary"
              : pathname === "/our-council/mission"
              ? "bg-primary"
              : pathname === "/our-council/vision" && "bg-primary"
          } p-2`}
        >
          <Link to={"/our-council/history"}>Our Council</Link>
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.2,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          className="p-2"
        >
          <Link>Our Team</Link>
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.2,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          className="p-2"
        >
          <p>Contact Us</p>
        </motion.button>
      </div>
      <div>
        <motion.button
          whileHover={{
            scale: 1.2,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          className="bg-primary text-white px-3 py-2 rounded-lg"
        >
          Become a Member
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;

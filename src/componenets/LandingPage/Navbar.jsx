import React from "react";
import { logo } from "../../assets/images";
import { Link, useLocation } from "react-router-dom";
import { color, motion } from "framer-motion";
const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex justify-around items-center h-[150px] ">
      <div className="flex w-full items-center bg-[rgba(25,117,190,0.5)] p-1 justify-around">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-14 items-center  rounded-md text-white ">
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
            className={`${pathname == "/team" && "bg-primary"} p-2`}
          >
            <Link to={"/team"}>Our Team</Link>
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className={`${pathname == "/contact" && "bg-primary"} p-2`}
          >
            <Link to={"/contact"}>Contact Us</Link>
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="p-2"
          >
            <p>From Coucil</p>
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
    </div>
  );
};

export default Navbar;

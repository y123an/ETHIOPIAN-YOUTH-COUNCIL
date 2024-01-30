import React, { useState } from "react";
import { logo } from "../../assets/images";
import { Link, useLocation } from "react-router-dom";
import { color, motion } from "framer-motion";
import { TiArrowRightOutline } from "react-icons/ti";
import ArrowDownIcon from "@heroicons/react/24/solid/ArrowDownIcon";
import { FaArrowCircleDown, FaArrowDown } from "react-icons/fa";
const Navbar = () => {
  const { pathname } = useLocation();
  const [seeNews, setSeeNews] = useState("hidden");
  const [seeOurCoucil, setSeeOurCoucil] = useState("hidden");
  return (
    <div className="flex justify-around font-light items-center bg-[#ECF0F1]   w-full text-black">
      <div className="flex w-full items-center  justify-around z-30 ">
        <Link to={"/"} className="flex items-center gap">
          <img src={logo} alt="logo" className="w-[100px]" />
          <div className=" text-primary">
            <h1>የኢትዮጲያ ወጣቶች ምክር ቤት</h1>
            <h1 className="uppercase font-bold head-font">
              Ethiopian Youth Council
            </h1>
          </div>
        </Link>
        <div className="flex gap-10 text-[14px] border-s-2 border-black  shadow-lg p-4 justify-center items-center">
          <motion.button
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className={`${pathname === "/" && "border-b-4 border-primary"} `}
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
                ? "border-b-4 border-primary"
                : pathname === "/our-council/mission"
                ? "border-b-4 border-primary"
                : pathname === "/our-council/vision" &&
                  "border-b-4 border-primary"
            } ps-1`}
            onMouseEnter={() => setSeeOurCoucil("flex")}
            onMouseLeave={() => {
              setSeeOurCoucil("hidden");
            }}
          >
            <Link
              to={"/our-council/history"}
              className="flex items-center gap-2"
            >
              Our Council
              <FaArrowDown size={13} />
            </Link>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`absolute bg-[#ECF0F1]  top-[23px] ${seeOurCoucil}`}
              onMouseEnter={() => setSeeOurCoucil("flex")}
            >
              <div className="flex flex-col w-[120px] justify-center items-start px-4 py-6">
                <div className="text-black flex items-center gap-2">
                  <Link to={"/our-council/history"}>History</Link>
                </div>
                <div className="text-black flex items-center gap-2">
                  <Link to={"/our-council/vision"}>Our Vision</Link>
                </div>
                <div className="text-black flex items-center gap-2">
                  <Link to={"/our-council/leadership"}>Leadership</Link>
                </div>
                <div className="text-black flex items-center gap-2">
                  <Link to={"/our-council/mission"}>Our Mission</Link>
                </div>
              </div>
            </motion.div>
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="ps-1"
          >
            <p>From Coucil</p>
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="ps-1"
          >
            <p>Where We Are</p>
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="ps-1"
          >
            <p>What We Do</p>
          </motion.button>
          <motion.div
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            onMouseLeave={() => setSeeNews("hidden")}
            onMouseEnter={() => setSeeNews("flex")}
            className="z-20 re"
          >
            <motion.button className="ps-1">
              <div className="flex gap-1 items-center justify-center">
                <p>News And Media</p>
                <FaArrowDown size={13} />
              </div>
            </motion.button>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`absolute bg-[#ECF0F1]  top-[20px] ${seeNews}`}
              onMouseEnter={() => setSeeNews("flex")}
            >
              <div className="flex flex-col items-start px-4 py-6">
                <div className="text-black w-[100px] flex items-center gap-2">
                  <Link to={"/news"}>News</Link>
                </div>
                <div className="text-black flex items-center gap-2">
                  <Link to={"/publication"}>Publiction</Link>
                </div>
                <div className="text-black flex items-center gap-2">
                  <Link to={"/resources"}>Resources</Link>
                </div>
                <div className="text-black flex items-center gap-2">
                  <Link to={"/messages"}>Messages</Link>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.button
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className={`${
              pathname == "/contact" && "border-b-4 border-primary"
            } ps-1`}
          >
            <Link to={"/contact"}>Contact Us</Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { motion } from "framer-motion";
const Message = () => {
  return (
    <div className="bg-[#E5F3FE] p-10">
      <div className="flex justify-center gap-24">
        <div className="w-[400px] grid gap-4">
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              type: "tween",
            }}
            className="grid gap-6 bg-white p-5 border-s-4 border-red-600"
          >
            <h2 className="text-2xl font-mono underline-offset-8 underline">
              Message From the president
            </h2>
            <p>
              Peace is not something that can be secured by force or something
              that is bestowed by others" Ethiopian youth council president{" "}
            </p>
            <p>
              It is important to realize that any peace or development agenda
              without the participation of youth will not achieve its goal
            </p>
            <p className="font-bold">
              " Empowered Youth For Empowered Ethiopia "
            </p>
            <div className="font-bold">
              <p>Hon. FUAD GENA</p>
              <p>PRESIDENT</p>
            </div>
          </motion.div>
        </div>
        <div className="grid gap-5">
          <motion.div
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              type: "tween",
            }}
            className="w-[400px] grid gap-4"
          >
            <div className="grid gap-6 bg-white p-5 border-s-4 border-red-600">
              <h2 className="text-2xl font-mono underline-offset-8 underline">
                Message From the president
              </h2>
              <p>
                Peace is not something that can be secured by force or something
                that is bestowed by others" Ethiopian youth council president{" "}
              </p>
              <div className="font-bold">
                <p>Dr. Ergoge Tesfaye</p>
                <p>Minister of Women and Social Affairs</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              type: "tween",
            }}
            className="w-[400px] grid gap-4"
          >
            <div className="grid gap-6 bg-white p-5 border-s-4 border-red-600">
              <h2 className="text-2xl font-mono underline-offset-8 underline">
                Message From the president
              </h2>
              <p>
                Peace is not something that can be secured by force or something
                that is bestowed by others" Ethiopian youth council president{" "}
              </p>

              <div className="font-bold">
                <p>Muna</p>
                <p>State Minister</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Message;

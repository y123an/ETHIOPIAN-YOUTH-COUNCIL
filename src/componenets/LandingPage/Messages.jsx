import { motion } from "framer-motion";
import { minister, presidant } from "../../assets/images";
const Messages = () => {
  return (
    <div className="p-[100px] grid gap-5">
      <div className="flex">
        <h1 className="text-2xl py-2 border-primary border-b-4 head-font">
          Messages
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-20">
        <div className="flex gap-20 justify-around w-full">
          <div className="grid w-[700px] bg-white shadow-lg p-5 border-s-4 gap-5 border-black">
            <h2 className="text-2xl head-font capitalize underline-offset-8 underline">
              Message from the president
            </h2>
            <p>
              Peace is not something that can be secured by force or something
              that is bestowed by others Ethiopian Youth Council president{" "}
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
          </div>
          <div className="bg-primary/[0.1] shadow-lg rounded-md">
            <img src={presidant} alt="" className="w-[700px]" />
          </div>
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
            className="w-full flex gap-20"
          >
            <div className="bg-primary/[0.5] rounded-md shadow-lg">
              <img src={minister} alt="" className="w-[500px]" />
            </div>
            <div className="grid">
              <div className="w-[500px] flex flex-col h-[300px] shadow-lg gap-6 bg-white p-5 border-s-4 border-black">
                <h2 className="text-2xl head-font underline-offset-8 underline">
                  Message From the Minister
                </h2>
                <p>
                  Peace is not something that can be secured by force or
                  something that is bestowed by others" Ethiopian youth council
                  president{" "}
                </p>
                <div className="font-bold">
                  <p>Dr. Ergoge Tesfaye</p>
                  <p>Minister of Women and Social Affairs</p>
                </div>
              </div>
              <div className=" flex flex-col w-[500px] gap-6 bg-white p-5 border-s-4 border-black">
                <h2 className="text-2xl head-font capitalize underline-offset-8 underline">
                  Message From the State minister
                </h2>
                <p>
                  Peace is not something that can be secured by force or
                  something that is bestowed by others" Ethiopian youth council
                  president{" "}
                </p>

                <div className="font-bold">
                  <p>Muna</p>
                  <p>State Minister</p>
                </div>
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
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Messages;

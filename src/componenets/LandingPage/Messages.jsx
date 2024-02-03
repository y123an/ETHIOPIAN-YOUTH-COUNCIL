import { motion } from "framer-motion";
import { minister, presidant } from "../../assets/images";

const Messages = () => {
  return (
    <div className="p-10 grid gap-10">
      <div className="flex">
        <h1 className="text-3xl py-2 border-primary border-b-4 head-font">
          Messages
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col md:flex-row gap-10 w-full">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
            className="md:w-1/2 bg-white shadow-lg p-8 border-4 border-black"
          >
            <h2 className="text-2xl head-font capitalize underline">
              Message from the President
            </h2>
            <p className="mb-4">
              Peace is not something that can be secured by force or something
              that is bestowed by others. Ethiopian Youth Council President{" "}
            </p>
            <p className="mb-4">
              It is important to realize that any peace or development agenda
              without the participation of youth will not achieve its goal.
            </p>
            <p className="font-bold mb-2">
              "Empowered Youth For Empowered Ethiopia"
            </p>
            <div className="font-bold">
              <p className="mb-2">Hon. FUAD GENA</p>
              <p>PRESIDENT</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
            className="md:w-1/2 bg-primary/[0.1] shadow-lg rounded-md overflow-hidden"
          >
            <img src={presidant} alt="" className="w-full h-auto" />
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
          className="flex flex-col md:flex-row gap-10 w-full"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
            className="md:w-1/2 bg-primary/[0.5] rounded-md shadow-lg overflow-hidden"
          >
            <img src={minister} alt="" className="w-full h-auto" />
          </motion.div>
          <div className="md:w-1/2 grid gap-5">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
              className="flex flex-col h-[300px] bg-white p-8 border-4 border-black"
            >
              <h2 className="text-2xl head-font underline">
                Message From the Minister
              </h2>
              <p className="mb-4">
                Peace is not something that can be secured by force or something
                that is bestowed by others. Ethiopian Youth Council President{" "}
              </p>
              <div className="font-bold">
                <p className="mb-2">Dr. Ergoge Tesfaye</p>
                <p>Minister of Women and Social Affairs</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
              className="flex flex-col bg-white p-8 border-4 border-black"
            >
              <h2 className="text-2xl head-font capitalize underline">
                Message From the State Minister
              </h2>
              <p className="mb-4">
                Peace is not something that can be secured by force or something
                that is bestowed by others. Ethiopian Youth Council President{" "}
              </p>
              <div className="font-bold">
                <p className="mb-2">Muna</p>
                <p>State Minister</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Messages;

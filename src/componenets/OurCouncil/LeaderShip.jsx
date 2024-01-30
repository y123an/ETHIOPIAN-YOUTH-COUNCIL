import React from "react";
import { presidant } from "../../assets/images";

const LeaderShip = () => {
  return (
    <div className="py-10">
      <div className="flex">
        <h1 className="text-3xl font-light py-2 border-b-4 border-primary head-font">
          Leadership
        </h1>
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col justify-center items-center">
          <img
            src={presidant}
            alt=""
            className="w-[400px] hover:-translate-y-2 duration-100"
          />
          <div className="bg-white  p-5 shadow-xl shadow-black rounded-lg -mt-[20px] hover:translate-y-2 duration-200 z-20 w-[200px] font-light flex flex-col justify-center items-center ">
            <p className="text-lg font-bold">Hon. Fuad Gena</p>
            <p>President</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={presidant}
            alt=""
            className="w-[400px] hover:-translate-y-2 duration-100"
          />
          <div className="bg-white p-5 shadow-xl shadow-black rounded-lg -mt-[20px] hover:translate-y-2 duration-200 z-20 w-[250px] font-light flex flex-col justify-center items-center ">
            <p className="text-lg font-bold">Hon. Yusuf Muhammed</p>
            <p>Vise President</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderShip;

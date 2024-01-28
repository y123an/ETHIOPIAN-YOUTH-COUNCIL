import React, { useState } from "react";
import { heroImage } from "../../assets/images";
import { FaCalendarAlt } from "react-icons/fa";

const NewsCard = ({ date, news, img, link }) => {
  const [see, setSee] = useState("hidden");

  return (
    <div
      onMouseEnter={() => {
        setSee("flex");
      }}
      onMouseLeave={() => {
        setSee("hidden");
      }}
      className="w-[400px] items-center  flex flex-col  p-2 rounded-lg text-justify"
    >
      <div className="">
        <img
          src={img}
          alt=""
          className="w-[400px] rounded-t-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-10 hover:bg-indigo-500 duration-300"
        />
      </div>
      <div className="px-4 w-[300px] gap-2 grid shadow-2xl p-3 rounded-lg -mt-[50px] z-20 bg-white">
        <div className="flex items-center gap-2">
          <FaCalendarAlt />
          <span>{date}</span>
        </div>
        <p className="font-bold">{news}</p>
        <div
          className={`flex justify-end ${see} animate-bounce transition ease-in-out delay-150`}
        >
          <button className="p-2 capitalize  text-primary">read more</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

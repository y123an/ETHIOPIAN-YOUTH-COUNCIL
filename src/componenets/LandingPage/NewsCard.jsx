import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const NewsCard = ({ date, news, img, link }) => {
  const [see, setSee] = useState(false);

  return (
    <div
      onMouseEnter={() => setSee(true)}
      onMouseLeave={() => setSee(false)}
      className="w-[400px] flex flex-col p-2 rounded-lg text-justify overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={img}
          alt=""
          className="w-full rounded-t-md transition transform hover:scale-105 hover:bg-indigo-500 duration-300"
        />
        {/* Overlay for transition effect */}
        <div
          className={`absolute inset-0 bg-indigo-500 opacity-0 transition-opacity ${
            see ? "opacity-70" : ""
          }`}
        ></div>
      </div>

      {/* Content Section */}
      <div className="px-4 w-full grid shadow-lg p-3 rounded-lg -mt-10 z-20 bg-white">
        <div className="flex items-center gap-2 text-gray-600">
          <FaCalendarAlt />
          <span>{date}</span>
        </div>
        <p className="font-bold text-gray-800">{news}</p>

        {/* Read More Section */}
        <div
          className={`flex justify-end opacity-0 transform translate-y-2 transition-opacity transition-transform ${
            see ? "opacity-100 translate-y-0" : ""
          }`}
        >
          <button className="p-2 capitalize text-primary hover:underline">
            read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

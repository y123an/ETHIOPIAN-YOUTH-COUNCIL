// StatCard.js
import React from "react";

const StatCard = ({ icon, label, value }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-primary text-white p-4 rounded-full">
          {icon}
        </div>
        <div className="ml-4">
          <p className="text-gray-800 font-semibold">{label}</p>
          <p className="text-gray-500 text-lg">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;

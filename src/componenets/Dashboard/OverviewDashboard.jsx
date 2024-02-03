// OverviewDashboard.js
import React from "react";
import {
  FaUser,
  FaBuilding,
  FaClipboardList,
  FaCalendarAlt,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const OverviewDashboard = () => {
  // Sample data for the 3D graph
  const data = [
    { year: "2021", youthSignUp: 30 },
    { year: "2022", youthSignUp: 50 },
    { year: "2023", youthSignUp: 80 },
    { year: "2024", youthSignUp: 120 },
  ];

  // Sample data for latest posts
  const latestPosts = [
    { title: "New Event Announcement", date: "2024-02-01" },
    { title: "Volunteer Opportunity", date: "2024-01-25" },
    // Add more posts as needed
  ];

  // Calculate total youth, total organization, and total posts
  const totalYouth = data.reduce((acc, entry) => acc + entry.youthSignUp, 0);
  const totalOrganization = 150; // Replace with actual data
  const totalPosts = latestPosts.length;

  return (
    <div className="container mx-auto mt-8">
      {/* Total Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <StatCard icon={<FaUser />} label="Total Youth" value={totalYouth} />
        <StatCard
          icon={<FaBuilding />}
          label="Total Organizations"
          value={totalOrganization}
        />
        <StatCard
          icon={<FaClipboardList />}
          label="Total Posts"
          value={totalPosts}
        />
      </div>

      {/* 3D Graph Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Youth Signups Over the Years
        </h2>
        {/* <BarChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="youthSignUp" fill="#8884d8" />
        </BarChart> */}
      </div>

      {/* Latest Posts Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
        <ul className="list-none p-0">
          {latestPosts.map((post, index) => (
            <li
              key={index}
              className="bg-white shadow-md rounded-md p-4 mb-4 flex items-center"
            >
              <div className="flex-shrink-0">
                <FaCalendarAlt className="text-gray-500" />
              </div>
              <div className="ml-4">
                <p className="text-gray-800 font-semibold">{post.title}</p>
                <p className="text-gray-500">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex items-center">
      <div className="flex-shrink-0">{icon}</div>
      <div className="ml-4">
        <p className="text-gray-800 font-semibold">{label}</p>
        <p className="text-gray-500">{value}</p>
      </div>
    </div>
  );
};

export default OverviewDashboard;

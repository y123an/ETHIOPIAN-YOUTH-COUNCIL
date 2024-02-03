// OverviewDashboard.js
import React, { useEffect } from "react";
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
  PieChart,
  Pie,
  LineChart,
  Line,
} from "recharts";
import StatCard from "./StatCard";
import { useAdminStore } from "../../context/adminStore";
import Dashboard from "../../pages/Dashboard/Dashboard";

const OverviewDashboard = () => {
  // Sample data for the charts
  const data = [
    { month: "1", youthSignUp: 30 },
    { month: "2", youthSignUp: 50 },
    { month: "3", youthSignUp: 80 },
    { month: "4", youthSignUp: 120 },
  ];

  const lineChartData = [
    { month: "Jan", posts: 15 },
    { month: "Feb", posts: 20 },
    { month: "Mar", posts: 25 },
    { month: "Apr", posts: 18 },
    { month: "May", posts: 30 },
  ];

  // Calculate total youth, total organization, and total posts
  const dasboardOverView = useAdminStore((store) => store.dasboardOverView);
  const getDashboardOverView = useAdminStore(
    (store) => store.getDashboardOverView
  );
  const pieChartData = [
    { name: "Youth", value: dasboardOverView?.youthCount },
    { name: "Organizations", value: dasboardOverView?.organizationCount },
  ];

  useEffect(() => {
    getDashboardOverView();
  }, []);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const totalPosts = 65; // Replace with actual data

  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center">
        {/* Total Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <StatCard
            icon={<FaUser />}
            label="Total Youth"
            value={dasboardOverView?.youthCount}
          />
          <StatCard
            icon={<FaBuilding />}
            label="Total Organizations"
            value={dasboardOverView?.organizationCount}
          />
          <StatCard
            icon={<FaClipboardList />}
            label="Total Posts"
            value={totalPosts}
          />
        </div>
        {/* Pie Chart Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Distribution of Users</h2>
          <PieChart width={400} height={300}>
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between items-center">
        {/* Line Chart Section */}
        <div className="mt-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Monthly Post Activity</h2>
          <div className="overflow-auto">
            <LineChart width={600} height={300} data={lineChartData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="posts" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
        {/* 3D Bar Chart Section */}
        <div className="mt-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">
            Youth Signups Over the Years
          </h2>
          <div className="overflow-auto">
            <BarChart
              width={600}
              height={300}
              data={dasboardOverView?.youthCountBasedOnMonth?.map(
                ({ month, userCount }) => ({
                  month: monthNames[month - 1],
                  userCount,
                })
              )}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="userCount" fill="#4c51bf" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewDashboard;

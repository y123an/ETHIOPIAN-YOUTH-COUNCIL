import React from "react";
import DashboardLayout from "../../layouts/Dashboard/Layout";
import OverviewDashboard from "../../componenets/Dashboard/OverviewDashboard";

const Dashboard = () => {
  return (
    <>
      <DashboardLayout>
        <h1 className="text-2xl p-10 text-primary">Oveview</h1>
        <div>
          <OverviewDashboard />
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;

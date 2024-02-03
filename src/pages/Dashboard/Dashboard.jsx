import React from "react";
import DashboardLayout from "../../layouts/Dashboard/Layout";
import OverviewDashboard from "../../componenets/Dashboard/OverviewDashboard";

const Dashboard = () => {
  return (
    <>
      <DashboardLayout>
        <div className="p-5">
          <h1 className="text-2xl text-primary">Oveview</h1>
          <div>
            <OverviewDashboard />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;

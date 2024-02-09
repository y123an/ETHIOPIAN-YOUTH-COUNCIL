import React from "react";
import DashboardLayout from "../../layouts/Dashboard/Admin/Layout";
import OpportunityForm from "../../componenets/Dashboard/OpportunityForm";

const AddOpportunity = () => {
  return (
    <>
      <DashboardLayout>
        <h1 className="text-2xl p-10 text-primary">Add News</h1>
        <div className="px-20">
          <OpportunityForm />
        </div>
      </DashboardLayout>
    </>
  );
};

export default AddOpportunity;

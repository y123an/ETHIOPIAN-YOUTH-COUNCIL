import DashboardLayout from "../../layouts/Dashboard/Admin/Layout";
import CompanyDetailsForm from "../../componenets/Dashboard/CompanyDetailsForm";

const CompanyDeatil = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl p-10 text-primary">Add Resources</h1>
      <div className="px-20">
        <CompanyDetailsForm />
      </div>
    </DashboardLayout>
  );
};

export default CompanyDeatil;

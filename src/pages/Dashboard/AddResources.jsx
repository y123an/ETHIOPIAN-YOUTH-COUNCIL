import ResourcesUploadForm from "../../componenets/Dashboard/ResourcesUploadForm";
import DashboardLayout from "../../layouts/Dashboard/Layout";

const AddResources = () => (
  <>
    <DashboardLayout>
      <h1 className="text-2xl p-10 text-primary">Add Resources</h1>
      <div className="px-20">
        <ResourcesUploadForm />
      </div>
    </DashboardLayout>
  </>
);

export default AddResources;

import PublicationUploadForm from "../../componenets/Dashboard/PublicationUploadForm";
import DashboardLayout from "../../layouts/Dashboard/Layout";

const AddPublication = () => (
  <>
    <DashboardLayout>
      <h1 className="text-2xl p-10 text-primary">Add Publications</h1>
      <PublicationUploadForm />
    </DashboardLayout>
  </>
);

export default AddPublication;

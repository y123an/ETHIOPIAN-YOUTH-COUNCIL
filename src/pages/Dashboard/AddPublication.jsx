import PublicationUploadForm from "../../componenets/Dashboard/PublicationUploadForm";
import DashboardLayout from "../../layouts/Dashboard/Layout";

const AddPublication = () => (
  <>
    <DashboardLayout>
      <h1 className="text-2xl p-10 text-primary">Add Publications</h1>
      <div className="px-20">
        <PublicationUploadForm />
      </div>
    </DashboardLayout>
  </>
);

export default AddPublication;

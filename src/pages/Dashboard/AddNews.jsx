import NewsUploadForm from "../../componenets/Dashboard/NewsUploadForm";
import DashboardLayout from "../../layouts/Dashboard/Admin/Layout";

const AddPublication = () => (
  <>
    <DashboardLayout>
      <h1 className="text-2xl p-10 text-primary">Add News</h1>
      <div className="px-20">
        <NewsUploadForm />
      </div>
    </DashboardLayout>
  </>
);

export default AddPublication;

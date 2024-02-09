// JobPostingsPage.js
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAdminStore } from "../../context/adminStore";
import DashboardLayout from "../../layouts/Dashboard/Admin/Layout";
import { AiOutlineDelete } from "react-icons/ai";
import { Bounce, toast } from "react-toastify";
import Axios from "../../middlewares/Axios";

const JobPostings = () => {
  const [jobPostings, setJobPostings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const opportunity = useAdminStore((store) => store.opportunity);
  const getOpportunity = useAdminStore((store) => store.getOpportunity);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobPostings = async () => {
      try {
        setLoading(true);
        await getOpportunity();
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchJobPostings();
  }, []);

  const handleDelete = async (id) => {
    await Axios.delete("opportunity/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("admin-token")}`,
      },
    })
      .then((res) => {
        toast.success("Opportunity deleted Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        getOpportunity();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8 ">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-semibold mb-8 text-center">
            Job Postings
          </h1>
          <Link
            to="/admin/upload-opportunity"
            className="py-2 px-4 bg-primary text-white rounded-md transition ease-in-out duration-300 hover:bg-white hover:text-primary hover:border hover:border-primary focus:outline-none focus:ring focus:border-blue-300"
          >
            Add New
          </Link>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {opportunity.length === 0 ? (
              <div className="col-span-full text-center">
                No job postings available.
              </div>
            ) : (
              opportunity.map((job) => (
                <div
                  key={job.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden w-[300px]"
                >
                  <div className="bg-gray-200 h-32 flex items-center justify-center">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center">
                      {job.title}
                    </h2>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 font-semibold">
                      Company: {job.company_name}
                    </p>
                    <p className="text-gray-600">Location: {job.location}</p>
                    <p className="text-gray-600">
                      Employment Type: {job.employment_type}
                    </p>
                    <p className="text-gray-600">Salary: {job.salary}</p>
                    <p className="text-gray-600">
                      Qualifications: {job.qualifications}
                    </p>
                    <div className="mt-6 flex gap-2">
                      <Link
                        to={`/admin/opportunity/detail`}
                        state={{ id: job.id }}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-block"
                      >
                        View Details
                      </Link>
                      <button
                        onClick={() => handleDelete(job.id)}
                        className="py-2 px-6 flex bg-red-500 items-center text-white rounded-md transition ease-in-out duration-300 hover:bg-white hover:text-red-500 hover:border hover:border-red-500 focus:outline-none focus:ring focus:border-blue-300"
                      >
                        <AiOutlineDelete size={20} className="mr-2" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default JobPostings;

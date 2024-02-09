// JobDetailPage.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Axios from "../../middlewares/Axios";
import DashboardLayout from "../../layouts/Dashboard/Admin/Layout";
import { Bounce, toast } from "react-toastify";

const OpportunityDetail = ({ match }) => {
  const { state } = useLocation();
  const [jobPosting, setJobPosting] = useState(null);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Fetch the job posting data by ID when the component mounts
    const fetchData = async () => {
      await Axios({
        method: "get",
        url: `opportunity/${state?.id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("admin-token")}`,
        },
      })
        .then((res) => {
          setJobPosting(res.data);
          // Initialize formData with the current job posting data
          setFormData({ ...res.data });
        })
        .catch((error) => console.error("Error fetching job posting:", error));
    };
    fetchData();
  }, [match]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update formData with the new value
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    // Send the updated job posting data to the backend
    await Axios({
      url: `/opportunity/${state?.id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("admin-token")}`,
      },
      data: formData,
    })
      .then((response) => {
        setJobPosting({ ...formData });
        toast.success("Successfully updated", {
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
      })
      .catch((error) => console.error("Error updating job posting:", error));
  };

  if (!jobPosting) {
    return <div>Loading...</div>;
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-8">Edit Job Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="max-w-screen-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              {/* Job Title */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="title"
                >
                  Job Title <span className="text-red-500">*</span>:
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Company Name */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="company_name"
                >
                  Company Name <span className="text-red-500">*</span>:
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  id="company_name"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Location */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="location"
                >
                  Location <span className="text-red-500">*</span>:
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Employment Type */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="employment_type"
                >
                  Employment Type <span className="text-red-500">*</span>:
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  id="employment_type"
                  name="employment_type"
                  value={formData.employment_type}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Salary */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="salary"
                >
                  Salary <span className="text-red-500">*</span>:
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  id="salary"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Qualifications */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="qualifications"
                >
                  Qualifications <span className="text-red-500">*</span>:
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="qualifications"
                  name="qualifications"
                  value={formData.qualifications}
                  onChange={handleChange}
                  required
                  rows="3"
                />
              </div>
              {/* Application Instructions */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="application_instructions"
                >
                  Application Instructions{" "}
                  <span className="text-red-500">*</span>:
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="application_instructions"
                  name="application_instructions"
                  value={formData.application_instructions}
                  onChange={handleChange}
                  required
                  rows="3"
                />
              </div>
              {/* Application Deadline */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="application_deadline"
                >
                  Application Deadline <span className="text-red-500">*</span>:
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="date"
                  id="application_deadline"
                  name="application_deadline"
                  value={formData.application_deadline}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Contact Email */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="contact_email"
                >
                  Contact Email <span className="text-red-500">*</span>:
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  value={formData.contact_email}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Contact Phone */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="contact_phone"
                >
                  Contact Phone <span className="text-red-500">*</span>:
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="tel"
                  id="contact_phone"
                  name="contact_phone"
                  value={formData.contact_phone}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Company Overview */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="company_overview"
                >
                  Company Overview <span className="text-red-500">*</span>:
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="company_overview"
                  name="company_overview"
                  value={formData.company_overview}
                  onChange={handleChange}
                  required
                  rows="3"
                />
              </div>
              {/* Benefits */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="benefits"
                >
                  Benefits <span className="text-red-500">*</span>:
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="benefits"
                  name="benefits"
                  value={formData.benefits}
                  onChange={handleChange}
                  required
                  rows="3"
                />
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-100 border-t border-gray-200 flex justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
              <Link
                to="/admin/opportunity"
                className="text-blue-500 hover:text-blue-600 font-semibold focus:outline-none"
              >
                Back to Job Listings
              </Link>
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default OpportunityDetail;

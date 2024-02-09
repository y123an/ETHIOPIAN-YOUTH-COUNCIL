// JobPostingForm.js
import React, { useState } from "react";
import Axios from "../../middlewares/Axios";

const OpportunityForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    company_name: "",
    location: "",
    employment_type: "",
    salary: "",
    qualifications: "",
    application_instructions: "",
    application_deadline: "",
    contact_email: "",
    contact_phone: "",
    company_overview: "",
    benefits: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the form data to the backend
    console.log(formData);
    await Axios({
      method: "POST",
      url: "opportunity",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("admin-token")}`,
      },
      data: JSON.stringify(formData),
    })
      .then((response) => {
        console.log(response);
        // Clear the form after successful submission
        setFormData({
          title: "",
          description: "",
          company_name: "",
          location: "",
          employment_type: "",
          salary: "",
          qualifications: "",
          application_instructions: "",
          application_deadline: "",
          contact_email: "",
          contact_phone: "",
          company_overview: "",
          benefits: "",
        });
      })
      .catch((error) => console.error("Error creating job posting:", error));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        Fill Job Posting Details
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Job Title */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Job Title <span className="text-red-500">*</span>:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter job title"
              required
            />
          </div>
          {/* Description */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Job Description <span className="text-red-500">*</span>:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter job description"
              rows="5"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="company_name"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              placeholder="Enter company name"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter job location"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="employment_type"
              name="employment_type"
              value={formData.employment_type}
              onChange={handleChange}
              placeholder="Enter employment type"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="Enter salary"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="qualifications"
              name="qualifications"
              value={formData.qualifications}
              onChange={handleChange}
              placeholder="Enter required qualifications"
              rows="3"
              required
            />
          </div>
          {/* Application Instructions */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="application_instructions"
            >
              Application Instructions <span className="text-red-500">*</span>:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="application_instructions"
              name="application_instructions"
              value={formData.application_instructions}
              onChange={handleChange}
              placeholder="Enter application instructions"
              rows="3"
              required
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="contact_email"
              name="contact_email"
              value={formData.contact_email}
              onChange={handleChange}
              placeholder="Enter contact email"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              id="contact_phone"
              name="contact_phone"
              value={formData.contact_phone}
              onChange={handleChange}
              placeholder="Enter contact phone"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="company_overview"
              name="company_overview"
              value={formData.company_overview}
              onChange={handleChange}
              placeholder="Enter company overview"
              rows="3"
              required
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="benefits"
              name="benefits"
              value={formData.benefits}
              onChange={handleChange}
              placeholder="Enter benefits"
              rows="3"
              required
            />
          </div>
        </div>
        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default OpportunityForm;

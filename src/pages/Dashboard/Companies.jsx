import React, { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/Dashboard/Layout";
import {
  AiOutlineSearch,
  AiOutlineInfoCircle,
  AiOutlineDownload,
} from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useAdminStore } from "../../context/adminStore";

const organizationsData = [
  {
    id: 1,
    name: "Organization A",
    description: "Description for Organization A",
  },
  {
    id: 2,
    name: "Organization B",
    description: "Description for Organization B",
  },
  {
    id: 3,
    name: "Organization C",
    description: "Description for Organization C",
  },
  {
    id: 4,
    name: "Organization D",
    description: "Description for Organization D",
  },
  // Add more organizations as needed
];

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const organizations = useAdminStore((store) => store.organizations);
  const getOrganization = useAdminStore((store) => store.getOrganization);

  useEffect(() => {
    getOrganization();
  }, []);

  const filteredOrganizations = organizations?.filter((organization) =>
    organization.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="w-full mx-auto p-4 sm:p-6 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Organization List</h1>
          <button
            className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
            onClick={handleAddNew} // Add your logic for handling the "Add New" action
          >
            <IoMdAddCircleOutline size={24} />
          </button>
        </div>

        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search organizations"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 pl-8 border border-gray-300 rounded-md w-full"
          />
          <AiOutlineSearch
            className="absolute top-2 left-2 text-gray-500"
            size={20}
          />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredOrganizations?.map((organization) => (
            <li key={organization.id}>
              <div className="bg-white p-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                <h2 className="text-xl font-semibold mb-2">
                  {organization.name}
                </h2>
                <p className="text-gray-600">{organization.bio}</p>
                <div className="flex justify-end mt-4">
                  <button
                    className="text-gray-500 hover:text-blue-500 mr-2"
                    onClick={() => handleInfoClick(organization)}
                  >
                    <AiOutlineInfoCircle size={20} />
                  </button>
                  <button
                    className="text-gray-500 hover:text-green-500"
                    onClick={() => handleDownloadClick(organization)}
                  >
                    <AiOutlineDownload size={20} />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </DashboardLayout>
  );
};

const handleAddNew = () => {
  // Handle logic for adding a new organization
};

const handleInfoClick = (organization) => {
  // Handle logic for displaying information about the organization
};

const handleDownloadClick = (organization) => {
  // Handle logic for downloading information about the organization
};
export default Companies;

import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useAdminStore } from "../../../context/adminStore";

const YouthList = () => {
  const youth = useAdminStore((store) => store.youth);
  const getYouth = useAdminStore((store) => store.getYouth);
  const isLoading = useAdminStore((store) => store.isLoading);
  const error = useAdminStore((store) => store.error);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getYouth();
  }, [getYouth]);

  // Column definitions
  const columns = [
    { name: "id", selector: (row) => row.id, sortable: true, label: "ID" },
    {
      name: "fname",
      selector: (row) => row.fname,
      sortable: true,
      label: "First Name",
    },
    {
      name: "lname",
      selector: (row) => row.lname,
      sortable: true,
      label: "Last Name",
    },
    {
      name: "gender",
      selector: (row) => row.gender,
      sortable: true,
      label: "Gender",
    },
    { name: "age", selector: (row) => row.age, sortable: true, label: "Age" },
    { name: "DOB", selector: (row) => row.DOB, sortable: true, label: "DOB" },
    {
      name: "nationality",
      selector: (row) => row.nationality,
      sortable: true,
      label: "Nationality",
    },
    {
      name: "city",
      selector: (row) => row.city,
      sortable: true,
      label: "City",
    },
    {
      name: "country",
      selector: (row) => row.country,
      sortable: true,
      label: "Country",
    },
    {
      name: "address",
      selector: (row) => row.address,
      sortable: true,
      label: "Address",
    },
    {
      name: "education",
      selector: (row) => row.education,
      sortable: true,
      label: "Education",
    },
    {
      name: "phone",
      selector: (row) => row.phone,
      sortable: true,
      label: "Phone",
    },
    { name: "bio", selector: (row) => row.bio, sortable: true, label: "Bio" },
    {
      name: "email",
      selector: (row) => row.email,
      sortable: true,
      label: "Email",
    },
  ];

  // Custom filter function for search
  const customFilter = (rows, searchTerm) => {
    return rows.filter((row) => {
      return Object.keys(row).some((key) => {
        const value = row[key];
        if (value) {
          const lowerCaseValue = value.toString().toLowerCase();
          return lowerCaseValue.includes(searchTerm.toLowerCase());
        }
        return false;
      });
    });
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Youth</h1>
      <div className="shadow-2xl p-2 rounded-md w-[1200px]">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mb-4 w-full"
        />
        {isLoading && <p>Loading...</p>}
        {error && <p>Error fetching youth data.</p>}
        {!isLoading && !error && (
          <DataTable
            title="Youth List"
            columns={columns}
            data={youth}
            pagination
            paginationPerPage={10}
            paginationRowsPerPageOptions={[5, 10, 20]}
            highlightOnHover
            pointerOnHover
            responsive
            filterFunction={(rows) => customFilter(rows, searchTerm)}
          />
        )}
      </div>
    </div>
  );
};

export default YouthList;

import React from "react";
import MaterialTable from "material-table";

const YouthList = () => {
  // Sample data, replace this with your actual data
  const data = [
    {
      id: 1,
      fname: "John",
      lname: "Doe",
      gender: "Male",
      age: 25,
      DOB: "1999-01-01",
      nationality: "US",
      city: "New York",
      country: "USA",
      address: "123 Main St",
      education: "Bachelor's Degree",
      phone: "123-456-7890",
      bio: "Lorem ipsum",
      email: "john.doe@example.com",
    },
    // Add more youth data as needed
  ];

  // Column definitions
  const columns = [
    { title: "First Name", field: "fname" },
    { title: "Last Name", field: "lname" },
    { title: "Gender", field: "gender" },
    { title: "Age", field: "age", type: "numeric" },
    { title: "DOB", field: "DOB", type: "date" },
    { title: "Nationality", field: "nationality" },
    { title: "City", field: "city" },
    { title: "Country", field: "country" },
    { title: "Address", field: "address" },
    { title: "Education", field: "education" },
    { title: "Phone", field: "phone" },
    { title: "Bio", field: "bio" },
    { title: "Email", field: "email" },
  ];

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        title="Youth List"
        columns={columns}
        data={data}
        options={{
          sorting: true,
          search: true,
          paging: true,
          pageSize: 10,
          pageSizeOptions: [5, 10, 20],
        }}
      />
    </div>
  );
};

export default YouthList;

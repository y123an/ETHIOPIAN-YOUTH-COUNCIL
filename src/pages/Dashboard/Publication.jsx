import React, { useEffect } from "react";
import DashboardLayout from "../../layouts/Dashboard/Layout";
import { useAdminStore } from "../../context/adminStore";
import PublicationCard from "../../componenets/Dashboard/Publication/PublicationCard";
import { useNavigate } from "react-router-dom";

const Publication = () => {
  const publications = useAdminStore((store) => store.publications);
  const getPublications = useAdminStore((store) => store.getPublication);
  const navigate = useNavigate();

  useEffect(() => {
    getPublications();
  }, []);

  console.log(publications);
  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Publications</h1>
          <button
            className="py-2 px-4 bg-primary text-white rounded-md transition ease-in-out duration-300 hover:bg-white hover:text-primary hover:border hover:border-primary focus:outline-none focus:ring focus:border-blue-300"
            onClick={() => {
              navigate("/admin/upload-publication");
            }}
          >
            Add New
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {publications?.map((publication) => (
            <PublicationCard
              key={publication.id}
              name={publication.name}
              img={publication.thumbnail_file_name}
              pdf={publication.pdf_file_name}
              filepath={"publication"}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Publication;

import React, { useEffect, useState } from "react";
import { useSiteStore } from "../../context/siteStore";
import Pagination from "../Pagination";
import OrganizationCard from "./OrganizationCard";
import { GrSearchAdvanced } from "react-icons/gr";

const Organization = () => {
  const organizations = useSiteStore((store) => store.organizations);
  const getOrganization = useSiteStore((store) => store.getOrganization);
  const searchOrganziation = useSiteStore((store) => store.searchOrganziation);

  const totalContent = organizations.length;
  const [contentPerPage, setContentPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [];
  for (let i = 1; i <= Math.ceil(totalContent / contentPerPage); i++) {
    pages.push(i);
  }

  let totalPages = Math.ceil(totalContent / contentPerPage);
  const lastContentIndex = currentPage * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;

  useEffect(() => {
    getOrganization();
  }, []);

  return (
    <div className="w-full mx-auto p-4">
      <div className="mb-8">
        <h1 className="font-light text-3xl py-3 border-b-4 head-font border-primary">
          Organizations
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-20">
        <div className="w-full md:w-[40%]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col mt-4">
              <p className="text-xl">Search</p>
              <div className="flex items-center gap-2 rounded-md overflow-hidden bg-gray-100">
                <input
                  type="text"
                  placeholder="Search organizations..."
                  onChange={(e) => searchOrganziation(e.target.value)}
                  className="p-2 w-full focus:outline-none"
                />
                <button className="bg-blue-500 text-white p-2">
                  <GrSearchAdvanced size={24} />
                </button>
              </div>
            </div>
            <div className="mt-4">
              <div>
                <p className="text-xl">Filter</p>
                <div className="p-5 bg-white rounded-md shadow-md">
                  <div className="space-y-2">
                    <p className="font-semibold">Category</p>
                    <div className="ml-5">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="charity" />
                        <label htmlFor="charity">Charity</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="education" />
                        <label htmlFor="education">Education</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="health" />
                        <label htmlFor="health">Health</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="environment" />
                        <label htmlFor="environment">Environment</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[60%]">
          <div className="grid gap-5">
            {organizations.length > 0 ? (
              organizations
                ?.slice(firstContentIndex, lastContentIndex)
                .map((organization, index) => (
                  <OrganizationCard
                    key={index}
                    name={organization.name}
                    country={organization.country}
                    bio={organization.bio}
                    address={organization.address}
                    phone={organization.phone}
                    email={organization.email}
                    pobox={organization.poBox}
                    leaderShip={organization.leaderShip}
                    category={organization.category}
                    yearOfEstablishment={organization.yearOfEstablishment}
                  />
                ))
            ) : (
              <div className="p-10">
                <p className="text-xl font-light">No organization Found</p>
              </div>
            )}
          </div>
          <div className="mt-4">
            <Pagination
              setCurrentPage={setCurrentPage}
              pages={pages}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organization;

import { useState } from "react";
import { useSiteStore } from "../../context/siteStore";
import Pagination from "../Pagination";
import OrganizationCard from "./OrganizationCard";
import { GrSearchAdvanced } from "react-icons/gr";

const Organization = () => {
  const organizations = useSiteStore((store) => store.organizations);

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

  return (
    <div className="w-[700px] grid gap-10">
      <div className="flex">
        <h1 className="font-light text-3xl py-3 border-b-4 head-font border-primary">
          Organzitions
        </h1>
      </div>
      <div className="flex w-full justify-between gap-10">
        <div className="w-[600px] grid gap-5">
          <div className="grid divide-y-2">
            {organizations
              ?.slice(firstContentIndex, lastContentIndex)
              .map((organization, index) => (
                <OrganizationCard
                  key={index}
                  name={organization.name}
                  country={organization.country}
                  bio={organization.bio}
                  address={organization.adress}
                  phone={organization.phone}
                  email={organization.email}
                  pobox={organization.poBox}
                  leaderShip={organization.leaderShip}
                  category={organization.catagory}
                  yearOfEstablishment={organization.yearOfEstablishment}
                />
              ))}
          </div>
          <div>
            <Pagination
              setCurrentPage={setCurrentPage}
              pages={pages}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <p className="text-xl">Search</p>
            <div className="flex items-center gap-2 rounded-md pr-2 bg-[#f3f3f3] ">
              <input type="text" className="bg-[#f3f3f3] p-2" />
              <GrSearchAdvanced size={24} />
            </div>
          </div>
          <div>
            <p className="text-xl">Fillter</p>
            <div className="p-5 clear-start gap-1 grid bg-[#f3f3f3] rounded">
              <p>Category</p>
              <div className="ml-5">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p>Charity</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p>Charity</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p>Charity</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p>Charity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organization;

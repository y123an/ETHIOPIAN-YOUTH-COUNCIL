import PdfCard from "./PdfCard";
import { useSiteStore } from "../context/siteStore";
import { useEffect } from "react";

const Resource = () => {
  const Resources = useSiteStore((store) => store.Resources);
  const getResources = useSiteStore((store) => store.getResources);

  useEffect(() => {
    getResources();
  }, []);

  return (
    <div className="grid gap-10">
      <div className="flex">
        <h1 className="text-2xl border-b-4 border-primary p-2 head-font">
          Resources
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {Resources?.length > 0 ? (
          Resources.map((resource, index) => (
            <PdfCard
              key={index}
              name={resource.name}
              img={resource.thumbnail_file_name}
              filepath={"resources"}
              pdf={resource.pdf_file_name}
            />
          ))
        ) : (
          <p>No resources available</p>
        )}
      </div>
    </div>
  );
};

export default Resource;

import PdfCard from "./PdfCard";
import { useSiteStore } from "../context/siteStore";
import { useEffect } from "react";

const Resource = () => {
  const Resources = useSiteStore((store) => store.Resources);
  const getResources = useSiteStore((store) => store.getResources);

  useEffect(() => {
    getResources();
  }, []);

  // console.log(Resources[0].thumbnail.data);
  return (
    <div className="grid gap-10">
      <div className="flex">
        <h1 className="text-2xl border-b-4 border-primary p-2 head-font">
          Resources
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {Resources?.map((resource, index) => (
          <PdfCard
            key={index}
            name={resource.name}
            img={resource.thumbnail_file_name}
            filepath={"resources"}
            pdf={resource.pdf_file_name}
          />
        ))}
      </div>
    </div>
  );
};

export default Resource;

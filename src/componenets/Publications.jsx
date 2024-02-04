import PdfCard from "./PdfCard";
import { useSiteStore } from "../context/siteStore";
import { useEffect } from "react";

const Publications = () => {
  const publications = useSiteStore((store) => store.publications);
  const getPublication = useSiteStore((store) => store.getPublication);

  useEffect(() => {
    getPublication();
  }, []);

  console.log(publications);

  return (
    <div className="grid gap-10">
      <div className="flex">
        <h1 className="text-2xl border-b-4 border-primary p-2 head-font">
          Publication
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {publications?.map((publication, index) => (
          <PdfCard
            key={index}
            name={publication.name}
            img={publication.thumbnail_file_name}
            pdf={publication.pdf_file_name}
            filepath={"publication"}
          />
        ))}
      </div>
    </div>
  );
};

export default Publications;

import PdfCard from "./PdfCard";
import { useSiteStore } from "../context/siteStore";

const Publications = () => {
  const publications = useSiteStore((store) => store.publications);

  return (
    <div className="grid gap-10">
      <div className="flex">
        <h1 className="text-2xl border-b-4 border-primary p-2">Publication</h1>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {publications.map((resource, index) => (
          <PdfCard key={index} name={resource.name} img={resource.img} />
        ))}
      </div>
    </div>
  );
};

export default Publications;

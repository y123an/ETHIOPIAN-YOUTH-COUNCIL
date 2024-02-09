import React from "react";
import { useSiteStore } from "../context/siteStore";

const Gallery = () => {
  const photos = useSiteStore((store) => store.photo);
  console.log(photos);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8 uppercase">harari</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="overflow-hidden relative group rounded-lg cursor-pointer"
          >
            <img
              src={photo}
              alt={`Photo ${index}`}
              className="w-full h-full object-cover transition duration-300 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-bold">Photo {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

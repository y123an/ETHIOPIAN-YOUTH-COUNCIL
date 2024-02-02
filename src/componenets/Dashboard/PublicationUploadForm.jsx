import React, { useState } from "react";
import Axios from "../../middlewares/Axios";

const PublicationUploadForm = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [name, setName] = useState("");

  const handlePdfFileChange = (event) => {
    setPdfFile(event.target.files[0]);
  };

  const handleThumbnailChange = (event) => {
    setThumbnail(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFileUpload = async () => {
    try {
      if (!pdfFile || !thumbnail || !name) {
        console.error(
          "Please select a PDF file, a thumbnail, and enter a name"
        );
        return;
      }

      const formData = new FormData();
      formData.append("pdfFile", pdfFile);
      formData.append("thumbnail", thumbnail);
      formData.append("name", name);

      await Axios.post("/publication/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">File Upload</h1>
      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="pdfFile"
            className="block text-sm font-medium text-gray-700"
          >
            Select PDF:
          </label>
          <input
            type="file"
            id="pdfFile"
            onChange={handlePdfFileChange}
            accept=".pdf"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="thumbnail"
            className="block text-sm font-medium text-gray-700"
          >
            Select Thumbnail:
          </label>
          <input
            type="file"
            id="thumbnail"
            onChange={handleThumbnailChange}
            accept="image/*"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
          {thumbnail && (
            <img
              src={URL.createObjectURL(thumbnail)}
              alt="Thumbnail Preview"
              className="mt-2 rounded-md"
              style={{ maxWidth: "100%", maxHeight: "150px" }}
            />
          )}
        </div>
        <button
          type="button"
          onClick={handleFileUpload}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Upload PDF
        </button>
      </form>
    </div>
  );
};

export default PublicationUploadForm;

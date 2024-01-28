import React, { useState } from "react";
import Axios from "../../middlewares/Axios";

const ResourcesUploadForm = () => {
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

      await Axios.post("/resources/upload", formData, {
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
    <div>
      <h1>File Upload</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="pdfFile">Select PDF:</label>
          <input
            type="file"
            id="pdfFile"
            onChange={handlePdfFileChange}
            accept=".pdf"
          />
        </div>
        <div>
          <label htmlFor="thumbnail">Select Thumbnail:</label>
          <input
            type="file"
            id="thumbnail"
            onChange={handleThumbnailChange}
            accept="image/*"
          />
        </div>
        <button type="button" onClick={handleFileUpload}>
          Upload PDF
        </button>
      </form>
    </div>
  );
};

export default ResourcesUploadForm;

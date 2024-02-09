import React, { useState } from "react";
import Axios from "../../middlewares/Axios";
import { Bounce, toast } from "react-toastify";

const NewsUploadForm = () => {
  const [thumbnail, setThumbnail] = useState(null);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleThumbnailChange = (event) => {
    setThumbnail(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFileUpload = async () => {
    try {
      if (!thumbnail || !description) {
        console.error(
          "Please select a PDF file, a thumbnail, and enter a name"
        );
        return;
      }

      const formData = new FormData();
      formData.append("thumbnail", thumbnail);
      formData.append("description", description);
      formData.append("date", date);

      await Axios.post("/news/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("admin-token")}`,
        },
      });

      toast.success("News added Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setDate("");
      setDescription("");
      setThumbnail(null);
    } catch (error) {
      console.error("Error uploading file:", error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">File Upload</h1>
      <form onSubmit={handleFileUpload}>
        <div className="mb-4">
          <label
            htmlFor="thumbnail"
            className="block text-sm font-medium text-gray-700"
          >
            Select News Thumbnail:
          </label>
          <input
            type="file"
            id="thumbnail"
            onChange={handleThumbnailChange}
            accept="image/*"
            required={true}
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
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <input
            type="date"
            id="description"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required={true}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            News Text:
          </label>
          <textarea
            type="text"
            id="description"
            value={description}
            cols={6}
            rows={10}
            required
            onChange={handleNameChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Upload News
        </button>
      </form>
    </div>
  );
};

export default NewsUploadForm;

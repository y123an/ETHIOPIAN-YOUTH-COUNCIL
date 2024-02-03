import { useEffect, useState } from "react";
import Axios from "../middlewares/Axios";
import { BiDownload } from "react-icons/bi";
import { motion } from "framer-motion";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const PdfCard = ({ name, img, filepath, pdf }) => {
  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchThumbnail = async () => {
      try {
        // Fetch thumbnail from the backend
        const response = await Axios.get(`${filepath}/thumbnail/${img}`, {
          responseType: "arraybuffer",
        });

        // Convert the thumbnail buffer to a base64 string
        const base64Thumbnail = `data:image/jpeg;base64,${arrayBufferToBase64(
          response.data
        )}`;

        // Set the base64 string to the state
        setThumbnail(base64Thumbnail);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching thumbnail:", error.message);
        setLoading(false);
      }
    };

    fetchThumbnail();
  }, [img]);

  const handleDownload = async () => {
    try {
      // Fetch PDF from the backend
      const response = await Axios.get(`${filepath}/download/${pdf}`, {
        responseType: "arraybuffer",
      });

      // Create a Blob from the PDF data
      const pdfBlob = new Blob([new Uint8Array(response.data)], {
        type: "application/pdf",
      });

      // Create a download link and trigger the download
      const downloadLink = document.createElement("a");
      const url = URL.createObjectURL(pdfBlob);
      downloadLink.href = url;
      downloadLink.download = pdf;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      // Revoke the Object URL to free up resources
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-4 w-full max-w-[400px] mx-auto"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="transform hover:-translate-y-5 delay-75 duration-150"
        whileHover={{ rotate: 5 }}
      >
        {loading ? (
          <AiOutlineLoading3Quarters
            className="text-primary animate-spin"
            size={32}
          />
        ) : (
          <img
            src={thumbnail}
            alt="Image from Database"
            className="w-full max-w-[300px] shadow-lg shadow-primary"
          />
        )}
      </motion.div>
      <div className="flex flex-col items-center gap-4">
        <p className="text-xl font-semibold">{name}</p>
        <motion.button
          onClick={handleDownload}
          className="px-4 py-2 bg-primary text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:border-primary hover:text-black hover:bg-white flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
        >
          <BiDownload />
          Download PDF
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PdfCard;

import { useEffect, useState } from "react";
import Axios from "../middlewares/Axios";

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

  useEffect(() => {
    const fetchThumbnail = async () => {
      try {
        // Fetch thumbnail from the backend
        const response = await Axios.get(`${filepath}/thumbnail/${img}`, {
          responseType: "arraybuffer",
        });

        // Convert the thumbnail buffer to a base64 string

        // Set the base64 string to the state
        setThumbnail(response.data);
      } catch (error) {
        console.error("Error fetching thumbnail:", error.message);
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
      // console.log();
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
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  return (
    <div className="flex justify-center flex-col gap-10  w-full">
      <div className="hover:-translate-y-5 delay-75 duration-150">
        <img
          src={`data:image/jpeg;base64,${arrayBufferToBase64(thumbnail)}`}
          alt="Image from Database"
          className="w-[300px] shadow-lg shadow-primary"
        />
      </div>
      <div className="flex flex-col justify-center gap-10 ">
        <div>
          <p className="head-font">{name}</p>
        </div>
        <div>
          <button
            onClick={handleDownload}
            className="py-2 px-6 bg-primary transition ease-in-out delay-150  hover:-translate-y-1 hover:border-primary hover:text-black hover:border hover:bg-white duration-300 text-white"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfCard;

import { useEffect, useState } from "react";
import Axios from "../middlewares/Axios";
import { css } from "@emotion/react";
import { AiOutlineDownload } from "react-icons/ai";
import { ClipLoader } from "react-spinners";
import { saveAs } from "file-saver";
import { Bounce, toast } from "react-toastify";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

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
        const response = await Axios.get(`${filepath}/thumbnail/${img}`, {
          responseType: "arraybuffer",
        });
        setThumbnail(response.data);
        setLoading(false); // Set loading to false once the image is fetched
      } catch (error) {
        console.error("Error fetching thumbnail:", error.message);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchThumbnail();
  }, [img]);

  const handleDownload = async () => {
    try {
      const response = await Axios.get(`${filepath}/download/${pdf}`, {
        responseType: "arraybuffer",
      });

      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      saveAs(pdfBlob, pdf);
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  return (
    <div className="flex justify-center items-center gap-10 w-full">
      <div className="hover:-translate-y-5 transition-transform duration-300 ease-in-out">
        {loading ? (
          <ClipLoader
            css={override}
            size={50}
            color={"#36D7B7"}
            loading={loading}
          />
        ) : (
          <img
            src={`data:image/jpeg;base64,${arrayBufferToBase64(thumbnail)}`}
            alt={`Thumbnail for ${name}`}
            className="w-48 h-48 object-cover rounded-lg shadow-lg"
          />
        )}
      </div>
      <div className="flex flex-col justify-center gap-4">
        <div>
          <p className="text-xl font-bold">{name}</p>
        </div>
        <div className="flex flex-col gap-4">
          <button
            onClick={handleDownload}
            className="py-2 px-6 bg-primary flex items-center text-white rounded-md transition ease-in-out duration-300 hover:bg-white hover:text-primary hover:border hover:border-primary focus:outline-none focus:ring focus:border-blue-300"
          >
            <AiOutlineDownload size={20} className="mr-2" />
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfCard;

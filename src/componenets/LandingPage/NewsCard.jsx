import { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Axios from "../../middlewares/Axios";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const NewsCard = ({ date, description, img, link }) => {
  const [see, setSee] = useState(false);
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
        const response = await Axios.get(`news/thumbnail/${img}`, {
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

  return (
    <div
      onMouseEnter={() => setSee(true)}
      onMouseLeave={() => setSee(false)}
      className="w-[400px] flex flex-col p-2 rounded-lg text-justify overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative">
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
            className="object-cover rounded-lg shadow-lg"
          />
        )}
        {/* Overlay for transition effect */}
        <div
          className={`absolute inset-0 bg-indigo-500 opacity-0 transition-opacity ${
            see ? "opacity-70" : ""
          }`}
        ></div>
      </div>

      {/* Content Section */}
      <div className="px-4 w-full grid shadow-lg p-3 rounded-lg -mt-10 z-20 bg-white">
        <div className="flex items-center gap-2 text-gray-600">
          <FaCalendarAlt />
          <span>{date}</span>
        </div>
        <p className="font-bold text-gray-800">{description}</p>

        {/* Read More Section */}
        <div
          className={`flex justify-end opacity-0 transform translate-y-2 transition-opacity transition-transform ${
            see ? "opacity-100 translate-y-0" : ""
          }`}
        >
          <button className="p-2 capitalize text-primary hover:underline">
            read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

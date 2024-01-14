import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { heroImage } from "../../assets/images";

const TeamCard = () => {
  return (
    <div
      style={{
        boxShadow: "0px 0px 20px rgba(255, 146, 24, 1)",
      }}
      className="bg-white w-[250px] rounded-md "
    >
      <div>
        <img src={heroImage} alt="" className="h-[250px]" />
      </div>
      <div
        className="
      p-2"
      >
        <p className="text-xl font-bold">Hon.Fuad Gena</p>
        <p className="font-light">President</p>
      </div>
    </div>
  );
};

export default TeamCard;

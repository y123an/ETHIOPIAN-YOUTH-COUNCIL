import { logo } from "../../assets/images";
import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiArrowRightOutline, TiLocationOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex p-5 text-sm gap-32 justify-center items-center bg-[#034B64]/90 text-white  border-t-2 ">
      <div className="flex gap-20">
        <div>
          <img src={logo} alt="" className="w-[150px]" />
        </div>
        <div className="flex gap-20">
          <div className="grid gap-2">
            <p className="flex items-center gap-2">
              <TiArrowRightOutline size={14} /> About EYC
            </p>
            <p className="flex items-center gap-2">
              <TiArrowRightOutline size={14} /> Our Council
            </p>
            <p className="flex items-center gap-2">
              <TiArrowRightOutline size={14} /> Privacy
            </p>
            <p className="flex items-center gap-2">
              <TiArrowRightOutline size={14} /> Accessibility
            </p>
          </div>
          <div className="grid gap-2 w-[150px]">
            <p className="flex items-center gap-2">
              <TiArrowRightOutline size={14} /> Career
            </p>
            <p className="flex items-center gap-2">
              <TiArrowRightOutline size={14} /> Frequently Asked Questions
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <TiArrowRightOutline size={14} /> Contact
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-10">
        <div className=" grid  w-[300px]">
          <div className="flex flex-col justify-center">
            <div className="flex gap-2">
              <Link
                to={"https://www.facebook.com/profile.php?id=100093414639456"}
              >
                <FaFacebookF />
              </Link>
              <Link to={"https://t.me/ethiopianyouthcouncil_official"}>
                <FaTelegram />
              </Link>
              <FaYoutube />
              <FaInstagram />
            </div>
            <p className="text-blue-500">Open Hours</p>
            <p>Mon - Fri 8:30 am - 5 pm</p>
          </div>
          <div className="flex flex-col justify-center gap-1">
            <div className="flex items-center gap-4">
              <TiLocationOutline size={34} />
              <Link
                to={
                  "https://www.google.com/maps/place/Ministry+Of+Women+%26+Social+Affairs+%7C+Kazanchis+%7C+%E1%88%B4%E1%89%B6%E1%89%BD%E1%8A%93+%E1%88%9B%E1%88%85%E1%89%A0%E1%88%AB%E1%8B%8A+%E1%8C%89%E1%8B%B3%E1%8B%AE%E1%89%BD+%E1%88%9A%E1%8A%92%E1%88%B5%E1%89%B4%E1%88%AD+%7C+%E1%8A%AB%E1%88%B3%E1%8A%95%E1%89%BA%E1%88%B5/@9.0144491,38.7721836,17z/data=!3m1!4b1!4m6!3m5!1s0x164b857234ebc399:0xef6c42085ed650fa!8m2!3d9.0144491!4d38.7721836!16s%2Fg%2F11vklw42sg?entry=ttu"
                }
                target="_blank"
              >
                Ministry Of Women & Social Affairs | Kazanchis | ሴቶችና ማህበራዊ ጉዳዮች
                ሚኒስቴር | ካሳንቺስ
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone />
              <p>+2519 37 97 97 12</p>
            </div>
            <div className="flex items-center gap-4">
              <MdEmail />
              <p>info@ethiopianyouthcouncil.org</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <h1 className="uppercase text-lg">stay informed</h1>
          <p>Subscribe to our newsletter</p>
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 w-[250px]"
          />
          <input type="text" placeholder="Your email address" className="p-2" />

          <div>
            <button className="bg-slate-400 text-black  shadow-lg p-2">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

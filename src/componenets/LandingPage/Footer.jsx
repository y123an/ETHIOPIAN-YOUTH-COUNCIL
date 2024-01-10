import React from "react";
import { logo } from "../../assets/images";
import {
  FaFacebookF,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex p-5 text-sm gap-32 justify-center items-center bg-black text-white">
      <div className="flex gap-20">
        <div>
          <img src={logo} alt="" className="w-[150px]" />
        </div>
        <div className="flex gap-20">
          <div className="grid gap-2">
            <p>About EYC</p>
            <p>Our Council</p>
            <p>Privacy</p>
            <p>Accessibility</p>
          </div>
          <div className="grid gap-2 w-[150px]">
            <p>Career</p>
            <p>Frequently Asked Questions</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
      <div className="flex gap-10">
        <div className=" grid  w-[300px]">
          <div className="flex flex-col justify-center">
            <div className="flex gap-2">
              <FaFacebookF />
              <FaTwitter />
              <FaYoutube />
              <FaInstagram />
            </div>
            <p className="text-blue-500">Open Hours</p>
            <p>Mon - Fri 8:30 am - 5 pm</p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4">
              <FaLocationArrow />
              <p>Rue Amir Abdelkader 5, 10080 Agdal Riyad Rabat, Morocco</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone />
              <p>+212-675-951-514</p>
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
            <button className="bg-primary rounded-md p-2">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

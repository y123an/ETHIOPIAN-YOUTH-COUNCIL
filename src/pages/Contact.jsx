import { BiUser, BiEnvelope, BiMessageDetail } from "react-icons/bi";
import { FaMapMarkedAlt } from "react-icons/fa";
import Navbar from "../componenets/LandingPage/Navbar";
import OurCouncilImage from "../componenets/OurCouncil/OurCouncilImage";
import Footer from "../componenets/LandingPage/Footer";

const Contact = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="relative h-80 md:h-[300px] lg:h-[400px]">
        <OurCouncilImage
          title={"Contact us"}
          description={
            "Write us what you want to say and we will get back to you"
          }
        />
      </div>
      <div className="bg-gray-100 space-y-6 p-6 md:p-10 text-gray-800">
        <h2 className="common-heading p-3 font-bold text-primary underline underline-offset-4 text-3xl text-center">
          Feel Free to Contact Us
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md shadow-lg col-span-2 lg:col-span-3"
          ></iframe>

          <div className="contact-form  md:col-span-1 lg:col-span-1">
            <form
              action="https://formspree.io/f/xgedgjkr"
              method="POST"
              className="contact-inputs gap-4 p-3 flex flex-col  mx-auto"
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-lg font-bold flex items-center text-primary"
                >
                  <BiUser className="mr-2" /> Full Name
                </label>
                <input
                  type="text"
                  name="full name"
                  placeholder="Your Name"
                  autoComplete="off"
                  required
                  className="p-3 rounded-md bg-white text-gray-800 focus:outline-none focus:ring focus:border-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-lg font-bold flex items-center text-primary"
                >
                  <BiEnvelope className="mr-2" /> Email
                </label>
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  autoComplete="off"
                  required
                  className="p-3 rounded-md bg-white text-gray-800 focus:outline-none focus:ring focus:border-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-lg font-bold flex items-center text-primary"
                >
                  <BiMessageDetail className="mr-2" /> Message
                </label>
                <textarea
                  name="message"
                  cols="30"
                  rows="6"
                  autoComplete="off"
                  required
                  className="p-3 rounded-md bg-white text-gray-800 focus:outline-none focus:ring focus:border-primary"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button className="bg-primary w-[150px] p-2 font-bold rounded-lg text-white">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="contact-info">
            <div className="flex items-center gap-3">
              <FaMapMarkedAlt className="text-2xl text-primary" />
              <p>Address: 123 Street Name, City, Country</p>
            </div>
          </div>
          <div className="contact-info">
            <div className="flex items-center gap-3">
              <BiEnvelope className="text-2xl text-primary" />
              <p>Email: info@example.com</p>
            </div>
          </div>
          <div className="contact-info">
            <div className="flex items-center gap-3">
              <BiUser className="text-2xl text-primary" />
              <p>Phone: +1 234 567 890</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

import Navbar from "../componenets/LandingPage/Navbar";
import OurCouncilImage from "../componenets/OurCouncil/OurCouncilImage";
import Footer from "../componenets/LandingPage/Footer";
const Contact = () => {
  return (
    <div className="font-Dosis">
      <div>
        <div className="absolute z-10 w-[100%]">
          <Navbar />
        </div>
        <div className="h-[]">
          <OurCouncilImage />
        </div>
      </div>
      <div className="bg-[rgba(25,117,190,0.3)]  space-y-6 p-10 text-white">
        <h2 className="common-heading p-3 font-bod text-primary underline underline-offset-4 text-3xl text-center">
          Feel Free to Contact us
        </h2>
        <div className="flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="container flex justify-center ">
            <div className="contact-form">
              <form
                action="https://formspree.io/f/xgedgjkr"
                method="POST"
                className="contact-inputs gap-5 p-3 flex flex-col w-[500px]"
              >
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-xl font-bold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="full name"
                    placeholder="username"
                    autoComplete="off"
                    required
                    className="p-3 rounded-md bg-[rgba(25,117,190,0.5)] text-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-xl font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    autoComplete="off"
                    required
                    className="p-3 rounded-md bg-[rgba(25,117,190,0.5)]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-xl font-bold">
                    Message
                  </label>
                  <textarea
                    name="message"
                    cols="30"
                    rows="6"
                    autoComplete="off"
                    required
                    className="p-3 rounded-md bg-[rgba(25,117,190,0.5)]"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button className="bg-primary w-[150px] p-2 font-bold rounded-lg">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;

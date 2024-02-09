import React, { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { authBg } from "../../assets/images";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import Axios from "../../middlewares/Axios";

export default function YouthRegister() {
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cpassword === password) {
      await Axios.post("youth/register", {
        fname,
        lname,
        email,
        password,
      })
        .then((res) => {
          toast.success("successfully registered", {
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
          console.log(res);
          localStorage.setItem("youth-token", res.data.token);
          navigate("/youth/complete-profile");
        })
        .catch((err) => {
          toast.warn(err.response.data.error, {
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
        });
    } else {
      toast.warn("Password Dont Match!", {
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
    }
  };

  return (
    <>
      <section className="relative w-full h-full py-40 min-h-screen">
        <div
          className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
          style={{
            backgroundImage: "url(" + authBg + ")",
          }}
        ></div>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t space-y-5 mb-0 px-6 py-6">
                  <div className="flex w-full justify-between text-center ">
                    <div className="bg-primary w-[400px] p-2 text-white text-xl rounded-lg">
                      <button className="">As a Youth</button>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/register-organization");
                      }}
                      className=" w-[400px] p-3 text-xl rounded-lg"
                    >
                      <p>As an Organization</p>
                    </button>
                  </div>
                  {/* <div className="text-center mb-3">
                    <h6 className="text-blueGray-500 text-sm font-bold">
                      Sign up with
                    </h6>
                  </div> */}
                  {/* <div className="btn-wrapper text-center">
                    <button
                      className="bg-white gap-3 active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-md ease-linear transition-all duration-150"
                      type="button"
                    >
                      <FaGithub size={24} />
                      Github
                    </button>
                    <button
                      className="bg-white gap-3 active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-md ease-linear transition-all duration-150"
                      type="button"
                    >
                      <FaGoogle size={24} />
                      Google
                    </button>
                  </div> */}
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="capitalize text-blue-700 text-xl text-center mb-3 font-bold">
                    <small>sign up with credentials</small>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="flex gap-2">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="border-[1px] border-primary px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="First Name"
                          value={fname}
                          required
                          onChange={(e) => setFname(e.target.value)}
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="border-[1px] border-primary px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Last Name"
                          value={lname}
                          required
                          onChange={(e) => setLname(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-[1px] border-primary px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-sm font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="border-[1px] px-3 py-3  text-blueGray-600 bg-white border-primary  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="border-[1px] border-primary px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                        value={cpassword}
                        required
                        onChange={(e) => setCpassword(e.target.value)}
                      />
                    </div>

                    <div className="flex justify-between">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          id="customCheckLogin"
                          type="checkbox"
                          className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        />
                        <span className="ml-2 text-sm font-semibold text-blueGray-600">
                          I agree with the{" "}
                          <a
                            href="#pablo"
                            className="text-blue-300"
                            onClick={(e) => e.preventDefault()}
                          >
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                      <div>
                        <Link to={"/login"} className="text-blue-300">
                          Already have an account?
                        </Link>
                      </div>
                    </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-blue-600 text-white  active:bg-blueGray-600 text-lg font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 hover:bg-blue-500"
                        type="submit"
                      >
                        Create Account
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

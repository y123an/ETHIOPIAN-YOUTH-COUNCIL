import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { authBg } from "../../assets/images";
import { useNavigate } from "react-router-dom";

export default function OrganizationRegister() {
  const navigate = useNavigate();
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
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/register-youth");
                      }}
                      className=" w-[400px] p-2  text-xl rounded-lg"
                    >
                      <p className="">As a Youth</p>
                    </button>
                    <div className="bg-primary text-white w-[400px] p-3 text-xl rounded-lg">
                      <button>As an Organization</button>
                    </div>
                  </div>
                  <div className="text-center mb-3">
                    <h6 className="text-blueGray-500 text-sm font-bold">
                      Sign up with
                    </h6>
                  </div>
                  <div className="btn-wrapper text-center">
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
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-blue-700 text-xl text-center mb-3 font-bold">
                    <small>Or sign up with credentials</small>
                  </div>
                  <form>
                    <div className="flex gap-2">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Organization Name
                        </label>
                        <input
                          type="text"
                          className="border-[1px] border-primary px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Organization Email
                      </label>
                      <input
                        type="email"
                        className="border-[1px] border-primary px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
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
                      />
                    </div>

                    <div>
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
                    </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-blue-600 text-white  active:bg-blueGray-600 text-lg font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 hover:bg-blue-500"
                        type="button"
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

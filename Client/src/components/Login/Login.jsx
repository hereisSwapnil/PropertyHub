import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import validate from "../../common/validation";
import hide from "../../assets/hide.png";
import show from "../../assets/show.png";
import { FaSyncAlt, FaEnvelope, FaKey, FaShieldVirus } from "react-icons/fa";
import logo from "../../assets/logo.svg";

const Login_ = () => {
  return (
    <div className="flex w-full flex-wrap">
      {/* <!-- Login Section --> */}
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
          <img src={logo} alt="" className="h-[240px] mx-auto pr-12" />
        </div>

        <div className="my-auto flex flex-col justify-center px-8 md:justify-start md:px-24 md:pt-0 lg:px-32 text-center">
          <p className="text-3xl">Finding Home made</p>
          <p className="text-sm text-gray-500 mt-2">
            Easy &nbsp; &nbsp; • &nbsp; &nbsp; Transparent &nbsp; &nbsp; •
            &nbsp; &nbsp; Verified{" "}
          </p>
          {/* <button onClick={'handleButtonClick'}>Login</button> */}
          <form action="/get">
            <input
              type="submit"
              value="Log In"
              className="bg-black p-2 mt-5 text-lg font-bold text-white cursor-pointer hover:bg-gray-700"
            />
          </form>
          {/* Render the ChildComponent and pass the data as a prop */}
          {/*<ChildComponent data={'dataToSend'} /> */}
        </div>
      </div>

      {/* <!-- Image Section --> */}
      <div className="w-1/2 shadow-2xl">
        <img
          className="hidden h-[100vh] w-full bg-center object-cover md:block"
          src="https://i.postimg.cc/c1MkZ67B/alexander-andrews-A3-DPhh-AL6-Zg-unsplash.jpg"
        />
      </div>
    </div>
  );
};

export default Login_;

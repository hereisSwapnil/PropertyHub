import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Forgot = () => {
  const [email, setEmail] = useState("");

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const submitForgetForm = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <div className="flex justify-center bg-gray-100 md:justify-start pt-12 md:pl-12 md:-mb-12">
        <a
          href="#"
          className="bg-black text-white font-bold text-xl p-4"
          alt="Logo"
        >
          Logo
        </a>
      </div>
      <div className="min-h-screen bg-gray-100 flex justify-center">
        <div className="container max-w-screen-lg mx-auto mt-0 w-[50vw]">
          <div>
            <p className="text-3xl">Finding Home made</p>
            <p className="text-sm text-gray-500 mt-2 mb-10">
              Easy &nbsp; &nbsp; • &nbsp; &nbsp; Transparent &nbsp; &nbsp; •
              &nbsp; &nbsp; Verified{" "}
            </p>

            <div className="rounded  mb-6">
              <form
                className="flex flex-col pt-3 md:pt-8"
                onSubmit={submitForgetForm}
              >
                <div className="flex flex-col pt-4">
                  <label htmlFor="email" className="text-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleSetEmail}
                    placeholder="your@email.com"
                    className="focus:shadow-outline mt-1 w-full rounded border px-3 py-2 leading-tight text-gray-700 shadow h-10 bg-gray-50"
                  />
                </div>
                <input
                  type="submit"
                  value="Send Link"
                  className="bg-black p-2 text-lg font-bold text-white cursor-pointer hover:bg-gray-700 mt-8"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
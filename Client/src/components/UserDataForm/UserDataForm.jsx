import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const UserDataForm = () => {
  // Using user states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [govProofType, setGovProofType] = useState("");
  const [govID, setGovID] = useState("");
  const [govIDlink, setGovIDlink] = useState("");

  // Making handle functions
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleGovProofTypeChange = (e) => {
    setGovProofType(e.target.value);
  };

  const handleGovIDChange = (e) => {
    setGovID(e.target.value);
  };

  const handleGovIDLink = (e) => {
    setGovIDlink(e.target.value);
  };

  // setting up email from which the user is logined
  useEffect(() => {
    setEmail("dummy@gmail.com");
  });

  // Submitting user data
  const submitUserData = (e) => {
    e.preventDefault();
    console.log("Data submitted");
    console.log(fullName, mobile, email, govProofType, govID, govIDlink);
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
        <div className="container max-w-screen-lg mx-auto mt-0">
          <div>
            <p className="text-3xl">Finding Home made</p>
            <p className="text-sm text-gray-500 mt-2 mb-10">
              Easy &nbsp; &nbsp; • &nbsp; &nbsp; Transparent &nbsp; &nbsp; •
              &nbsp; &nbsp; Verified{" "}
            </p>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>
                <form action="#" onSubmit={submitUserData}>
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="full_name">Full Name</label>
                        <input
                          type="text"
                          name="full_name"
                          id="full_name"
                          className="h-10 border mt-1 peer rounded px-4 w-full bg-gray-50"
                          placeholder="Joe"
                          value={fullName}
                          onChange={handleFullNameChange}
                          required
                        />
                        {/* <p className="invisible peer-invalid:visible text-red-700 font-light">
                        Please enter your name
                      </p> */}
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mt-1 peer rounded px-4 w-full bg-gray-200 select-none"
                          value={email}
                          onChange={handleEmailChange}
                          placeholder="email@domain.com"
                          disabled
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="address">Mobile</label>
                        <input
                          type="number"
                          name="mobile"
                          id="mobile"
                          className="h-10 border mt-1 peer rounded px-4 w-full bg-gray-50"
                          value={mobile}
                          onChange={handleMobileChange}
                          placeholder="+91 xxx xxx xxxx"
                          required
                        />
                        {/* <p className="invisible peer-invalid:visible text-red-700 font-light">
                        Please enter your number
                      </p> */}
                      </div>

                      <div className="md:col-span-3">
                        <label htmlFor="city">Government ID Proof</label>
                        <select
                          id="govID"
                          name="govID"
                          className="h-10 border mt-1 peer rounded px-4 w-full bg-gray-50"
                          value={govProofType}
                          onChange={handleGovProofTypeChange}
                          required
                        >
                          <option>Aadhaar Card</option>
                          <option>Voter ID Card</option>
                        </select>
                        {/* <p className="invisible peer-invalid:visible text-red-700 font-light">
                        Please select one option
                      </p> */}
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="govID">Government ID</label>
                        <input
                          type="text"
                          name="govID"
                          id="govID"
                          className="h-10 border mt-1 peer rounded px-4 w-full bg-gray-50"
                          value={govID}
                          onChange={handleGovIDChange}
                          placeholder="xxxx xxxx xxxx"
                          required
                        />
                        {/* <p className="invisible peer-invalid:visible text-red-700 font-light">
                        Please enter your government ID
                      </p> */}
                      </div>

                      <div className="mx-auto md:col-span-5 mt-4 w-full">
                        <label htmlFor="dropzone-file">
                          Government ID Upload
                        </label>
                        <div className="flex items-center justify-center w-full mt-2">
                          <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full">
                              <svg
                                className="w-10 h-10 mb-3 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                              </svg>
                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">
                                  Click to upload
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                PNG, JPG, PDF (Max: 5 MB)
                              </p>
                            </div>
                            <input
                              id="dropzone-file"
                              type="file"
                              className="hidden peer"
                              value={govIDlink}
                              onChange={handleGovIDLink}
                              required
                            />
                          </label>
                          <p className="invisible peer-invalid:visible text-red-700 font-light">
                            Please upload ID
                          </p>
                        </div>
                      </div>

                      <div className="md:col-span-5 text-left mt-5">
                        <div className="inline-flex items-end">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDataForm;

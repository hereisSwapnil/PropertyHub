import { useParams } from "react-router-dom";
import Header from "../Home/Header";
import dataSet from "../Home/constants";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Navbar from "../Navbar/Navbar";

const SinglePage = () => {
  const { id } = useParams();
  const [Data, SetData] = useState();
  const [Count, SetCount] = useState(0);
  const [Coord, SetCoord] = useState();

  useEffect(() => {
    SetData(dataSet[id]);
    dataSet[id].image.map((img) => {
      console.log(img);
    });
    console.log("Data", dataSet[id]);
  }, [id]);

  useEffect(() => {
    SetCoord([
      dataSet[id].coordinates.latitude,
      dataSet[id].coordinates.longitude,
    ]);
  }, [id]);

  const nextimage = () => {
    if (Data && Count != Data.image.length - 1) {
      SetCount((prev) => {
        return prev + 1;
      });
    }
  };
  const previmage = () => {
    if (Data && Count != 0) {
      SetCount((prev) => {
        return prev - 1;
      });
    }
  };
  const blackOptions = { color: "black" };
  const coord = [12.9716, 77.5946];

  const Map = () => {
    return <></>;
  };

  console.log(Coord);

  function getSpanColorClass(status) {
    switch (status) {
      case "Approved":
        return "text-green-900 bg-green-200";
      case "Pending":
        return "text-yellow-900 bg-yellow-200";
      case "Rejected":
        return "text-red-900 bg-red-200";
      default:
        return "text-gray-900 bg-gray-200";
    }
  }

  return (
    <>
      <Navbar />
      {Coord && (
        <>
          <section class="py-10 font-poppins">
            <div class="max-w-6xl px-4 mx-auto">
              <div class="flex flex-wrap mb-24 -mx-4">
                <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                  <div class="sticky top-0 overflow-hidden bg-white z-10">
                    <div class="relative mb-6 lg:mb-10 lg:h-96 justify-center">
                      <a
                        class="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2 drop-shadow-2xl shadow-lg"
                        onClick={previmage}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-black"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                          ></path>
                        </svg>
                      </a>
                      <img
                        class="object-contain w-full lg:h-full"
                        src={Data && Data.image[Count]}
                        alt=""
                      />
                      <a
                        class="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
                        onClick={nextimage}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-black"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div class="flex-wrap hidden -mx-2 md:flex justify-center">
                      {Data &&
                        Data.image.map((img) => (
                          <div className="w-1/2 p-2 sm:w-1/4" key={img}>
                            <a
                              className="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                              href="#"
                            >
                              <img
                                className="object-contain w-full lg:h-28"
                                src={img}
                                alt=""
                              />
                            </a>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                <div class="w-full px-4 md:w-1/2">
                  <div class="lg:pl-20">
                    <div class="mb-6 ">
                      <h2 class="max-w-xl mt-6 text-2xl font-semibold leading-loose tracking-wide text-black">
                        {Data && Data.title}
                      </h2>
                      <p>
                        <span class="inline-flex items-center px-3 py-1 bg-green-200 hover:bg-green-300 text-xs rounded-full font-semibold text-green-600 mb-6">
                          <span>Verified</span>
                        </span>
                      </p>
                      <p class="inline-block text-xl font-semibold text-black">
                        <span>Rs. {Data.price}</span>
                      </p>
                    </div>
                    <div class="mb-6">
                      <h2 class="mb-2 text-lg font-bold text-black">
                        Details :
                      </h2>
                      <div class="bg-gray-100 dark:bg-gray-100 rounded-xl">
                        <div class="p-3 lg:p-5 ">
                          <div class="p-2 rounded-xl lg:p-6 dark:bg-gray-50 bg-gray-50">
                            <div class="flex flex-wrap justify-center gap-x-10 gap-y-4">
                              {/*  */}
                              <div class="w-full mb-4 md:w-2/5">
                                <div class="flex align-center my-auto">
                                  <span class="mr-3 text-gray-900">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <circle
                                        cx="12"
                                        cy="9"
                                        r="2.5"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                      />
                                      <path
                                        d="M9 17L18 6"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M6 12L14 2.5"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M7 5L10 7.5"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M12.0097 22C11.656 22 11.4911 21.8487 11.3085 21.341C10.8283 19.6517 9.93051 18.1911 8.84193 16.8195C7.85602 15.5031 6.40188 14.0036 5.64625 12.2964C3.54607 7.65487 6.8014 1.99238 11.9927 2.00003C17.3276 1.98532 20.5359 7.85105 18.2565 12.5446C17.5862 13.7271 16.8028 14.8433 15.917 15.878C14.5359 17.5095 13.2946 19.2753 12.7057 21.3436C12.5703 21.7426 12.3955 22 12.0097 22Z"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </span>
                                  <div>
                                    <p class="mb-2 text-sm font-medium text-gray-800">
                                      Address
                                    </p>
                                    <h2 class="text-base font-semibold text-gray-800">
                                      {Data && Data.address}
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              {/*  */}
                              {/*  */}
                              <div class="w-full mb-4 md:w-2/5">
                                <div class="flex align-center my-auto">
                                  <span class="mr-3 text-gray-900">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13 16.7033C13 15.7854 13 15.3265 13.2034 14.9292C13.4067 14.5319 13.7859 14.2501 14.5442 13.6866L15.0442 13.315C16.2239 12.4383 16.8138 12 17.5 12C18.1862 12 18.7761 12.4383 19.9558 13.315L20.4558 13.6866C21.2141 14.2501 21.5933 14.5319 21.7966 14.9292C22 15.3265 22 15.7854 22 16.7033V18.1782C22 19.9798 22 20.8806 21.4142 21.4403C20.8284 22 19.8856 22 18 22H13V16.7033Z"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M18 12.0002V5C18 2.518 17.482 2 15 2H11C8.518 2 8 2.518 8 5V22"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <ellipse
                                        cx="3.5"
                                        cy="14"
                                        rx="1.5"
                                        ry="2"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                      />
                                      <path
                                        d="M3.5 16V22"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                      />
                                      <path
                                        d="M2 22H20"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                      />
                                      <path
                                        d="M12 6H14M12 9H14"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                      />
                                      <path
                                        d="M17.5 22L17.5 20"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </span>
                                  <div>
                                    <p class="mb-2 text-sm font-medium text-gray-800">
                                      City
                                    </p>
                                    <h2 class="text-base font-semibold text-gray-800">
                                      {Data && Data.city}
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              {/*  */}
                              {/*  */}
                              <div class="w-full mb-4 md:w-2/5">
                                <div class="flex align-center my-auto">
                                  <span class="mr-3 text-gray-900">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13 16.7033C13 15.7854 13 15.3265 13.2034 14.9292C13.4067 14.5319 13.7859 14.2501 14.5442 13.6866L15.0442 13.315C16.2239 12.4383 16.8138 12 17.5 12C18.1862 12 18.7761 12.4383 19.9558 13.315L20.4558 13.6866C21.2141 14.2501 21.5933 14.5319 21.7966 14.9292C22 15.3265 22 15.7854 22 16.7033V18.1782C22 19.9798 22 20.8806 21.4142 21.4403C20.8284 22 19.8856 22 18 22H13V16.7033Z"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M18 12.0002V5C18 2.518 17.482 2 15 2H11C8.518 2 8 2.518 8 5V22"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <ellipse
                                        cx="3.5"
                                        cy="14"
                                        rx="1.5"
                                        ry="2"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                      />
                                      <path
                                        d="M3.5 16V22"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                      />
                                      <path
                                        d="M2 22H20"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                      />
                                      <path
                                        d="M12 6H14M12 9H14"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                      />
                                      <path
                                        d="M17.5 22L17.5 20"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </span>
                                  <div>
                                    <p class="mb-2 text-sm font-medium text-gray-800">
                                      State
                                    </p>
                                    <h2 class="text-base font-semibold text-gray-800">
                                      {Data && Data.state}
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              {/*  */}
                              {/*  */}
                              <div class="w-full mb-4 md:w-2/5">
                                <div class="flex align-center my-auto">
                                  <span class="mr-3 text-gray-900">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <circle
                                        cx="12"
                                        cy="6"
                                        r="4"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M5 16C3.7492 16.6327 3 17.4385 3 18.3158C3 20.3505 7.02944 22 12 22C16.9706 22 21 20.3505 21 18.3158C21 17.4385 20.2508 16.6327 19 16"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M12 10L12 18"
                                        stroke="#141B34"
                                        stroke-width="1.5"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </span>
                                  <div>
                                    <p class="mb-2 text-sm font-medium text-gray-800">
                                      Pincode
                                    </p>
                                    <h2 class="text-base font-semibold text-gray-800">
                                      {Data && Data.pincode}
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              {/*  */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                      <p class="mt-2 text-md text-black font-bold">
                        Description
                        <br />
                        <span class="text-gray-800 font-thin">
                          {Data && Data.about}
                        </span>
                      </p>
                      <p class="mt-10 text-md text-black font-bold">
                        Owner Details
                        <br />
                      </p>
                      <div className="mt-5 flex flex-wrap">
                        {/*  */}
                        <div class="w-full mb-10 md:w-2/5">
                          <div class="flex align-center my-auto">
                            <span class="mr-3 text-gray-900">
                              {/* svg */}
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 2C17.5237 2 22 6.47778 22 12C22 17.5222 17.5237 22 12 22"
                                  stroke="#141B34"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9 21.5C7.81163 21.0953 6.69532 20.5107 5.72302 19.7462M5.72302 4.25385C6.69532 3.50059 7.81163 2.90473 9 2.5M2 10.2461C2.21607 9.08813 2.66019 7.96386 3.29638 6.94078M2 13.7539C2.21607 14.9119 2.66019 16.0361 3.29638 17.0592"
                                  stroke="#141B34"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M8 16.5C10.0726 14.302 13.9051 14.1986 16 16.5M14.2179 9.75C14.2179 10.9926 13.2215 12 11.9925 12C10.7634 12 9.76708 10.9926 9.76708 9.75C9.76708 8.50736 10.7634 7.5 11.9925 7.5C13.2215 7.5 14.2179 8.50736 14.2179 9.75Z"
                                  stroke="#141B34"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                />
                              </svg>
                            </span>
                            <div>
                              <p class="mb-2 text-sm font-medium text-gray-800">
                                Name
                              </p>
                              <h2 class="text-base font-semibold text-gray-800">
                                {Data && Data.owner.name && Data.owner.name
                                  ? Data.owner.name
                                  : "Null"}
                              </h2>
                            </div>
                          </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div class="w-full mb-10 md:w-2/5">
                          <div class="flex align-center my-auto">
                            <span class="mr-3 text-gray-900">
                              {/* svg */}
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.08793 7.57126L1.3527 7.71937L1.35275 7.71962L2.08793 7.57126ZM8 8L8.51137 8.54863L8.92208 8.16582L8.67048 7.6639L8 8ZM4.99233 2L5.6628 1.6639C5.56084 1.4605 5.37205 1.31438 5.14958 1.26667C4.92711 1.21896 4.69501 1.27483 4.51861 1.41855L4.99233 2ZM7.37927 16.6207L7.9098 16.0906L7.90941 16.0902L7.37927 16.6207ZM16.4285 21.9122L16.2801 22.6474L16.2804 22.6474L16.4285 21.9122ZM15.9997 16.0001L16.3358 15.3296L15.8339 15.078L15.4511 15.4887L15.9997 16.0001ZM21.9997 19.0078L22.5812 19.4815C22.7249 19.3051 22.7808 19.073 22.7331 18.8505C22.6854 18.6281 22.5392 18.4393 22.3358 18.3373L21.9997 19.0078ZM1.35275 7.71962C1.64441 9.16491 2.13033 10.5909 3.11985 12.3156L4.42092 11.5692C3.51363 9.98777 3.08368 8.71413 2.82311 7.42289L1.35275 7.71962ZM4.28176 12.491L8.51137 8.54863L7.48863 7.45137L3.25901 11.3938L4.28176 12.491ZM8.67048 7.6639L5.6628 1.6639L4.32185 2.3361L7.32952 8.3361L8.67048 7.6639ZM4.51861 1.41855C3.00645 2.65052 0.736597 4.66102 1.3527 7.71937L2.82316 7.42315C2.40334 5.33917 3.88184 3.87213 5.46605 2.58145L4.51861 1.41855ZM3.11985 12.3156C4.11578 14.0515 5.39178 15.695 6.84914 17.1513L7.90941 16.0902C6.53943 14.7212 5.34646 13.1824 4.42092 11.5692L3.11985 12.3156ZM16.5768 21.177C15.2856 20.9164 14.012 20.4865 12.4306 19.5792L11.6841 20.8803C13.4088 21.8698 14.8348 22.3557 16.2801 22.6474L16.5768 21.177ZM12.606 20.7411L16.5484 16.5115L15.4511 15.4887L11.5087 19.7184L12.606 20.7411ZM15.6636 16.6706L21.6636 19.6783L22.3358 18.3373L16.3358 15.3296L15.6636 16.6706ZM21.4183 18.5341C20.1276 20.1183 18.6606 21.5968 16.5766 21.177L16.2804 22.6474C19.3387 23.2635 21.3492 20.9937 22.5812 19.4815L21.4183 18.5341ZM12.4306 19.5792C10.8174 18.6537 9.27883 17.4606 7.9098 16.0906L6.84874 17.1509C8.305 18.6082 9.94815 19.8843 11.6841 20.8803L12.4306 19.5792Z"
                                  fill="#141B34"
                                />
                              </svg>
                            </span>
                            <div>
                              <p class="mb-2 text-sm font-medium text-gray-800">
                                Number
                              </p>
                              <h2 class="text-base font-semibold text-gray-800">
                                {Data && Data.owner.mobile && Data.owner.mobile
                                  ? Data.owner.mobile
                                  : "Null"}
                              </h2>
                            </div>
                          </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div class="w-full mb-10 md:w-2/5">
                          <div class="flex align-center my-auto">
                            <span class="mr-3 text-gray-900">
                              {/* svg */}
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7 7.5L9.94202 9.23943C11.6572 10.2535 12.3428 10.2535 14.058 9.23943L17 7.5"
                                  stroke="#141B34"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M21.996 10C21.9933 9.63328 21.9894 9.77017 21.9842 9.5265C21.9189 6.46005 21.8862 4.92682 20.7551 3.79105C19.6239 2.65528 18.0497 2.61571 14.9012 2.53658C12.9607 2.48781 11.0393 2.48781 9.09882 2.53657C5.95033 2.6157 4.37608 2.65526 3.24495 3.79103C2.11382 4.92681 2.08114 6.46003 2.01576 9.52648C1.99474 10.5125 1.99475 11.4926 2.01577 12.4786C2.08114 15.5451 2.11383 17.0783 3.24496 18.2141C4.37608 19.3498 5.95033 19.3894 9.09883 19.4685C9.7068 19.4838 10.4957 19.4943 11 19.5"
                                  stroke="#141B34"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M15.5861 18.6482C14.9573 19.0167 13.3087 19.7693 14.3128 20.711C14.8033 21.171 15.3496 21.5 16.0365 21.5H19.9557C20.6425 21.5 21.1888 21.171 21.6794 20.711C22.6835 19.7693 21.0348 19.0167 20.4061 18.6482C18.9316 17.7839 17.0606 17.7839 15.5861 18.6482Z"
                                  stroke="#141B34"
                                  stroke-width="1.5"
                                />
                                <path
                                  d="M19.9961 14C19.9961 15.1046 19.1007 16 17.9961 16C16.8915 16 15.9961 15.1046 15.9961 14C15.9961 12.8954 16.8915 12 17.9961 12C19.1007 12 19.9961 12.8954 19.9961 14Z"
                                  stroke="#141B34"
                                  stroke-width="1.5"
                                />
                              </svg>
                            </span>
                            <div>
                              <p class="mb-2 text-sm font-medium text-gray-800">
                                Email
                              </p>
                              <h2 class="text-base font-semibold text-gray-800">
                                {Data && Data.owner.email && Data.owner.email
                                  ? Data.owner.email
                                  : "Null"}
                              </h2>
                            </div>
                          </div>
                        </div>
                        {/*  */}
                      </div>
                    </div>
                    <div class="mb-6 "></div>
                    <div class="flex flex-wrap items-center mb-6">
                      <a
                        href="#"
                        class="w-full px-4 py-3 text-center text-blue-600 bg-blue-100 border border-blue-600 dark:hover:bg-gray-900 dark:text-white dark:border-gray-700 dark:bg-gray-700 hover:bg-blue-600 hover:text-gray-100 lg:w-1/2 rounded-xl"
                      >
                        Enquire Now
                      </a>
                    </div>
                    <div>
                      <div>
                        <div class="container mx-auto px-4 sm:px-8">
                          <div class="py-8">
                            <div>
                              <h2 class="text-2xl font-semibold leading-tight">
                                Users
                              </h2>
                            </div>
                            <div class="my-2 flex sm:flex-row flex-col">
                              <div class="flex flex-row mb-1 sm:mb-0">
                                <div class="relative">
                                  <select class="appearance-none h-full rounded-r border-t border-l sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                    <option>All</option>
                                    <option>Approved</option>
                                    <option>Pending</option>
                                    <option>Rejected</option>
                                  </select>
                                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                      class="fill-current h-4 w-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div class="block relative">
                                <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                  <svg
                                    viewBox="0 0 24 24"
                                    class="h-4 w-4 fill-current text-gray-500"
                                  >
                                    <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                                  </svg>
                                </span>
                                <input
                                  placeholder="Search"
                                  class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                                />
                              </div>
                            </div>
                            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                              <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table class="min-w-full leading-normal">
                                  <thead>
                                    <tr>
                                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Document
                                      </th>
                                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Status
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {/*  */}
                                    {Data.documents.map((doc) => (
                                      <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <p className="text-gray-900 whitespace-no-wrap">
                                            {doc.name}
                                          </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <span
                                            className={`relative inline-block px-3 py-1 font-semibold rounded-full leading-tight ${getSpanColorClass(
                                              doc.status
                                            )}`}
                                          >
                                            <span
                                              aria-hidden
                                              className="absolute inset-0 opacity-50 rounded-full"
                                            ></span>
                                            <span className="relative">
                                              {doc.status}
                                            </span>
                                          </span>
                                        </td>
                                      </tr>
                                    ))}
                                    {/*  */}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto justify-center flex mb-10">
              <MapContainer
                center={Coord}
                zoom={40}
                scrollWheelZoom={false}
                style={{
                  height: "600px",
                  width: "1200px",
                  textAlign: "center",
                  borderRadius: "16px",
                }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={Coord}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <div>
              <div class="container mx-auto px-4 sm:px-8">
                <div class="py-8">
                  <div>
                    <h2 class="text-2xl font-semibold leading-tight">
                      Additional Details
                    </h2>
                  </div>
                  <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                      <table class="min-w-full leading-normal">
                        <thead>
                          <tr>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Sno.
                            </th>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Title
                            </th>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Content
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {/*  */}
                          <tr>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div class="flex items-center">
                                <div class="ml-3">
                                  <p class="text-gray-900 whitespace-no-wrap">
                                    1.
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                Land Type
                              </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {Data && Data.landType && Data.landType
                                  ? Data.landType
                                  : "Null"}
                              </p>
                            </td>
                          </tr>
                          {/*  */}
                          {/*  */}
                          <tr>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div class="flex items-center">
                                <div class="ml-3">
                                  <p class="text-gray-900 whitespace-no-wrap">
                                    2.
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                Property Type
                              </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {Data &&
                                Data.documentsData.propertyType &&
                                Data.documentsData.propertyType
                                  ? Data.documentsData.propertyType
                                  : "Null"}
                              </p>
                            </td>
                          </tr>
                          {/*  */}
                          {/*  */}
                          <tr>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div class="flex items-center">
                                <div class="ml-3">
                                  <p class="text-gray-900 whitespace-no-wrap">
                                    3.
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                Loan Taken
                              </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {Data &&
                                Data.documentsData.loanAmount &&
                                Data.documentsData.loanAmount
                                  ? Data.documentsData.loanAmount
                                  : "Null"}
                              </p>
                            </td>
                          </tr>
                          {/*  */}
                          {/*  */}
                          <tr>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div class="flex items-center">
                                <div class="ml-3">
                                  <p class="text-gray-900 whitespace-no-wrap">
                                    4.
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                Complainces Followed
                              </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {Data &&
                                Data.documentsData.propertyData
                                  .complaincesFollowed &&
                                Data.documentsData.propertyData
                                  .complaincesFollowed
                                  ? Data.documentsData.propertyData
                                      .complaincesFollowed
                                  : "Null"}
                              </p>
                            </td>
                          </tr>
                          {/*  */}
                          {/*  */}
                          <tr>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div class="flex items-center">
                                <div class="ml-3">
                                  <p class="text-gray-900 whitespace-no-wrap">
                                    5.
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                Parking Alloted
                              </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {Data &&
                                Data.documentsData.propertyData
                                  .parkingAlloted &&
                                Data.documentsData.propertyData.parkingAlloted
                                  ? Data.documentsData.propertyData
                                      .parkingAlloted
                                  : "Null"}
                              </p>
                            </td>
                          </tr>
                          {/*  */}
                          {/*  */}
                          <tr>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div class="flex items-center">
                                <div class="ml-3">
                                  <p class="text-gray-900 whitespace-no-wrap">
                                    6.
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                Tower Number
                              </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {Data &&
                                Data.documentsData.propertyData.towerNumber &&
                                Data.documentsData.propertyData.towerNumber
                                  ? Data.documentsData.propertyData.towerNumber
                                  : "Null"}
                              </p>
                            </td>
                          </tr>
                          {/*  */}
                          {/*  */}
                          <tr>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div class="flex items-center">
                                <div class="ml-3">
                                  <p class="text-gray-900 whitespace-no-wrap">
                                    7.
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                Flat Number
                              </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {Data &&
                                Data.documentsData.propertyData.flatNumber &&
                                Data.documentsData.propertyData.flatNumber
                                  ? Data.documentsData.propertyData.flatNumber
                                  : "Null"}
                              </p>
                            </td>
                          </tr>
                          {/*  */}
                          {/*  */}
                          <tr>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div class="flex items-center">
                                <div class="ml-3">
                                  <p class="text-gray-900 whitespace-no-wrap">
                                    8.
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                Number of Rooms
                              </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {Data &&
                                Data.documentsData.propertyData.noOfRooms &&
                                Data.documentsData.propertyData.noOfRooms
                                  ? Data.documentsData.propertyData.noOfRooms
                                  : "Null"}
                              </p>
                            </td>
                          </tr>
                          {/*  */}
                          {/*  */}
                          <tr>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div class="flex items-center">
                                <div class="ml-3">
                                  <p class="text-gray-900 whitespace-no-wrap">
                                    9.
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                Floor Size
                              </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {Data &&
                                Data.documentsData.propertyData.size &&
                                Data.documentsData.propertyData.size
                                  ? Data.documentsData.propertyData.size
                                  : "Null"}
                              </p>
                            </td>
                          </tr>
                          {/*  */}
                          {/*  */}
                          <tr>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div class="flex items-center">
                                <div class="ml-3">
                                  <p class="text-gray-900 whitespace-no-wrap">
                                    10.
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                Pending Society Maintainence
                              </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {Data &&
                                Data.documentsData
                                  .societyMaintenanceAmountPending &&
                                Data.documentsData
                                  .societyMaintenanceAmountPending
                                  ? Data.documentsData
                                      .societyMaintenanceAmountPending
                                  : "Null"}
                              </p>
                            </td>
                          </tr>
                          {/*  */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default SinglePage;
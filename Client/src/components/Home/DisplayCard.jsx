import SidePanel from "./Sidepanel";
import { useEffect, useState } from "react";
import axios from "axios";
import dataSet from "./constants";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

const DisplayCard = () => {
  // useEffect(()=>{
  //     axios.get('Backend').then(res=>{
  //        SetData(res.data)
  //     },[])

  // },[])

  return (
    <>
      <div className="flex gap-20">
        <SidePanel />
        <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {dataSet.map((data) => {
            return (
              <Card className="w-full max-w-[26rem] shadow-lg mt-5 h-fit pb-5 min-h-[615px]">
                <CardHeader floated={false} color="blue-gray">
                  <img src={data.image[0]} alt="Image" className="h-80"/>
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                  <IconButton
                    size="sm"
                    color="red"
                    variant="text"
                    className="!absolute top-4 right-4 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </IconButton>
                </CardHeader>
                <CardBody className="p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {data.title}
                    </Typography>
                    {/* <Typography
                    color="blue-gray"
                    className="flex items-center gap-1.5 font-normal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="-mt-0.5 h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    5.0
                  </Typography> */}
                  </div>
                  {/* <Typography color="gray" className="truncate line-clamp-3">
                  {data.about}
                </Typography> */}
                  <Typography color="gray">
                    <p class="mt-2 text-lg text-gray-800 line-clamp-1 truncate">
                      {data.address}
                    </p>
                  </Typography>
                  <Typography
                    color="gray"
                    className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl mt-5"
                  >
                    <span class="text-md mr-1 uppercase">₹</span>
                    <span class="text-lg">{data.price}</span>/sq ft
                  </Typography>
                </CardBody>
                <CardFooter className="pt-3 px-5 align-bottom mt-auto">
                  <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                    <Tooltip content={data.landType}>
                      <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 2L2 7"
                            stroke="#141B34"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 3V22H7C5.11438 22 4.17157 22 3.58579 21.4142C3 20.8284 3 19.8856 3 18V7"
                            stroke="#141B34"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 7L22 12"
                            stroke="#141B34"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10 21.9997H17C18.8856 21.9997 19.8284 21.9997 20.4142 21.4139C21 20.8281 21 19.8853 21 17.9997V11.5"
                            stroke="#141B34"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18 10L18 7"
                            stroke="#141B34"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7 11H8M7 15H8"
                            stroke="#141B34"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16 14H17"
                            stroke="#141B34"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.5 22V18"
                            stroke="#141B34"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </Tooltip>
                    <Tooltip
                      content={data.documentsData.propertyData.size + " sq ft"}
                    >
                      <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 9.97873C5 11.095 6.79086 12 9 12V9.97873C9 8.98454 9 8.48745 8.60252 8.18419C8.20504 7.88092 7.811 7.99435 7.02292 8.22121C5.81469 8.56902 5 9.2258 5 9.97873Z"
                            stroke="#141B34"
                            stroke-width="1.5"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16 8.5C16 10.433 12.866 12 9 12C5.13401 12 2 10.433 2 8.5C2 6.567 5.13401 5 9 5C12.866 5 16 6.567 16 8.5Z"
                            stroke="#141B34"
                            stroke-width="1.5"
                          />
                          <path
                            d="M2 9V15.6667C2 17.5076 5.13401 19 9 19H20C20.9428 19 21.4142 19 21.7071 18.7071C22 18.4142 22 17.9428 22 17V14C22 13.0572 22 12.5858 21.7071 12.2929C21.4142 12 20.9428 12 20 12H9"
                            stroke="#141B34"
                            stroke-width="1.5"
                          />
                          <path
                            d="M18 19V17M14 19V17M10 19V17M6 18.5V16.5"
                            stroke="#141B34"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </Tooltip>
                    <Tooltip content={"Map"}>
                      <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 16.5C22 20 17.5 22 17.5 22C17.5 22 13 20 13 16.5C13 14.0147 15.0147 12 17.5 12C19.9853 12 22 14.0147 22 16.5Z"
                            stroke="#141B34"
                            stroke-width="1.5"
                          />
                          <path
                            d="M11 14.5C9.067 14.5 7.5 12.933 7.5 11C7.5 9.067 9.067 7.5 11 7.5C12.7533 7.5 14.2056 8.78927 14.4604 10.4715"
                            stroke="#141B34"
                            stroke-width="1.5"
                          />
                          <path
                            d="M19.9662 10.2147C19.5684 5.61188 15.706 2 11 2C6.02944 2 2 6.02944 2 11C2 18 11 22 11 22C11 22 11.6605 21.7065 12.6235 21.1393"
                            stroke="#141B34"
                            stroke-width="1.5"
                          />
                          <path
                            d="M17.5 16.5H17.509"
                            stroke="#141B34"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </Tooltip>
                    <Tooltip content="Verified">
                      <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.8606 5.39176C22.2875 6.49635 21.6888 7.2526 20.5301 7.99754C19.5951 8.5986 18.4039 9.24975 17.1417 10.363C15.9044 11.4543 14.6968 12.7687 13.6237 14.0625C12.5549 15.351 11.6465 16.586 11.0046 17.5005C10.5898 18.0914 10.011 18.9729 10.011 18.9729C9.60281 19.6187 8.86895 20.0096 8.08206 19.9998C7.295 19.99 6.57208 19.5812 6.18156 18.9251C5.18328 17.248 4.41296 16.5857 4.05891 16.3478C3.11158 15.7112 2 15.6171 2 14.1335C2 12.9554 2.99489 12.0003 4.22216 12.0003C5.08862 12.0323 5.89398 12.373 6.60756 12.8526C7.06369 13.1591 7.54689 13.5645 8.04948 14.0981C8.63934 13.2936 9.35016 12.3653 10.147 11.4047C11.3042 10.0097 12.6701 8.51309 14.1349 7.22116C15.5748 5.95115 17.2396 4.76235 19.0042 4.13381C20.1549 3.72397 21.4337 4.28718 21.8606 5.39176Z"
                            stroke="#141B34"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </Tooltip>

                    <Tooltip content="And +20 more">
                      <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        +20
                      </span>
                    </Tooltip>
                  </div>
                  <Button className="p-4 mt-5" fullWidth={true}>
                    <Link to={`/property/${data.id}`}>View More</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayCard;

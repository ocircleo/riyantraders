import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import TopCrasoule from "./TopCrasoule";
import { API } from "@/app/utls/api/API";

const Home = async ({ request }) => {
  let response, data, dataArray;

  try {
    response = await fetch(API + `user/get_landing_img`, { cache: "no-cache" });
    data = await response.json();
    dataArray = data?.result ?? [
      { imageUrl: "/failedimg.png", targetLink: "/" },
      { imageUrl: "/failedimg.png", targetLink: "/" },
    ];
  } catch (error) {
    console.log(error);
  }
  return (
    <>
      <div className="w-full p-2 lg:p-0 lg:w-10/12 h-auto  mt-6">
        <TopCrasoule images={dataArray}></TopCrasoule>
      </div>
      <div className="text-center my-9 border-b-2 border-indigo-100 w-full p-2 lg:p-0 lg:w-10/12 h-auto  ">
        <p className="text-xl  font-semibold">Popular products</p>
        <p className="text-sm font-semibold text-gray-700 pb-2">
          Products that people love the most !
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 w-full lg:w-9/12 relative p-4">
        {/* <Sidebar></Sidebar> */}

        <Main request={request}></Main>
      </div>
    </>
  );
};

export default Home;

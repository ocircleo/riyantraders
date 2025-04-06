import ErrorPage from "@/app/error";
import { API } from "@/app/utls/api/API";

import React from "react";
import ImageSlider from "./ImageSlider";
import Link from "next/link";

const Page = async (request) => {
  let url = request.params.url;
  let data = {};
  try {
    let res = await fetch(API + "user/item/" + url, { cache: "no-cache" });
    let result = await res.json();
    data = result.result;
  } catch (error) {
    return <ErrorPage></ErrorPage>;
  }
  if (data == {} || !data) return <ErrorPage></ErrorPage>;
  if (data.category == "laptop") return <Laptop {...data}></Laptop>;
  else return <General {...data}></General>;
};
const Laptop = (data) => {
  return (
    <div className="w-full lg:w-11/12 mx-auto p-2 md:p-6 ">
      <div className="grid grid-cols-9 gap-4">
        {/* Image slider below */}
        <div className="col-span-9 lg:col-span-5 aspect-video bg-white">
          <ImageSlider images={data?.images ?? []}></ImageSlider>
        </div>
        <div className="col-span-9 lg:col-span-4  p-3 md:p-4 lg:p-6 bg-white shadow">
          <h1 className="capitalize text-xl font-medium px-1  py-1 rounded bg-slate-50">
            {data?.laptop.brand} {data?.laptop?.model}, {data?.memory?.ram} GB
            Ram {data?.display?.size} Inch Display {data?.storage?.capacity} GB{" "}
            {data?.storage?.type}
          </h1>
          <div className=" pt-3 pe-3 pb-3 ps-1 mt-2">
            <p className="text-sm text-gray-900">Price</p>
            <p className="text-lg bg-green-50 text-green-500 inline-block p-1 ">
              {data?.laptop?.price} TK. only
            </p>
          </div>
          <div className="flex flex-col gap-1 pb-4">
            <p className="font-semibold text-lg ">Core Features</p>
            <p>Model: {data?.laptop?.model}</p>
            <p>
              Ram: {data?.memory?.ram} GB ({data?.memory?.ramType})
            </p>
            <p>
              Processor: {data?.processor?.brand} {data?.processor?.model}
            </p>
            <p>
              Storage: {data?.storage?.capacity} {data?.storage?.type}
            </p>
            <p className="font-medium">
              Available Stock: {data?.laptop?.stock}
            </p>
          </div>
          <Link
            href={"/order?items=" + data._id}
            className="bg-green-500 text-white font-semibold px-12 py-2 text-lg "
          >
            Order Now
          </Link>
        </div>
      </div>
      <div class="bg-white p-6 rounded-lg  w-full lg:w-4/6 mt-14">
        <h2 class="text-2xl font-bold mb-8 text-gray-800 underline underline-offset-8">
          Laptop Details
        </h2>
        <div class="flex flex-col space-y-3 w-full">
          <div class="flex w-full flex-col md:flex-row border-b pb-3 ">
            <span class="text-sm text-gray-800 md:text-base md:text-black md:w-2/6">
              Brand
            </span>
            <span class="text-gray-800 capitalize font-medium">
              {data?.laptop?.brand || "N/A"}
            </span>
          </div>
          <div class="flex w-full flex-col md:flex-row border-b pb-3">
            <span class="text-sm text-gray-800 md:text-base md:text-black md:w-2/6">
              Model
            </span>
            <span class="text-gray-800 capitalize font-medium">
              {data?.laptop?.model || "N/A"}
            </span>
          </div>
          <div class="flex w-full flex-col md:flex-row border-b pb-3">
            <span class="text-sm text-gray-800 md:text-base md:text-black md:w-2/6">
              Price
            </span>
            <span class="text-green-500 capitalize font-medium">
              {data?.laptop?.price?.toLocaleString() || "N/A"} Tk. Only
            </span>
          </div>
          <div class="flex w-full flex-col md:flex-row border-b pb-3">
            <span class="text-sm text-gray-800 md:text-base md:text-black md:w-2/6">
              Processor
            </span>
            <span class="text-gray-800 capitalize font-medium">
              {data?.processor?.model || "N/A"}
            </span>
          </div>
          <div class="flex w-full flex-col md:flex-row border-b pb-3">
            <span class="text-sm text-gray-800 md:text-base md:text-black md:w-2/6">
              Display
            </span>
            <span class="text-gray-800 capitalize font-medium">
              {data?.display?.size} {data?.display?.type} -{" "}
              {data?.display?.resolution}
            </span>
          </div>
          <div class="flex w-full flex-col md:flex-row border-b pb-3">
            <span class="text-sm text-gray-800 md:text-base md:text-black md:w-2/6">
              RAM
            </span>
            <span class="text-gray-800  font-medium">
              {data?.memory?.ram} GB ({data?.memory?.ramType})
            </span>
          </div>
          <div class="flex w-full flex-col md:flex-row border-b pb-3">
            <span class="text-sm text-gray-800 md:text-base md:text-black md:w-2/6">
              Storage
            </span>
            <span class="text-gray-800 font-medium">
              {data?.storage?.capacity} GB ({data?.storage?.type})
            </span>
          </div>
          <div class="flex w-full flex-col md:flex-row border-b pb-3">
            <span class="text-sm text-gray-800 md:text-base md:text-black md:w-2/6">
              Graphics
            </span>
            <span class="text-gray-800  font-medium">
              {data?.graphics?.size} GB ({data?.graphics?.ramType})
            </span>
          </div>
          <div class="flex w-full flex-col md:flex-row border-b pb-3">
            <span class="text-sm text-gray-800 md:text-base md:text-black md:w-2/6">
              Color
            </span>
            <span class="text-gray-800 capitalize font-medium">
              {data?.physicalSpecification?.color || "N/A"}
            </span>
          </div>
          <div class="flex w-full flex-col md:flex-row border-b pb-3">
            <span class="text-sm text-gray-800 md:text-base md:text-black md:w-2/6">
              Weight
            </span>
            <span class="text-gray-800 capitalize font-medium">
              {data?.physicalSpecification?.weight || "N/A"}
            </span>
          </div>
          <div class="flex w-full flex-col md:flex-row border-b pb-3">
            <span class="text-sm text-gray-800 md:text-base md:text-black md:w-2/6">
              OS
            </span>
            <span class="text-gray-800 capitalize font-medium">
              {data?.os || "N/A"}
            </span>
          </div>
          <div class="flex w-full flex-col md:flex-row border-b pb-3">
            <span class="text-sm text-gray-800 md:text-base md:text-black md:w-2/6">
              Fingerprint
            </span>
            <span class="text-gray-800 capitalize font-medium">
              {data?.fingerprint ? "Yes" : "No"}
            </span>
          </div>
          <div class="flex w-full flex-col md:flex-row border-b pb-3">
            <span class="text-sm text-gray-800 md:text-base md:text-black md:w-2/6">
              Battery
            </span>
            <span class="text-gray-800 capitalize font-medium">
              {data?.battery || "N/A"}
            </span>
          </div>
          <div class="flex w-full flex-col md:flex-row border-b pb-3">
            <span class="text-sm text-gray-800 md:text-base md:text-black md:w-2/6">
              Warranty
            </span>
            <span class="text-gray-800 capitalize font-medium">
              {data?.warranty || "N/A"}
            </span>
          </div>
          <div class="flex w-full flex-col md:flex-row border-b pb-3">
            <span class="text-sm text-gray-800 md:text-base md:text-black md:w-2/6">
              Publish Date
            </span>
            <span class="text-gray-800 capitalize font-medium">
              {new Date(data?.publishDate)?.toLocaleDateString() || "N/A"}
            </span>
          </div>
        </div>
      </div>
      {/* <div>
        <h2 className="text-lg font-semibold py-3">Review and questions</h2>
        <div className="w-full md:w-4/6 h-56 text-lg text-gray-700  grid place-content-center shadow border">
          Currently none
        </div>
      </div> */}
    </div>
  );
};
const General = (data) => {
  let description = data?.description ?? "";
  description = description.split("\n");
  return (
    <div className="w-full lg:w-11/12 mx-auto p-2 md:p-6 ">
      <div className="grid grid-cols-9 gap-4">
        {/* Image slider below */}
        <div className="col-span-9 lg:col-span-5 aspect-video bg-white">
          <ImageSlider images={data?.images ?? []}></ImageSlider>
        </div>
        <div className="col-span-9 lg:col-span-4  p-3 md:p-4 lg:p-6 bg-white flex flex-col justify-between shadow">
          <div className="  pe-3 pb-3 ps-1 mt-2  flex flex-col gap-2">
            <h1 className="capitalize text-xl font-medium px-1  py-1  rounded bg-slate-50">
              {data.title}
            </h1>
            <p className="text-sm text-gray-900 pt-5">Price</p>
            <p className="text-lg bg-green-50 text-green-500 inline-block p-1 ">
              {data?.price} TK. only
            </p>
            <p className=" font-semibold text-gray-700 pt-5">
              {" "}
              <span className="text-black font-semibold rounded">
                Description:{" "}
              </span>
              {data?.description.slice(0, 150)} <a href="#detail">...More</a>
            </p>
            <p className="font-medium pt-3">Available Stock: {data?.stock}</p>
          </div>

          <Link id="detail"
            href={"/order?items=" + data._id}
            className="bg-green-500 self-start text-white font-semibold px-12 py-2 text-lg "
          >
            Order Now
          </Link>
        </div>
      </div>
      <div class="bg-white p-6 rounded-lg  w-full lg:w-4/6 mt-14">
        <h2
        
          class="text-2xl font-bold mb-8 text-gray-800 underline underline-offset-8"
        >
          Item Details
        </h2>

        <div className="flex flex-col gap-2">
          {description.map((ele, index) => (
            <p key={index}>{ele}</p>
          ))}
        </div>
      </div>
      {/* <div>
        <h2 className="text-lg font-semibold py-3">Review and questions</h2>
        <div className="w-full md:w-4/6 h-56 text-lg text-gray-700  grid place-content-center shadow border">
          Currently none
        </div>
      </div> */}
    </div>
  );
};
export default Page;

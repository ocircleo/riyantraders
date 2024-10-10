"use client";
import { getCookie } from "@/app/utls/cookie/Cookie";
import React, { useEffect, useState } from "react";
import AppCard from "./AppCard";
import { API } from "@/app/utls/api/API";

const MyApps = () => {
  let [result, setResult] = useState([]);
  let [size, setSize] = useState(0);
  useEffect(() => {
    async function getFileInfo() {
      let res = await fetch(API+"get/myApps", {
        method: "GET",
        headers: { Authorization: getCookie("accessToken") },
      });
      let resJson = await res.json();
      let totalSize = 0;
      for (let i = 0; i < resJson.result.length; i++) {
        totalSize += Number(resJson.result[i].size);
      }
      setSize(totalSize);
      setResult(resJson?.result);
      console.log(resJson);
    }
    getFileInfo();
  }, []);

  return (
    <div className="w-full bg-white min-h-full ">
      <h1 className="text-2xl font-semibold text-center pt-6">
        You have uploaded{" "}
        {size / 1024 > 1024
          ? (size / (1024 * 1024)).toFixed(2) + "GB"
          : (size / 1024).toFixed(2) + "MB"}{" "}
        file
      </h1>
      <div className="flex flex-col gap-3 p-4">
        {result.map((ele, index) => (
          <AppCard key={ele._id} ele={ele} index={index}></AppCard>
        ))}
      </div>
      <p className="text-lg text-center font-semibold">{result.length > 0?"":"Loading Data"}</p>
    </div>
  );
};

export default MyApps;

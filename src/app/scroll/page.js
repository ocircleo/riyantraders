"use client";
import React from "react";

const page = () => {
  const scrolling = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div
      onScroll={scrolling}
      className="bg-gray-300 h-screen overflow-y-scroll"
    >
      <div className="h-[200vh] w-full bg-red-100"></div>
    </div>
  );
};

export default page;

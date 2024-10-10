"use client";
import React, { useState } from "react";
import nav from "./nav.module.css";
import ActiveLink from "@/app/utls/ActiveLink/ActiveLink";
const Layout = ({ children }) => {
  const [navState, setNavState] = useState(false);
  const toggleNav = () => setNavState(!navState);
  const baseLinks = [
    { path: "/dashboard", text: "Dashboard" },
    { path: "/dashboard/myfiles", text: "My files" },
    { path: "/dashboard/upload", text: "upload file" },
    { path: "/dashboard/myApps", text: "My Apps" },
    { path: "/dashboard/publishApp", text: "Publish App" },
    { path: "/dashboard/messages", text: "Messages" },
    { path: "/dashboard/profile", text: "Profile" },
    { path: "/", text: "Home" },
  ];
  return (
    <div className="bg-gray-400 h-screen w-full flex">
      <div className="hidden md:w-64 bg-white h-full overflow-y-scroll md:flex flex-col gap-2 ps-4 pe-1 pt-3 pb-12">
        {baseLinks.map((ele, index) => (
          <ActiveLink
            toggle={null}
            key={ele.path + index + ele.text}
            to={ele.path}
            click={null}
          >
            {ele.text}
          </ActiveLink>
        ))}
      </div>
      {/* small screen navbar */}
      <div
        className={`md:hidden top-0 w-full sm:w-64 bg-white h-full  flex flex-col gap-2 px-2 pt-3 pb-12 fixed duration-100 ${
          !navState ? "-left-full sm:-left-64" : "left-0"
        } z-20`}
      >
        {baseLinks.map((ele, index) => (
          <ActiveLink
            toggle={null}
            key={ele.path + index + ele.text}
            to={ele.path}
            click={toggleNav}
          >
            {ele.text}
          </ActiveLink>
        ))}
      </div>
      <div
        className={`h-full w-full bg-gray-900/35 fixed top-0 left-0 z-0 ${
          navState ? "block" : "hidden"
        }`}
        onClick={toggleNav}
      ></div>
      {/* sidebar toggler for small screen  */}
      <div className=" flex-1 bg-gray-200 overflow-y-scroll overflow-x-hidden  p-0 md:p-3">
        <div
          onClick={toggleNav}
          className={`h-10 w-10 cursor-pointer rounded  flex gap-[3px] bg-white shadow-inner border p-1 items-center justify-center flex-col md:hidden fixed right-6 top-6 active:scale-90 duration-100 z-50`}
        >
          <div
            className={`h-[6px] bg-black w-full duration-200 rounded-[2px] ${
              navState ? nav.active : nav.default
            }`}
          ></div>
          <div
            className={`h-[6px] bg-black w-full duration-200 rounded-[2px] ${
              navState ? nav.base : nav.baseDefault
            }`}
          ></div>
          <div
            className={`h-[6px] bg-black w-full duration-200 rounded-[2px] ${
              navState ? nav.active2 : nav.default2
            }`}
          ></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;

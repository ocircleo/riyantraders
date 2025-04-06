"use client";
import React, { useEffect, useState } from "react";
import nav from "./nav.module.css";
import ActiveLink from "@/app/utls/ActiveLink/ActiveLink";

const LayoutCompo = ({ children, user }) => {
    const [navState, setNavState] = useState(false);
    const toggleNav = () => setNavState(!navState);
    const adminLinks = [
        { path: "/dashboard", text: "Dashboard" },
        { path: "/dashboard/LandingImage", text: "Landing Image" },
        { path: "/dashboard/orders", text: "Orders" },
        { path: "/dashboard/addItem", text: "Add Item" },
        { path: "/dashboard/editItem", text: "Edit Item" },
        { path: "/dashboard/addLaptop", text: "Add Laptop" },
        { path: "/dashboard/editLaptop", text: "Edit Laptop" },
        { path: "/dashboard/users", text: "Users" },
        { path: "/dashboard/messages", text: "Messages" },
        { path: "/dashboard/editProfile", text: "Edit Profile" },
        { path: "/dashboard/changePassword", text: "change password" },
        { path: "/", text: "Home page" },
    ];
    return (
        <div
            className={`bg-red-50 md:px-8 lg:px-16 md:py-4  h-screen w-full flex gap-8 `}
        >
            {/* Big screen sidebar links below */}
            <div className="hidden md:w-64 bg-stone-200 h-full overflow-y-scroll md:flex flex-col gap-2 ps-4 pe-1 pt-3 pb-12 rounded scroll-rock">
                {adminLinks.map((ele, index) => (
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
            {/* small screen sidebar links below */}
            <div
                className={`md:hidden top-0 w-full sm:w-64 bg-stone-300 h-full  flex flex-col gap-2 px-2 pt-3 pb-12 fixed duration-100 ${!navState ? "-left-full sm:-left-64" : "left-0"
                    } z-20`}
            >
                {adminLinks.map((ele, index) => (
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
            {/* full screen gray for small screen */}
            <div
                className={`h-full w-full bg-gray-900/35 fixed top-0 left-0 z-0 ${navState ? "block" : "hidden"
                    }`}
                onClick={toggleNav}
            ></div>
            {/* Hamburger menu  */}
            <div
                onClick={toggleNav}
                className={`h-10 w-10 cursor-pointer rounded  flex gap-[3px] bg-white shadow-inner border p-1 items-center justify-center flex-col md:hidden fixed right-3 top-3 sm:top-6 sm:right-6 active:scale-90 duration-100 z-50`}
            >
                <div
                    className={`h-[6px] bg-black w-full duration-200 rounded-[2px] ${navState ? nav.active : nav.default
                        }`}
                ></div>
                <div
                    className={`h-[6px] bg-black w-full duration-200 rounded-[2px] ${navState ? nav.base : nav.baseDefault
                        }`}
                ></div>
                <div
                    className={`h-[6px] bg-black w-full duration-200 rounded-[2px] ${navState ? nav.active2 : nav.default2
                        }`}
                ></div>
            </div>
            <div className=" flex-1 overflow-y-scroll overflow-x-hidden scroll-rock rounded">
                {children}
            </div>
        </div>
    );
};

export default LayoutCompo;

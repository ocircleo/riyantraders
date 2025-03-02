"use client";
import React, { useEffect, useState } from "react";
import getUser from "../../utls/db/UserDB";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { CgMenuGridO } from "react-icons/cg";
import { CgMenuGridR } from "react-icons/cg";
import { MdAccountCircle } from "react-icons/md";
import { RiShoppingBagFill } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
const Layout = ({ children }) => {
  const pathName = usePathname();
  const router = useRouter();
  const [navState, setNavState] = useState(false);
  const [user, setUser] = useState({ loading: true, data: null });
  const loadUser = async () => {
    let temUser = await getUser();
    if (temUser) setUser({ loading: false, data: temUser });
    else setUser({ loading: false, data: null });
  };

  useEffect(() => {
    loadUser();
  }, []);
  const toggleNav = () => setNavState(!navState);
  const baseLinks = [
    { path: "/account", text: "Account", icon: <MdAccountCircle /> },
    { path: "/account/orders", text: "Orders", icon: <RiShoppingBagFill /> },
    { path: "/account/history", text: "Payment History", icon: <FaHistory /> },
    { path: "/account/editprofile", text: "Edit Profile", icon: <FaRegEdit /> },
    {
      path: "/account/changePassword",
      text: "Change Password",
      icon: <FaUserLock />,
    },
  ];
  const baseLinksSM = [
    { path: "/account", text: "Account", icon: <MdAccountCircle /> },
    { path: "/account/orders", text: "Orders", icon: <RiShoppingBagFill /> },
    { path: "/account/history", text: "Payment History", icon: <FaHistory /> },
    { path: "/account/editprofile", text: "Edit Profile", icon: <FaRegEdit /> },
    {
      path: "/account/changePassword",
      text: "Change Password",
      icon: <FaUserLock />,
    },
    { path: "/", text: "Home Page", icon: <FaHome /> },
  ];
  if (user.loading)
    return (
      <div className="grid place-content-center h-screen w-full">
        <h2 className="text-xl font-semibold">Loading profile page.....</h2>
      </div>
    );
  if (!user.loading && !user.data) {
    return (
      <div className="grid place-content-center h-screen w-full text-center">
        <h2 className="text-xl font-semibold py-3">No user found</h2>
        <button
          onClick={() => router.refresh()}
          className="bg-orange-500 rounded font-semibold py-1 mb-4 active:scale-90 duration-100"
        >
          Try to Reload
        </button>
        <p>or</p>
        <div className="flex gap-3">
          <Link
            href={"/login"}
            className="text-blue-400 font-semibold underline underline-offset-4 italic"
          >
            Login to Account
          </Link>{" "}
          |
          <Link
            href={"/register"}
            className="text-blue-400 font-semibold underline underline-offset-4 italic"
          >
            Register new user{" "}
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className={`w-full lg:w-5/6 mx-auto p-2  mb-16`}>
      <div className="bg-gray-100 flex items-center   my-2 md:my-5 py-2 px-4 md:py-4 relative">
        <p className="font-semibold py-2 flex justify-between md:hidden w-full">
          <span>Quick links:</span>
          <span onClick={toggleNav} className="text-3xl rounded">
            {navState ? <CgMenuGridR /> : <CgMenuGridO />}
          </span>
        </p>
        {/* small screen menu for quick links */}
        <div
          onClick={toggleNav}
          className={`${
            navState ? " scale-100" : "scale-50 invisible pointer-events-none"
          } flex flex-col gap-3 w-3/5 duration-75 absolute top-12 right-0 z-40 bg-gray-100 p-4 rounded md:hidden`}
        >
          {baseLinksSM.map((ele, index) => (
            <>
              <Link
                className={` ${
                  pathName == ele.path ? "text-blue-400" : " text-gray-800"
                } bg-white text-center  font-semibold shadow px-6 py-1 border  rounded flex items-center justify-center gap-2`}
                href={ele.path}
              >
                <span className="text-xl text-gray-700">{ele.icon}</span>
                {ele.text}
              </Link>
            </>
          ))}
        </div>
        <div className="md:flex flex-wrap flex-shrink gap-4 hidden items-center">
          {baseLinks.map((ele, index) => (
            <>
              <Link
                className={` ${
                  pathName == ele.path ? "text-blue-400" : " text-gray-800"
                }  text-center  font-semibold  flex items-center px-2 gap-2`}
                href={ele.path}
              >
                <span className="text-xl ">{ele.icon}</span>
                {ele.text}
              </Link>
            </>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;

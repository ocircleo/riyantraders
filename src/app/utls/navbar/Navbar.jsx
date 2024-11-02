"use client"
import Link from "next/link";
import ActiveNavLink from "../ActiveLink/ActiveNavLink";
import { useEffect, useState } from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import nav from "./nav.module.css";
import Image from "next/image";
import Search from "../searchbar/Search";
import cart from "/public/cart.png"
import account from "/public/account.png"
import logo from "/public/logo.png"
import getUser, { clearUser } from "../db/UserDB";
import { API } from "../api/API";
import { getCookie } from "../cookie/Cookie";
const Navbar = () => {
  const [navState, setNavState] = useState(false)
  const [user, setUser] = useState(null);

  const logOut = () => {
    clearUser();
    setUser(null);
  };

  useEffect(() => {
    (async function () {
      let temUser = await getUser();
      if (temUser) setUser(temUser);
    })();
  }, []);
  const navLinks = [
    {
      to: "/",
      title: "Home",
      id: 1,
    },
    {
      to: "/it-support",
      title: "It Support",
      id: 6,
    },
    {
      to: "/feedback",
      title: "Feedback",
      id: 5,
    },

  ];
  const toggleNav = () => setNavState(!navState)
  return (
    <>
      <nav className="h-16 w-full bg-white/30 backdrop-blur-md  flex justify-between items-center px-4 md:px-6 lg:px-10 gap-2 shadow z-[111]">
        <Link href={"/"} className="relative flex items-center  flex-col">
          {/* <Image alt="Tooltip logo" src={logo} className="h-8 w-16 bg-white "></Image> */}
          <span className="text-xl sm:text-2xl lg:text-3xl font-bold "><span className="text-gray-700">Ryan</span> <span className="text-red-600">Traders</span> </span>
        </Link>

        <Search text={""} invisible={"sm"}></Search>
        <div className=" gap-3 items-center flex">
          <div className=" hidden md:flex items-center gap-2">
            <ActiveNavLink to={"/"}>Home</ActiveNavLink>
            <ActiveNavLink to={"/it"}>It Support</ActiveNavLink>
            <Link href="/cart" className="h-8 w-8 relative rounded p-2">
              <Image alt="cart" src={cart}  ></Image>
              <p className="absolute -top-2 text-sm font-semibold -right-2 bg-red-500 rounded-full min-w-5 text-center px-1 text-white">0</p>
            </Link>

            <div className="hidden md:flex gap-2 ms-4 p-2 border border-red-100  rounded">
              {
                user ? <div className="flex items-center gap-2">
                  <ActiveNavLink to="/dashboard">{user.name}</ActiveNavLink>
                  <span className="text-red-600">|</span>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={logOut}
                  >
                    Log Out
                  </button>
                </div> : <>
                  <ActiveNavLink to="/login">Login</ActiveNavLink>
                  <span className="text-red-600">|</span>
                  <ActiveNavLink to="/register">Register</ActiveNavLink>
                </>
              }
            </div>
          </div>
          <Link href="/cart" className="h-8 w-8 relative   rounded p-2 md:hidden">
            <Image alt="cart" src={cart}  ></Image>
            <p className="absolute -top-2 text-sm font-semibold -right-2 bg-red-500 rounded-full min-w-5 text-center px-1 text-white">0</p>
          </Link>
          {/* Navbar toggler for small screen -- below  */}
          <div
            onClick={toggleNav}
            className={`h-8 w-8 cursor-pointer rounded  flex gap-[3px]  px-1 items-center justify-center flex-col md:hidden active:scale-90 duration-100 overflow-hidden`}
          >
            <div
              className={`h-1 bg-black w-full duration-200`}
            ></div>
            <div
              className={`h-1 bg-black w-full duration-200`}
            ></div>
            <div
              className={`h-1 bg-black w-full duration-200`}
            ></div>
          </div>
        </div>



      </nav >
      {/* <div className="h-16 w-full bg-white"></div> */}
      {/* //Small Screen  sidebar -- below */}
      <div
        onClick={() => setNavState(!navState)}
        title="nav-links"
        className={`min-h-screen w-full bg-white fixed top-0 z-[110]  ${navState ? "block" : "invisible pointer-events-none"
          }`}
      >
        <div className="font-semibold flex justify-between p-3  border bg-blue-400">
          <h3 className="text-lg ">Important Links</h3>
          <div
            onClick={toggleNav}
            className={`h-8 w-8 cursor-pointer rounded  flex gap-[3px] px-1 items-center justify-center flex-col md:hidden active:scale-90 duration-100 overflow-hidden`}
          >
            <div
              className={`h-1 bg-black w-full ${nav.active}`}
            ></div>

            <div
              className={`h-1 bg-black w-full ${nav.active2}`}
            ></div>
          </div>
        </div>
        <div
          onClick={(e) => e.preventDefault()}
          className={`fixed top-16 duration-200  w-full overflow-y-scroll sm:w-80 bg-white h-screen flex flex-col gap-3 p-3 text-center ${navState ? "right-0" : "-right-full sm:-right-80"
            }`}
        >
          {navLinks.map((ele) => (
            <ActiveLink to={ele.to} click={toggleNav} key={ele.id}>
              {ele.title}
            </ActiveLink>
          ))}
          <ActiveLink to={'/search'} click={toggleNav} key={200}>
            Search
          </ActiveLink>
          <div
            className={` flex md:hidden gap-2 flex-col`}
          >
            {
              user ? <>
                <Link href="/dashboard">{user.name}</Link>
                <button
                  className="bg-red-500 text-black px-3 py-1 rounded font-semibold shadow-inner"
                  onClick={logOut}
                >
                  Log Out
                </button>
              </> : <>
                <ActiveLink to="/login">Login</ActiveLink>
                <ActiveLink to="/register">Register</ActiveLink>
              </>

            }
          </div>
        </div>
      </div>
    </>
  );
};


export default Navbar;

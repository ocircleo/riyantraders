"use client"
import Link from "next/link";
import ActiveNavLink from "../ActiveLink/ActiveNavLink";
import { useEffect, useState } from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import nav from "./nav.module.css";
import Image from "next/image";
import Search from "../searchbar/Search";
import cart from "/public/cart.png"
import logo from "/public/logo2.png"
import getUser, { clearUser } from "../db/UserDB";
import CartIcon from "./CartIcon";
import emitter from "../mitt/Mit";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { MdAccountCircle } from "react-icons/md";
const Navbar = () => {
  const [navState, setNavState] = useState(false)
  const [user, setUser] = useState(null);

  const logOut = () => {
    clearUser();
    setUser(null);
  };

  useEffect(() => {
    async function log() {
      let temUser = await getUser();
      if (temUser) setUser(temUser);
    };
    log();
    const logHandler = () => log();
    emitter.on("logged", logHandler)
    return () => emitter.off("logged")

  }, []);
  const navLinks = [
    {
      to: "/",
      title: "Home",
      id: 1,
    },
    {
      to: "/itsupport",
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
      <nav className="h-16 w-full fixed top-0 bg-white/30 backdrop-blur-md  flex justify-between items-center px-6 lg:px-10 gap-2 shadow z-[111]">
        <Link href={"/"} className="relative flex items-center  flex-col">
          <Image alt="Ryan traders logo" src={logo} height={40} width={150} className="scale-50 origin-left lg:scale-75 xl:scale-90 2xl:scale-100 bg-transparent"></Image>
        </Link>

        <Search invisible={"sm"}></Search>
        <div className=" gap-3 items-center flex">
          <div className=" hidden md:flex items-center gap-2">
            <ActiveNavLink to={"/"}>Home</ActiveNavLink>
            <ActiveNavLink to={"/itsupport"}>It Support</ActiveNavLink>
            <CartIcon></CartIcon>
            <div className="hidden md:flex gap-2 ms-4 p-2 border border-red-100  rounded">
              {
                user ? <div className="flex items-center gap-2">
                  <ActiveNavLink to={user.role == "admin" ? "/dashboard" : "/account"}>{user.name}</ActiveNavLink>
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
          <div className="flex md:hidden items-center gap-2">
            <Link href={"/search"} className="text-lg font-bold">
              <IoSearch />
            </Link>
            <CartIcon></CartIcon>
          </div>
          {/* Navbar toggler for small screen -- below  */}
          <div onClick={toggleNav} className={`text-2xl   md:hidden active:scale-90 duration-100 overflow-hidden`}>
            {navState ? <RxCross2 /> : <GiHamburgerMenu />}
          </div>
        </div>
      </nav >
      <div className="h-16 w-full bg-white"></div>
      {/* //Small Screen  sidebar -- below */}
      <div onClick={() => setNavState(!navState)} title="nav-links" className={`min-h-screen w-full bg-white fixed top-0 z-[110]  ${navState ? "block" : "invisible pointer-events-none"
        } md:invisible md:pointer-events-none`}>

        <div
          onClick={(e) => e.preventDefault()}
          className={`fixed top-16 duration-200  w-full overflow-y-scroll  bg-gray-100 h-screen flex flex-col gap-3 p-3 text-center ${navState ? "right-0" : "-right-full"
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
                <Link className="bg-white py-2 capitalize font-bold flex items-center gap-2 justify-center" href={user.role == "admin" ? "/dashboard" : "/account"}><MdAccountCircle /> {user.name}</Link>
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

import Search from "@/app/utls/searchbar/Search";
import { Suspense } from "react";
import Allapps from "./Allapps";
import Link from "next/link";

let apps = ["Dell", "Asus", "Acer", "HP", "Mac book", "DCL"];
export default function Home() {
  return (
    <div className=" min-h-screen h-full rounded flex items-center flex-col">
      <div className="flex gap-3 py-2 pt-1 ps-12 bg-gray-800 w-full items-center  self-start sticky top-0 z-50">
        {apps.map((ele) => (
          <Link
            className="text-sm capitalize font-semibold  rounded px-2 text-white hover:text-red-500"
            href={"/" + ele}
            key={ele}
          >
            {ele}
          </Link>
        ))}
      </div>
      <h1 className="text-xl text-center font-semibold md:hidden">
        Welcome to Raiyan Traders
        <br />{" "}
        <span className="text-sm font-semibold text-gray-600">
          {" "}
          We sell refurbished laptops
        </span>
      </h1>
      <Suspense>
        <Search text={""} invisible={"md"}></Search>
      </Suspense>
      <div className="w-full md:w-5/6 px-2 h-auto">

        {/* <div className="flex gap-3 pb-3">

          {apps.map((ele) => (
            <Link className="text-sm capitalize font-semibold bg-gray-200 rounded px-4 text-black hover:bg-black hover:text-white" href={"/" + ele} key={ele}>{ele}</Link>
          ))}

      </div> */}
        <h1 className="text-xl text-center py-3 font-semibold">
          Latest Products
        </h1>
        <div className="px-3 sm:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 ">
          <Allapps></Allapps>
        </div>
      </div>
    </div>
  );
}

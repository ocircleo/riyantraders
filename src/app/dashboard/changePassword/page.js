import NextPrev from "@/app/utls/nextprev/NextPrev";
import NextPrevFunc from "@/app/utls/nextprev/NextPrevFun";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="bg-stone-200/80 min-h-full px-6 py-3 ">
      <h2 className=" text-stone-800 font-bold border-b-2 border-dashed border-b-stone-500 mb-3 text-xl pt-2 pb-5">
        Change your Password
      </h2>
      <form className=" flex flex-col gap-1">
        <fieldset className="flex flex-col gap-2 p-2  pb-3 rounded">
          <label htmlFor="prevPass" className="font-bold">
            Previous Password
          </label>
          <input
            type="text"
            id="prevPass"
            className=" py-3 px-2 bg-white rounded outline-indigo-500 w-full lg:w-1/2"
            placeholder="Enter your previous password"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2  pb-3 rounded">
          <label htmlFor="newpass" className="font-bold">
            New Password
          </label>
          <input
            type="text"
            id="newpass"
            className=" py-3 px-2 bg-white rounded outline-indigo-500 w-full lg:w-1/2"
            placeholder="Enter your new password"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2  pb-3 rounded">
          <label htmlFor="confirm" className="font-bold">
            Confirm New Password
          </label>
          <input
            type="text"
            id="confirm"
            className=" py-3 px-2 bg-white rounded outline-indigo-500 w-full lg:w-1/2"
            placeholder="Confirm New password"
          ></input>
        </fieldset>
        <button className="bg-red-600 w-full lg:w-1/2 text-white font-semibold py-3 mb-4 mt-4 rounded hover:bg-indigo-400 active:scale-95 duration-100">
          Update Password
        </button>
      </form>
      <Link
        href={"/forgotPassword"}
        className="text-indigo-500 font-semibold text-sm"
      >
        Forgotten Password ? click here to reset
      </Link>
      <NextPrev
        info={NextPrevFunc(
          "/dashboard/editProfile",
          "Edit Profile",
          "/dashboard",
          "Dashboard Home"
        )}
      ></NextPrev>
    </div>
  );
};

export default Page;

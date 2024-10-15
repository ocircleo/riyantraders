"use client";
import { getCachedUser } from "@/app/utls/cookie/Cookie";
import NextPrev from "@/app/utls/nextprev/NextPrev";
import NextPrevFunc from "@/app/utls/nextprev/NextPrevFun";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  let [user, setUser] = useState({ loading: true, data: {} });
  useEffect(() => {
    const getUser = async () => {
      const temUser = await getCachedUser();
      setUser({ loading: false, data: temUser });
    };
    getUser();
  }, []);
  if (user.loading)
    return (
      <div className="bg-stone-200/80 min-h-full px-6 py-3 flex items-center justify-center w-full">
        <p className="text-2xl font-semibold">Loading Please Wait...</p>
      </div>
    );
  return (
    <div className="bg-stone-200/80 min-h-full px-6 py-3 ">
      <h2 className=" text-stone-800 font-bold border-b-2 border-dashed border-b-stone-500 mb-3 text-xl pt-2 pb-5">
        Edit your profile
      </h2>
      <form className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
        <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded">
          <label htmlFor="name" className="font-bold">
            User Name
          </label>
          <input
            type="text"
            id="name"
            className=" py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="your name"
            defaultValue={user.data?.name}
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded">
          <label htmlFor="city" className="font-bold">
            City / Zila
          </label>
          <input
            type="text"
            id="city"
            className=" py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="City or zila you live in"
            defaultValue={user.data?.city}
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded">
          <label htmlFor="address" className="font-bold">
            Delivery address
          </label>
          <input
            type="text"
            id="address"
            className=" py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="From where you want to pick up orders"
            defaultValue={user.data?.address}
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            disabled
            type="text"
            id="email"
            className=" py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="your Email"
            defaultValue={user.data?.email}
            title="You Can't Edit Email"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2  rounded">
          <label htmlFor="phone" className="font-bold">
            Phone Number
          </label>
          <input
            disabled
            type="text"
            id="phone"
            className=" py-3 px-2 bg-white outline-indigo-500 rounded"
            placeholder="Phone number"
            defaultValue={user.data?.phone}
            title="You Can't Edit Phone"
          ></input>
        </fieldset>
        <div className="mt-6 col-span-2 flex items-center justify-center ">
        <button className="bg-red-600 w-full lg:w-1/2 text-white font-semibold py-3 rounded  hover:bg-indigo-400 active:scale-95 duration-100">
          Update Password
        </button>

        </div>
      </form>
      <NextPrev
        info={NextPrevFunc(
          "/dashboard/messages",
          "Messages",
          "/dashboard/changePassword",
          "Change Password"
        )}
      ></NextPrev>
    </div>
  );
};

export default Page;

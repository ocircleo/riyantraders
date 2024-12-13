"use client";
import getUser from "@/app/utls/db/UserDB";
import React, { useEffect, useState } from "react";
import profile from "/public/account.png";
import Image from "next/image";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
const Page = () => {
  let [user, setUser] = useState(null);
  useEffect(() => {
    (async function () {
      let temUser = await getUser();
      if (temUser) setUser(temUser);
    })();
  }, []);

  return (
    <div>
      <h2 className=" text-stone-800 font-bold border-b-2 border-dashed border-b-stone-500 mb-3 text-xl pt-2 pb-5  capitalize">
        Account Information
      </h2>
      <div className="flex gap-4 justify-between py-5 mb-2 ">
        <div className="flex gap-4">
          <Image src={profile} height={60} width={60} alt="profile"></Image>
          <div className="flex flex-col">
            <p className="capitalize font-semibold">{user?.name}</p>
            <p>{user?.city}</p>
          </div>
        </div>
        <div>
          <Link
            href={"/account/editprofile"}
            className="bg-orange-400  px-3 py-1  font-medium rounded-sm flex items-center gap-2 text-white"
          >
            <FaRegEdit />
            Edit
          </Link>
        </div>
      </div>
      <div className=" flex  gap-4 md:gap-8 lg:gap-12 xl:gap-16 w-full flex-wrap justify-start  ">
        <div className="flex flex-col rounded">
          <p className="text-xs text-gray-800 font-bold">Phone:</p>
          <div>{user?.phone}</div>
        </div>
        <div className="flex flex-col rounded">
          <p className="text-xs text-gray-800 font-bold">Delivery address :</p>
          <div>{user?.address}</div>
        </div>
        <div className="flex flex-col rounded overflow-hidden">
          <p className="text-xs text-gray-800 font-bold">Email :</p>
          <div>{user?.email}</div>
        </div>
      </div>
    </div>
  );
};

export default Page;

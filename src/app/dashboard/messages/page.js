import NextPrev from "@/app/utls/nextprev/NextPrev";
import NextPrevFunc from "@/app/utls/nextprev/NextPrevFun";
import React from "react";

const Messages = () => {
  return (
    <div className="bg-stone-200/80 min-h-full px-6 py-3 flex justify-between flex-col">
      <div>
        <h2 className=" text-stone-800 font-bold border-b-2 border-dashed border-b-stone-500 mb-3 text-xl pt-2 pb-5">
          Messages
        </h2>

        <div className="border border-gray-300 rounded p-2 bg-stone-200 relative mt-10">
          <div className="flex gap-2">
            <div className="bg-white text-black text-2xl h-12 w-12 grid place-content-center font-semibold rounded-full capitalize">
              s
            </div>
            <div className="flex flex-col">
              <p>salmanhsossain11222626@gmail.com</p>
              <p className="text-xs text-gray-400">12-10-2024 | 4:12</p>
            </div>
          </div>
          <div className="bg-white p-8 mt-6 rounded">
            
            hello from slaman hossain, I would like to say that how are you?
            hello from slaman hossain, I would like to say that how are you?
            hello from slaman hossain, I would like to say that how are you?
            hello from slaman hossain, I would like to say that how are you?
            hello from slaman hossain, I would like to say that how are you?
          </div>
        <div className="flex gap-2 absolute top-2 right-2 font-semibold">
            <button className="px-6 py-2   bg-slate-800 text-white rounded">Reply</button>
            <button className="px-6 py-2 bg-red-600 text-white rounded">Delete</button>
        </div>
        </div>
        <div className="border border-gray-300 bg-stone-200 rounded p-2 relative mt-10 ">
          <div className="flex gap-2">
            <div className="bg-white text-black text-2xl h-12 w-12 grid place-content-center font-semibold rounded-full capitalize">
              s
            </div>
            <div className="flex flex-col">
              <p>salmanhsossain11222626@gmail.com</p>
              <p className="text-xs text-gray-400">12-10-2024 | 4:12</p>
            </div>
          </div>
          <div className="bg-white p-8 mt-6 rounded">
            
            hello from slaman hossain, I would like to say that how are you?
            hello from slaman hossain, I would like to say that how are you?
            hello from slaman hossain, I would like to say that how are you?
            hello from slaman hossain, I would like to say that how are you?
            hello from slaman hossain, I would like to say that how are you?
          </div>
        <div className="flex gap-2 absolute top-2 right-2 font-semibold">
            <button className="px-6 py-2   bg-slate-800 text-white rounded">Reply</button>
            <button className="px-6 py-2 bg-red-600 text-white rounded">Delete</button>
        </div>
        </div>
      </div>

      <NextPrev
        info={NextPrevFunc(
          "/dashboard/users",
          "Users",
          "/dashboard/editProfile",
          "Edit Profile"
        )}
      ></NextPrev>
    </div>
  );
};

export default Messages;

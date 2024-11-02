import NextPrev from "@/app/utls/nextprev/NextPrev";
import NextPrevFunc from "@/app/utls/nextprev/NextPrevFun";
import React from "react";

const Page = () => {
  return (
    <div className="bg-stone-200/80 min-h-full px-6 py-3 flex justify-between flex-col">
      <div>
        <h2 className=" text-stone-800 font-bold border-b-2 border-dashed border-b-stone-500 mb-3 text-xl pt-2 pb-5">
          Phase 2
        </h2>
     
      </div>

      <NextPrev
        info={NextPrevFunc(
          "/dashboard/editItem",
          "Edit Item",
          "/dashboard/users",
          "Users"
        )}
      ></NextPrev>
    </div>
  );
};

export default Page;

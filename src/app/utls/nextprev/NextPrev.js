import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const NextPrev = ({ info }) => {
  let { prevUrl, prevText } = info.prev;
  let { nextUrl, nextText } = info.next;
  //   let demo = {
  //     prev: { prevUrl: "/", prevText: "hello" },
  //     next: { nextUrl: "/salman", nextText: "Salman hossain" },
  //   };
  return (
    <div>
      <div className="h-[3px] my-8 border-b-2 border-gray-500/40 w-full border-dashed "></div>
      <div className=" px-12 mt-2 py-4 gap-3 flex sm:flex-row flex-col text-center justify-between items-center ">
        <div className="">
          <p className="text-sm">Previous</p>
          <Link
            href={prevUrl}
            className="bg-transparent underline underline-offset-4  font-semibold py-3 rounded text-center hover:text-indigo-500 flex items-center gap-2"
          >
            <FaArrowLeft /> {prevText}
          </Link>
        </div>
        <div className="">
          <p className="text-sm">Next</p>
          <Link
            href={nextUrl}
            className="bg-transparent underline underline-offset-4  font-semibold py-3 rounded text-center hover:text-indigo-500 flex items-center gap-2"
          >
            {nextText} <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NextPrev;

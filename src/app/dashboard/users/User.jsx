import Link from 'next/link';
import React from 'react';
import { FaRegEdit } from "react-icons/fa";
const User = ({ index, currentPage, data }) => {
    let newIndex = (currentPage * 12) + 1 + index

    return (
        <div className={`grid grid-cols-12 text-xs sm:text-sm md:text-base p-2 justify-items-center hover:bg-blue-300 ${index % 2 == 0 ? "bg-white" : "bg-gray-100"} ${data.role == "admin" ? "font-semibold border-blue-500 border-s-4" : ""}`}>
            <div className="col-span-1">
                {newIndex}
            </div>
            <div className="col-span-2 capitalize">

                {data.name}
            </div>
            <div className="col-span-3 ">
                {data.phone}  </div>
            <div className="col-span-4 overflow-hidden">{data.email}</div>
            <div className="col-span-2 ">  <Link
                href={"/dashboard/users/" + data._id}
                className=" hover:text-indigo-500"
            ><FaRegEdit /></Link></div>
        </div>
    );
}

export default User;

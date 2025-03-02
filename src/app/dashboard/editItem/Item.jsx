import Link from 'next/link';
import React from 'react';
import { FaRegEdit } from "react-icons/fa";
const Item = ({ data, index, currentPage }) => {
    let newIndex = (currentPage * 12) + 1 + index

    return (
        <div className={`grid grid-cols-12 text-xs sm:text-sm md:text-base p-2 justify-items-center hover:bg-blue-300 ${index % 2 == 0 ? "bg-white" : "bg-gray-100"}`}>
            <div className="col-span-1">
                {newIndex}
            </div>
            <div className="col-span-3 capitalize font-semibold">
                {data.laptop.brand}

            </div>

            <div className="col-span-3  capitalize">
                {data.laptop.model}  </div>
            <div className="col-span-2  ">{data.laptop.price}</div>

            <div className="col-span-2  ">{data.laptop.stock}</div>
            <div className="col-span-1"> <Link
                href={"/dashboard/editItem/" + data._id}
                className=" hover:text-indigo-500"
            ><FaRegEdit /></Link></div>

        </div>
    );
}

export default Item;

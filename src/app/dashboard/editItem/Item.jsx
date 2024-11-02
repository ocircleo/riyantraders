import Link from 'next/link';
import React from 'react';

const Item = ({ data, index, currentPage }) => {
    let newIndex = (currentPage * 12) + 1 + index

    return (
        <div className={`grid grid-cols-12 text-xs sm:text-sm md:text-base p-2 justify-items-center ${index % 2 == 0 ? "bg-white" : "bg-gray-100"}`}>
            <div className="col-span-1">
                {newIndex}
            </div>
            <div className="col-span-3">

                {data.laptop.brand}

            </div>

            <div className="col-span-3  ">
                <Link
                    href={"/dashboard/editItem/" + data._id}
                    className=" hover:text-indigo-500"
                >{data.laptop.model}  </Link></div>
            <div className="col-span-1">{data.processor.brand}</div>
            <div className="col-span-2  ">{data.laptop.price}</div>

            <div className="col-span-2  ">{data.laptop.stock}</div>

        </div>
    );
}

export default Item;

import Link from 'next/link';
import React from 'react';

const User = ({ index, currentPage, data }) => {
    let newIndex = (currentPage * 12) + 1 + index

    return (
        <div className={`grid grid-cols-12 text-xs sm:text-sm md:text-base p-2 justify-items-center ${index % 2 == 0 ? "bg-white" : "bg-gray-100"} ${data.role == "admin"?"font-semibold border border-black":""}`}>
            <div className="col-span-1">
                {newIndex}
            </div>
            <div className="col-span-2">
                <Link
                    href={"/dashboard/users/" + data._id}
                    className=" hover:text-indigo-500"
                >
                    {data.name}
                </Link>
            </div>
            <div className="col-span-3 ">
                {data.phone}  </div>
            <div className="col-span-4 overflow-hidden">{data.email}</div>
            <div className="col-span-2 ">{data.city}</div>
        </div>
    );
}

export default User;

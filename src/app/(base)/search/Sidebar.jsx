'use client'
import React, { useEffect, useRef, useState } from 'react';
import Form from './Form';
import Loading from '@/app/utls/loading/Loading';
import { IoFilterSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { useSearchParams } from 'next/navigation';
import { queryOrganizer } from '@/app/utls/searchUrlFilter/searchUrlFilter';
import { useRouter } from 'next/navigation';
const Sidebar = ({ data, request }) => {
    const searchParams = useSearchParams();
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const filterPrice = (e) => {
   
        e.preventDefault();
        let searchQuery = {}
        for (const [key, value] of searchParams.entries()) {
            searchQuery[key] = value;
        }
        let queryObj = queryOrganizer(searchQuery);
        let queryString = "/search?";
        let start = true;
        let query = queryObj;
        for (let item in query) {
            if (item == "sort") continue;
            if (start) queryString += `${item}=${query[item]}`;
            else queryString += `&${item}=${query[item]}`;
            start = false;
        }
        let text = e.target.value;
        if (text == "0");
        else if (start) queryString += `${"sort"}=${text}`
        else queryString += `&${"sort"}=${text}`;
        router.push(queryString)
    }
    useEffect(() => {
        setLoading(false)
    }, [data])
    return (
        <>
            {/* Loading screen for query change  */}
            <div className={`${loading ? "grid" : "hidden"} h-screen w-full fixed top-14 left-0 z-50 grid gap-2 place-content-center bg-gray-200/40`}>
                <Loading></Loading>

            </div>
            {/* Small screen sidebar toggler */}
            <div className='flex items-center justify-between bg-white px-4 py-1 lg:hidden border-b-2 pb-2'>
                <button className='flex gap-2 items-center' onClick={() => setOpen(true)}><span>Filters</span> <IoFilterSharp /></button>
                <div className='flex gap-2'>
                    <p>Price</p>
                    <select  onChange={filterPrice} className='border-2  rounded  text-sm font-semibold px-2 py-1 cursor-pointer'>
                        <option value={0}>Default</option>
                        <option value={1}>low to high</option>
                        <option value={-1}>High to low</option>
                    </select>
                </div>
            </div>
            {/* small screen sidebar */}
            <div className={`bg-white shadow border p-3 w-full ${open ? " left-0" : "-left-full"} flex flex-col lg:hidden lg:w-0 fixed top-0 h-screen overflow-y-scroll duration-100`} style={{ zIndex: "111" }}>
                <div className='flex justify-between w-full border-b-2  mb-3 pb-2 px-3'>
                    <p className='font-semibold'>Filters</p>
                    <button onClick={() => setOpen(false)}><ImCross /></button>
                </div>
                <Form setLoading={setLoading} queryParams={request} sm={"-sm"}></Form>
            </div>
            {/* Large Screen sidebar */}
            <div className='bg-white shadow  border p-2 w-0 hidden lg:flex lg:flex-col gap-4 lg:w-80 sticky top-[4.5rem] duration-100 h-fit scroll-rock-sm '>
                <p className='font-semibold text-lg px-2 py-2 border-b-2 border-gray-300'>Filters</p>
                <Form setLoading={setLoading} queryParams={request} sm={"-lg"}></Form>
            </div>
        </>
    );
}

export default Sidebar;

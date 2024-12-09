'use client'
import React, { useEffect, useRef, useState } from 'react';
import Form from './Form';
import Loading from '@/app/utls/loading/Loading';

const Sidebar = ({ data, request }) => {

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
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
            <div className='flex items-center justify-between bg-white px-4 py-1 lg:hidden'>
                <button className='' onClick={() => setOpen(true)}>Filters</button>
                <div className='flex gap-2'>
                    <p>Price</p>
                    <select className='border-2 bg-gray-200'>
                        <option>Default</option>
                        <option>low to high</option>
                        <option>High to low</option>
                    </select>
                </div>
            </div>
            {/* small screen sidebar */}
            <div className={`bg-white shadow border p-3 w-full ${open ? " left-0" : "-left-full"} flex flex-col lg:hidden lg:w-0 absolute top-0 h-fit duration-100 z-[60]`}>
                <div className='flex justify-between w-full border-b-2  mb-3 pb-2'>
                    <p className='font-semibold'>Filters</p>
                    <button onClick={() => setOpen(false)}>❌</button>
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

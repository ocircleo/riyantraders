'use client'
import React, { useState } from 'react';
import Form from './Form';

const Sidebar = ({ request }) => {

    const [open, setOpen] = useState(false)
    /**
     * search bar filters:
     * 1. in-stock -- ok
     * 2. price range -- 
     * 3. processor brand -- ok
     * 4. processor gen -- ok
     * 5. ram size -- ok
     * 6. storage size
     * 7. graphics card --> size or inbuilt in chip
     */
    return (
        <>
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
            <div className={`bg-white shadow border p-3 w-full ${open ? " left-0" : "-left-full"} flex flex-col lg:hidden lg:w-0 absolute top-0 h-fit duration-100 `}>
                <div className='flex justify-between w-full border-b-2  mb-3 pb-2'>
                    <p className='font-semibold'>Filters</p>
                    <button onClick={() => setOpen(false)}>❌</button>
                </div>
                <Form query={request}></Form>
            </div>
            {/* Large Screen sidebar */}
            <div className='bg-white shadow  border p-2 w-0 hidden lg:flex lg:flex-col gap-4 lg:w-80 sticky top-[4.5rem] overflow-y-scroll duration-100 h-fit scroll-rock-sm '>
                <p className='font-semibold text-lg px-2 py-2 border-b-2 border-gray-300'>Filters</p>
                <Form query={request} sm={0}></Form>
            </div>
        </>
    );
}

export default Sidebar;

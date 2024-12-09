"use client"
import { queryOrganizer } from '@/app/utls/searchUrlFilter/searchUrlFilter';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

const TopSection = () => {
    const searchParams = useSearchParams();
    let finalQueryRef = useRef({})
    useEffect(() => {
        let searchQuery = {}
        for (const [key, value] of searchParams.entries()) {
            searchQuery[key] = value;
        }
        let queryObj = queryOrganizer(searchQuery);
        finalQueryRef.current = queryObj;
    }, [searchParams])
    let router = useRouter()
    const filterPrice = (e) => {
        e.preventDefault();
        let queryString = "/search?";
        let start = true;
        let query = finalQueryRef.current;
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
    return (
        <div className='hidden items-center justify-between bg-white shadow border w-full h-12 px-4 py-1 lg:flex'>
            <button >Sort Items</button>
            <div className='flex gap-3'>

                {/* <div className='flex gap-2'>
                    <p>Brand</p>
                    <select className='border-2 bg-blue-400 rounded text-white text-sm font-semibold px-2 cursor-pointer'>
                        <option>All</option>
                        <option>low to high</option>
                        <option>High to low</option>
                    </select>
                </div> */}
                <div className='flex gap-2 items-center'>
                    <p>Price</p>
                    <select onChange={filterPrice} className='border-2  rounded  text-sm font-semibold px-2 py-1 cursor-pointer'>
                        <option value={0}>Default</option>
                        <option value={1}>low to high</option>
                        <option value={-1}>High to low</option>
                    </select>
                </div>
            </div>

        </div>
    );
}

export default TopSection;

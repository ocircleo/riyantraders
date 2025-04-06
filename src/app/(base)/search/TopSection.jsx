"use client"
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import { VscGoToSearch } from "react-icons/vsc";
const TopSection = () => {
    const searchParams = useSearchParams();
    let stockRef = useRef(null)
    let priceRef = useRef(null)
    let getQuery = () => {
        let searchQuery = {}
        for (const [key, value] of searchParams.entries()) {
            searchQuery[key] = value;
        }
        return searchQuery;
    }
    useEffect(() => {
        let searchQuery = {}
        for (const [key, value] of searchParams.entries()) {
            searchQuery[key] = value;
        }
        if (searchQuery.stock) {
            if (searchQuery.stock == "in") stockRef.current.checked = true;
            else stockRef.current.checked = false;
        }
        if (searchQuery.sort) {
            if (searchQuery.sort == "0") priceRef.current.value = 0
            else if (searchQuery.sort == "1") priceRef.current.value = 1
            else if (searchQuery.sort == "-1") priceRef.current.value = -1
        }
    }, [searchParams])
    let router = useRouter()
    const filterPrice = (e) => {
        e.preventDefault();
        let queryString = "/search?";
        let start = true;
        let query = getQuery();
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
    const inStock = (e) => {
        let queryString = "/search?";
        let start = true;
        let query = getQuery();
        for (let item in query) {
            if (item == "stock") continue;
            if (start) queryString += `${item}=${query[item]}`;
            else queryString += `&${item}=${query[item]}`;
            start = false;
        }
        if (e.target.checked) {
            queryString += `&stock=in`;
        }
        router.push(queryString)
    }
    let reset = () => {
        router.push("/search")
    }
    return (
        <div className=' md:items-center md:justify-between bg-white shadow w-full px-4 pt-1 pb-2 flex-col md:flex-row flex '>
            <div className='text-sm font-semibold flex items-center gap-2'> <p>Sort Items</p>  </div>
            <div className='flex gap-3 flex-wrap'>
                <div className='flex items-center gap-2'>
                    <input ref={stockRef} onChange={inStock} type="checkbox" name='inStock' id={'inStock'} className='h-4 w-4' />
                    <label htmlFor={'inStock'} className='text-sm font-semibold'>In Stock</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <select ref={priceRef} onChange={filterPrice} className='border-2  rounded  text-sm font-semibold px-2 py-1 cursor-pointer'>
                        <option value={0}>Price Default</option>
                        <option value={1}>low to high</option>
                        <option value={-1}>High to low</option>
                    </select>
                </div>
                <span className='p-2 bg-gray-100 rounded cursor-pointer active:scale-90 duration-100 hover:bg-gray-200' title='Reset filters' onClick={reset}>
                    <VscGoToSearch /> </span>
            </div>

        </div>
    );
}

export default TopSection;

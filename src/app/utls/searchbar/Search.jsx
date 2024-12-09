"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import { textWash } from './TextFilter';
import { useEffect, useRef } from 'react';
import { queryOrganizer } from '../searchUrlFilter/searchUrlFilter';
const Search = ({ invisible = "lg" }) => {
    const searchParams = useSearchParams();
    let finalQueryRef = useRef({})
    const formRef = useRef("");
    useEffect(() => {
        let searchQuery = {}
        for (const [key, value] of searchParams.entries()) {
            searchQuery[key] = value;
        }
        let queryObj = queryOrganizer(searchQuery);
        finalQueryRef.current = queryObj;
        if (formRef.current) {
            if (queryObj.text) formRef.current.value = textWash(queryObj.text)
        }
    }, [searchParams])
    let router = useRouter()
    const searchText = (e) => {
        e.preventDefault();
        let queryString = "/search?";
        let start = true;
        let query = finalQueryRef.current;
        for (let item in query) {
            if (item == "text") continue;
            if (start) queryString += `${item}=${query[item]}`;
            else queryString += `&${item}=${query[item]}`;
            start = false;
        }
        let text = e.target.text.value;
        if (start) queryString += `${"text"}=${textWash(text)}`
        else queryString += `&${"text"}=${textWash(text)}`;
        router.push(queryString)
    }
    return (
        <form onSubmit={searchText} action='/search' title='search' className={`w-full my-4 lg:w-2/5 lg:mx-0 rounded  border-2 border-gray-800  ${invisible == "lg" ? "flex lg:hidden " : invisible == "sm" ? "hidden lg:flex" : "flex"} items-center justify-center gap-2 bg-transparent scale-90 lg:scale-100`}>
            <input ref={formRef} type="text" name="text" className='bg-transparent p-3 lg:p-2  w-full h-full outline-none border-none  focus:border-transparent focus:outline-none ' placeholder='Search Laptops' />
            <button type='submit' className='h-full bg-gray-800  px-2 sm:px-5 py-3 lg:py-2 text-white duration-100 active:scale-x-105 font-semibold '>Search</button>
        </form>
    );
};


export default Search;
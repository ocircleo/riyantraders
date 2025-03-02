import { API } from '@/app/utls/api/API';
import LaptopCard from '@/app/utls/laptopCard/LaptopCard';
import React from 'react';
import Paginate from './Paginate';
import PaginateItem from './Paginate';

const Main = async ({ request }) => {
    let searchParams = request?.searchParams
    let page = searchParams.page || 0;
    let response, data, dataArray;
    let length = [];

    try {
        response = await fetch(API + `user/laptops?page=${page}`, { cache: "no-cache" })
        data = await response.json();
        dataArray = data?.result?.data ?? [];
        length = [...new Array(Math.ceil((data?.result?.length ?? 0) / 12)).keys()];
    } catch (error) {
        console.log(error);
        return <div className='bg-white w-full h-screen grid place-content-center text-center text-2xl font-semibold'>OOps...! <br /> <p>Failed to load data. <br></br> Status: {error.message}</p></div>
    }
    return (
        <div className='flex flex-col w-full'>

            {dataArray.length == 0 ? <div className='grid place-content-center h-screen bg-gray-100 text-center text-2xl w-full '>No data found</div> : null}

            <div className='bg-white w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-4 px-10 md:px-0'>
                {
                    dataArray.map((item, index) => <LaptopCard key={index} laptop={item}></LaptopCard>)
                }
            </div>
            <div className='flex gap-2 my-6 items-center w-full justify-center'>
                {
                    length.map(ele => <PaginateItem key={ele} length={length.length} current={ele} request={page} ></PaginateItem>)
                }

            </div>
        </div>
    );
}

export default Main;

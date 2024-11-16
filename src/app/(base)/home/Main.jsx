import { API } from '@/app/utls/api/API';
import LaptopCard from '@/app/utls/laptopCard/LaptopCard';
import React from 'react';
import Paginate from './Paginate';
import PaginateItem from './Paginate';

const Main = async ({ request }) => {
    console.log(request);
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
        return <div className='bg-gray-200 w-full h-[200vh] grid place-content-center'> <p>Failed to load data. <br></br> status: {error.message}</p></div>
    }
    return (
        <div className='flex flex-col'>


            <div className='bg-white w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-4'>
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

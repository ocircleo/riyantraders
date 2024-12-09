import React from 'react';
import Paginate from './Paginate';
import LaptopCard from '@/app/utls/laptopCard/LaptopCard';

const Main = async ({ data, query, paginate }) => {
    let dataArray = data?.data ?? [];

    if (dataArray && dataArray.length > 0) return (
        <div className='bg-gray-white w-full h-fit pb-12 pt-4'>
            <div className='bg-white w-full px-4 md:px-2 h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-4'>
                {dataArray.map((ele, index) => <LaptopCard key={index} laptop={ele}></LaptopCard>)}
            </div>
            <Paginate query={query} paginate={paginate}></Paginate>
        </div>
    );

}

export default Main;

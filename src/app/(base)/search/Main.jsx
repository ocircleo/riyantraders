import React from 'react';
import Paginate from './Paginate';
import DataCard from '@/app/utls/DataCard/DataCard';

const Main = async ({ data, query, paginate }) => {
    let dataArray = data?.data ?? [];

    if (dataArray && dataArray.length > 0) return (
        <div className='bg-gray-white w-full h-fit pb-12 pt-4'>
            <div className='bg-white w-full px-4 md:px-2 h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6 gap-4'>
                {dataArray.map((ele, index) => <DataCard key={index} data={ele}></DataCard>)}
            </div>
            <Paginate query={query} paginate={paginate}></Paginate>
        </div>
    )
    else return <div className='text-xl grid place-content-center w-full py-16 font-semibold'>No data found</div>
}

export default Main;

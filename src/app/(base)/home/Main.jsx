import { API } from '@/app/utls/api/API';
import LaptopCard from '@/app/utls/laptopCard/LaptopCard';
import React from 'react';

const Main = async () => {
    let response, data, dataArray;
    try {
        response = await fetch(API + "user/laptops?page=0",{cache:"no-cache"})
        data = await response.json();
        dataArray = data?.result?.data ?? [];
    } catch (error) {
        console.log(error);
        return <div className='bg-gray-200 w-full h-[200vh] grid place-content-center'> <p>Failed to load data. <br></br> status: {error.message}</p></div>
    }
    return (
        <div className='bg-white w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-4'>
            {
                dataArray.map((item, index) => <LaptopCard key={index} laptop={item}></LaptopCard>)
            }
        </div>
    );
}

export default Main;

import React from 'react';
import Paginate from './Paginate';

const Main = async ({request}) => {
    return (
        <div className='bg-gray-200 w-full h-[100vh] '>
            <p className='text-2xl font-semibold'>Under Construction</p>
            <Paginate request={request}></Paginate>
        </div>
    );
}

export default Main;

import React from 'react';

const TopSection = () => {
    return (
        <div className='hidden items-center justify-between bg-white shadow border w-full h-12 px-4 py-1 lg:flex'>
            <button >Filters</button>
            <div className='flex gap-3'>

                <div className='flex gap-2'>
                    <p>Brand</p>
                    <select className='border-2 bg-blue-400 rounded text-white text-sm font-semibold px-2 cursor-pointer'>
                        <option>All</option>
                        <option>low to high</option>
                        <option>High to low</option>
                    </select>
                </div>
                <div className='flex gap-2'>
                    <p>Price</p>
                    <select className='border-2 bg-blue-400 rounded text-white text-sm font-semibold px-2 cursor-pointer'>
                        <option>Default</option>
                        <option>low to high</option>
                        <option>High to low</option>
                    </select>
                </div>
            </div>

        </div>
    );
}

export default TopSection;

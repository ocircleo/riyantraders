import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LaptopCard = ({ laptop }) => {

    return (
        <div className="bg-gray-50 border-2 rounded flex gap-1 py-5 items-center justify-between flex-col w-full">
            <div className=' w-full px-2 group relative overflow-hidden'>
                <Image alt={laptop.dataUrl} height={125} width={220} src={laptop.images[0]} className='w-full aspect-video bg-transparent border-transparent outline-transparent  hover:rounded-e-full'></Image>
                <div className='absolute -right-10 group-hover:right-0  top-0  h-full w-10 duration-100 bg-black/10 z-40'></div>

            </div>
            <p className='text-sm font-semibold px-2'>{laptop.laptop.brand + " " + laptop.laptop.model + " " + laptop.memory.ram}</p>
            <div className='flex gap-2 flex-col  items-start w-full px-2'>
                <p className=' text-xs text-gray-700 font-semibold'><span className='text-black px-1 rounded'>Processor :</span>  {laptop.processor.brand + " " + laptop.processor.model + " " + laptop.processor.core}</p>
                <p className=' text-xs text-gray-700 font-semibold'> <span className='text-black px-1 rounded'>Ram :</span> {laptop.memory.ram} <span className='text-black px-1 rounded'>Storage :</span> {laptop.storage.capacity}</p>
                <p className=' text-xs text-gray-700 font-semibold'> <span className='text-black px-1 rounded'>Display :</span> {laptop.display.size + " " + laptop.display.resolution + " " + laptop.display.type} </p>
                <p className=' text-xs text-gray-700 font-semibold'><span className='text-black px-1 rounded'>Stock :</span> {laptop.laptop.stock} </p>
            </div>
            <div className='w-full px-2'>
                <button className='bg-white border-2 border-gray-800  w-full font-semibold text-black py-1 rounded mt-6 hover:bg-black hover:text-blue-600'>Order Now</button>

            </div>
        </div>
    );
};

export default LaptopCard;
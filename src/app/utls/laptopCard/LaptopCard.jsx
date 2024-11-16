import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import OrderBtn from './OrderBtn';
import cart from "/public/cart.png"
import eye from "/public/eye.png"
import compare from "/public/compare.png"
const LaptopCard = ({ laptop }) => {
    let flag;
    if (Number(laptop.laptop.stock) == 0) flag = <div className='absolute top-0 rounded-tl-sm rounded-br-md left-0 bg-red-500 text-white px-2 text-xs font-semibold'>Out of Stock</div>
    else if (Number(laptop.laptop.stock) < 10) flag = <div className='absolute top-0 rounded-tl-sm rounded-br-md left-0 bg-orange-500 text-white px-2 text-xs font-semibold'>Low Stock</div>

    return (
        <div className="group bg-gray-50 border-2 rounded flex gap-1 py-5 items-center justify-between flex-col w-full relative">
            {flag}
            <div className=' w-full px-2  relative overflow-hidden'>
                <Image alt={laptop.dataUrl} height={125} width={220} src={laptop.images[0]} className='w-full aspect-video bg-transparent border-transparent outline-transparent  hover:rounded-e-full'></Image>
                <div className='absolute lg:-right-10 lg:group-hover:right-0 right-0  top-0  h-full w-10 duration-100 bg-black/10 backdrop-blur-lg lg:bg-gray-200 z-50 flex items-center justify-center gap-1 flex-col overflow-hidden'>
                    <Image height={10} width={30} src={cart} alt='cart' className='bg-white p-2 cursor-pointer active:scale-90 duration-100 hover:bg-blue-500' title='Add to cart'></Image>
                    <Image height={10} width={30} src={compare} alt='Compare' className='bg-white p-2 cursor-pointer active:scale-90 duration-100 hover:bg-blue-500' title='Compare Laptops'></Image>
                    <Image height={10} width={30} src={eye} alt='preview' className='bg-white p-2 cursor-pointer active:scale-90 duration-100 hover:bg-blue-500' title='Compare Laptops'></Image>


                </div>

            </div>
            <p className='text-sm font-semibold px-2'>{laptop.laptop.brand + " " + laptop.laptop.model + " " + laptop.memory.ram}</p>
            <div className='flex gap-2 flex-col  items-start w-full px-2'>
                <p className=' text-xs text-gray-700 font-semibold'><span className='text-black px-1 rounded'>Processor :</span>  {laptop.processor.brand + " " + laptop.processor.model + " " + laptop.processor.core}</p>
                <p className=' text-xs text-gray-700 font-semibold'> <span className='text-black px-1 rounded'>Ram :</span> {laptop.memory.ram} <span className='text-black px-1 rounded'>Storage :</span> {laptop.storage.capacity}</p>
                <p className=' text-xs text-gray-700 font-semibold'> <span className='text-black px-1 rounded'>Display :</span> {laptop.display.size + " " + laptop.display.resolution + " " + laptop.display.type} </p>
             
            </div>
            <OrderBtn laptop={laptop}></OrderBtn>
        </div>
    );
};

export default LaptopCard;
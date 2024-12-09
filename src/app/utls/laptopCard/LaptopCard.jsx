import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import OrderBtn from './OrderBtn';

import eye from "/public/eye.png"
import compare from "/public/compare.png"
import CartButton from './CartButton';
const LaptopCard = ({ laptop }) => {
    let flag;
    if (Number(laptop?.laptop?.stock) == 0) flag = <div className='absolute top-0 rounded-tl-sm rounded-br-md left-0 bg-red-500 text-white px-2 text-xs font-semibold'>Out of Stock</div>
    else if (Number(laptop?.laptop?.stock) < 10) flag = <div className='absolute top-0 rounded-tl-sm rounded-br-md left-0 bg-orange-500 text-white px-2 text-xs font-semibold'>Low Stock</div>

    return (
        <div className="group bg-gray-50 border-2 rounded flex gap-1 py-5 items-center justify-between flex-col w-full relative">
            {flag}
            <div className=' w-full px-2  relative overflow-hidden'>
                <Image alt={laptop.dataUrl} height={125} width={220} src={laptop.images[0]} className='w-full aspect-video object-cover bg-white rounded border-transparent outline-transparent duration-100  z-30  hover:scale-110'></Image>
                {/* <div className={"bg-white rounded capitalize -z-10 w-full h-full absolute top-0 grid place-content-center font-semibold text-sm text-gray-400 "}>
                    image Loading failed
                </div> */}
                <div className='absolute lg:-right-10 lg:group-hover:right-0 right-0  top-0  h-full w-10 duration-100 bg-black/10 backdrop-blur-lg lg:bg-gray-200 z-50 flex items-center justify-center gap-1 flex-col overflow-hidden'>
                    <CartButton id={laptop._id}></CartButton>
                    <Image height={10} width={30} src={compare} alt='Compare' className='bg-white p-2 cursor-pointer active:scale-90 duration-100 hover:bg-blue-500' title='Compare Laptops'></Image>
                    <Image height={10} width={30} src={eye} alt='preview' className='bg-white p-2 cursor-pointer active:scale-90 duration-100 hover:bg-blue-500' title='Compare Laptops'></Image>


                </div>

            </div>
            <Link className='text-sm font-semibold px-2 text-blue-700 capitalize hover:underline underline-offset-4' href={"laptops/" + laptop.dataUrl}>{laptop.laptop.brand + " " + laptop.laptop.model + " " + laptop.memory.ram}</Link>
            <div className='flex gap-2 flex-col  items-start w-full px-2'>
                <p className=' text-xs text-gray-700 font-semibold'><span className='text-black px-1 rounded'>Processor :</span>  {laptop.processor.brand + " " + laptop.processor.model}</p>
                <p className=' text-xs text-gray-700 font-semibold'> <span className='text-black px-1 rounded'>Ram :</span> {laptop.memory.ram}GB <span className='text-black px-1 rounded'>Storage :</span> {laptop.storage.capacity}GB</p>
                <p className=' text-xs text-gray-700 font-semibold'> <span className='text-black px-1 rounded'>Display :</span> {laptop.display.size + " Inch, " + laptop.display.resolution + " " + laptop.display.type} </p>
                <p className=' text-xs font-semibold'> <span className='text-black px-1 rounded'>Price :</span> {laptop.laptop.price} ৳ </p>

            </div>
            <OrderBtn laptop={laptop}></OrderBtn>
        </div>
    );
};

export default LaptopCard;
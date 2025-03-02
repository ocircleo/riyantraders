'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import OrderBtn from './OrderBtn';
import compare from "/public/compare.png"
import CartButton from './CartButton';
import eye from "/public/eye.png"
import { RxCross2 } from "react-icons/rx";
import ImageSlider from '@/app/(base)/laptops/[url]/ImageSlider';
const LaptopCard = ({ laptop }) => {
    const [show, setShow] = useState(false)
    let flag;
    let images = laptop.images ?? [];
    if (Number(laptop?.laptop?.stock) <= 0) flag = <div className='absolute top-0 rounded-tl-sm rounded-br-md left-0 bg-red-500 text-white px-2 text-xs font-semibold'>Out of Stock</div>
    else if (Number(laptop?.laptop?.stock) < 10) flag = <div className='absolute top-0 rounded-tl-sm rounded-br-md left-0 bg-orange-500 text-white px-2 text-xs font-semibold'>Low Stock</div>
    return (
        <div className="group bg-gray-50 border-2 rounded flex gap-1 py-5 items-center justify-between flex-col w-full relative">
            {show && <div className="w-full  z-[51] h-screen fixed top-0 left-0 flex items-center justify-center">
                <div className="relative w-4/5 lg:w-2/5 aspect-video bg-white z-50">
                    <RxCross2 onClick={()=>setShow(false)} className='absolute top-2 right-2 text-2xl cursor-pointer z-50 bg-white rounded' />
                    <ImageSlider images={images}></ImageSlider>
                    {/* {images.map((ele, index) => <Image key={index + laptop?.model} width={384} height={225} alt='lap' src={ele} ></Image>)} */}

                </div>
                <div onClick={()=>setShow(false)} className='absolute w-full h-full bg-white/5 backdrop-blur-sm z-20'>
                </div>
            </div>}

            {flag}

            <div className=' w-full p-6 lg:p-3   relative overflow-hidden '>

                <Link className='text-sm font-semibold px-2 text-blue-700 capitalize hover:underline underline-offset-4 py-2' href={"laptops/" + laptop.dataUrl}><Image alt={laptop.dataUrl} height={125} width={220} src={laptop.images[0]} className=' aspect-video w-full object-cover bg-white rounded border-transparent outline-transparent duration-100  z-30  hover:scale-110'></Image></Link>
                {/* <div className={"bg-white rounded capitalize -z-10 w-full h-full absolute top-0 grid place-content-center font-semibold text-sm text-gray-400 "}>
                    image Loading failed
                </div> */}

                <div className='absolute lg:-right-10 lg:group-hover:right-0 right-0  top-0  h-full w-10 duration-100 bg-gray-200/50 backdrop-blur-lg lg:bg-gray-200 z-50 flex items-center justify-center gap-1 flex-col overflow-hidden'>
                    <CartButton id={laptop._id}></CartButton>
                    {/* <Image height={10} width={30} src={compare} alt='Compare' className='bg-white p-2 cursor-pointer active:scale-90 duration-100 hover:bg-blue-500' title='Compare Laptops'></Image> */}
                    <Image onClick={() => setShow(true)} height={10} width={30} src={eye} alt='preview' className='bg-white p-2 cursor-pointer active:scale-90 duration-100 hover:bg-blue-500' title='Preview'></Image>
                </div>

            </div>
            <Link className='text-sm font-semibold px-2 text-blue-700 capitalize hover:underline underline-offset-4 py-2' href={"laptops/" + laptop.dataUrl}>{laptop.laptop.brand + " " + laptop.laptop.model}</Link>
            <div className='flex gap-2 flex-col  items-start w-full px-2 relative'>

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
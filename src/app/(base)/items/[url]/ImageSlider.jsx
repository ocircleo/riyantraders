"use client"
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
let activeIndex = 0;
let maxIndex = 0;
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const ImageSlider = ({ images = [] }) => {
    let container = useRef(null);
    const scrollLeft = (e) => {
        maxIndex = images.length - 1;
        if (activeIndex == 0) return;
        activeIndex--
        let width, parent;
        parent = container.current;
        width = container.current.offsetWidth;
        let to = Number(width) * activeIndex;
        parent.scrollTo({
            top: 0,
            left: to,
            behavior: 'smooth',
        });
    }
    const scrollRight = (e) => {
        maxIndex = images.length - 1;
        if (activeIndex == maxIndex) return;
        activeIndex++
        let width, parent;
        parent = container.current;
        width = container.current.offsetWidth;
        let to = Number(width) * activeIndex;
        parent.scrollTo({
            top: 0,
            left: to,
            behavior: 'smooth',
        });
    }
    useEffect(() => {
        return () => { activeIndex = 0; maxIndex = 0 }
    }, [])
    return (
        <div ref={container} style={{ scrollSnapType: "x mandatory" }} className='relative  w-full h-full flex flex-row flex-1 gap-2 overflow-x-scroll md:overflow-hidden border-2  select-none '>
            <div className='hidden sticky z-30 top-1/2 left-2  md:flex items-center justify-center'>
                <button className='bg-gray-200 hover:bg-blue-400 px-4 py-2 rounded active:scale-90 duration-75  font-semibold' onClick={scrollLeft}><FaArrowLeft /></button>
            </div>
            {images.map((ele, index) => <><div className='relative w-full aspect-video'> <Image key={index} data-id={index} style={{ scrollSnapAlign: "start" }} width={600} alt='laptop-image' height={300} src={ele} className='w-full aspect-video bg-white  select-none ' ></Image> <div className='absolute text-sm bottom-2 left-1/2 z-50 px-2 bg-slate-100/65 rounded'>{index + 1} / {images.length}</div> </div></>)}
            <div className='hidden sticky z-30 top-1/2 right-2 bg-transparent  md:flex items-center justify-center'>   <button onClick={scrollRight} className='bg-gray-200 hover:bg-blue-400 px-4 py-2 rounded active:scale-90 duration-75 font-semibold' ><FaArrowRight /></button></div>
        </div>
    );
}

export default ImageSlider;

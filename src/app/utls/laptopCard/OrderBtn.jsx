"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { ToggleAddCart } from '../db/Cart';

const OrderBtn = ({ laptop }) => {
    const router = useRouter();
    const order = () => {
        ToggleAddCart(laptop._id);
        router.push(`/order?items=${laptop._id}`)
    }
    return (
        <div className='w-full px-2'>
            <button onClick={order} className='bg-white border-2 border-gray-800  w-full font-semibold text-black py-1 rounded mt-6 hover:bg-blue-400 hover:text-white '>Order Now</button>

        </div>
    );
}

export default OrderBtn;

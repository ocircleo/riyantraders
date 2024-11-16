"use client"
import React from 'react';
import { AddToCart } from '../db/Cart';
import { useRouter } from 'next/navigation';

const OrderBtn = ({ laptop }) => {
    const router = useRouter();
    const order = () => {
        AddToCart(laptop._id);
        router.push(`/order?items=${laptop._id}`)
    }
    return (
        <div className='w-full px-2'>
            <button onClick={order} className='bg-white border-2 border-gray-800  w-full font-semibold text-black py-1 rounded mt-6 hover:bg-black hover:text-blue-600'>Order Now</button>

        </div>
    );
}

export default OrderBtn;

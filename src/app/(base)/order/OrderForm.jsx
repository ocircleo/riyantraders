'use client'
import React, { useEffect, useRef } from 'react';
import { DecrementOrder, DeleteOrder, GetOrder, GetOrderId, IncrementOrder, SetOrder } from './OrderState';

const OrderForm = ({ data }) => {
    const counterRef = useRef(null)
    useEffect(() => {
        SetOrder(data._id);
    }, [data._id])
    const increment = () => {
        IncrementOrder(data._id)
        if (counterRef.current) counterRef.current.innerText = GetOrderId(data._id);
    }
    const decrement = () => {
        DecrementOrder(data._id)
        if (counterRef.current) counterRef.current.innerText = GetOrderId(data._id);
    }
    return (
        <div className='flex  gap-2'>
            <div className='flex gap-2 items-center '>
                <button onClick={increment} className='bg-white border-2 border-black text-lg font-extrabold h-8 w-8 text-center rounded active:scale-90 duration-100'>+</button>
                <span ref={counterRef} className="bg-black text-white rounded border px-2 h-8 text-center flex items-center justify-center w-8 ">0</span>
                <button onClick={decrement} className='bg-white border-2 border-black text-lg font-extrabold h-8 w-8 text-center rounded active:scale-90 duration-100'>-</button>
            </div>
            <button className='bg-red-600 text-white font-semibold rounded px-2  py-1' onClick={() => DeleteOrder(data._id)}>Delete</button>

        </div>
    );
}

export default OrderForm;

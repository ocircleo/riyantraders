'use client'
import React, { useEffect, useRef } from 'react';
import { DecrementOrder, DeleteOrder, GetOrderId, IncrementOrder, SetOrder } from './OrderState';
import emitter from '@/app/utls/mitt/Mit';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
const OrderForm = ({ data }) => {
    const counterRef = useRef(null)
    const searchParams = useSearchParams()
    const router = useRouter();
    const emit = () => emitter.emit("orderUpdated")
    useEffect(() => {
        SetOrder(data._id, data, 1);
    }, [data, data._id])



    const increment = () => {
        IncrementOrder(data._id)
        emit();
        let order = GetOrderId(data._id);
        if (counterRef.current) counterRef.current.innerText = order.quantity;
    }
    const decrement = () => {
        DecrementOrder(data._id)
        emit();
        let order = GetOrderId(data._id);
        if (counterRef.current) counterRef.current.innerText = order.quantity;
    }
    const deleteOrder = () => {
        DeleteOrder(data._id);
        emit()
        let urlArray = searchParams.get("items");
        urlArray = urlArray.split(",");

        let newArrayUrl = urlArray.filter(ele => ele != data._id)

        router.replace("/order?items=" + newArrayUrl);
    }
    return (
        <div className='flex  gap-2 flex-wrap'>
            <div className='flex gap-2 items-center '>
                <button onClick={increment} className='bg-white border-2 border-black text-lg font-extrabold h-8 w-8 text-center rounded active:scale-90 duration-100'>+</button>
                <span ref={counterRef} className="bg-black text-white rounded border px-2 h-8 text-center flex items-center justify-center w-8 ">1</span>
                <button onClick={decrement} className='bg-white border-2 border-black text-lg font-extrabold h-8 w-8 text-center rounded active:scale-90 duration-100'>-</button>
            </div>
            <button className='bg-red-600 text-white font-semibold rounded px-2  py-1' onClick={deleteOrder}>Delete</button>

        </div>
    );
}

export default OrderForm;

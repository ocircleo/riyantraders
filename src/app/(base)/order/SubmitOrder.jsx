"use client"
import React from 'react';
import { GetOrder } from './OrderState';


const SubmitOrder = () => {
    const submit = () => {
        let data = GetOrder()
        console.log(data);
    }
    return (
        <div className='w-full flex justify-center '>
            <button onClick={submit} className='bg-green-500 px-12 py-1 font-semibold w-fit '>
                Confirm Order
            </button>

        </div>
    );
}

export default SubmitOrder;

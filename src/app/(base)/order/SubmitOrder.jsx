"use client"
import React, { useEffect, useState } from 'react';
import { GetOrder } from './OrderState';
import emitter from '@/app/utls/mitt/Mit';


const SubmitOrder = () => {
    const [total, setTotal] = useState({ total: 0, price: 0 })
    const submit = (e) => {
        e.preventDefault();
        let data = GetOrder()
        console.log(data);
    }
    const orderUpdated = () => {

        let data = GetOrder()
        let total = 0;
        let price = 0;
        for (let item in data) {
            // console.log([item]?.data?.laptop?.price);
            if (!Number(data[item]?.data?.laptop?.price)) continue;
            total += Number(data[item]?.quantity)
            price += Number(data[item]?.data?.laptop?.price) * Number(data[item]?.quantity);
        }
        setTotal({ total: total, price: price })
    }
    useEffect(() => {
        orderUpdated();
        emitter.on("orderUpdated", orderUpdated)
        return () => emitter.off("orderUpdated")
    }, [])
    return (
        <div className='w-full flex flex-col p-6  h-full gap-1'>
            <p className='font-semibold'>Total Items Selected: {total.total}</p>
            <p className='font-semibold'>Price: {total.price} Taka</p>
            <form>

                <div className='my-4 font-semibold'>
                    <input type='radio' name='paymentMethod' value={"cod"} id='cod' />
                    <label htmlFor="cod">Cash on Delivery</label><br />
                    <input type='radio' name='paymentMethod' value={"coo"} id='coo' defaultChecked />
                    <label htmlFor="coo">Online Payment</label><br />

                </div>
                <button onClick={submit} className='bg-green-500 px-12 py-1 font-semibold w-fit '>
                    Confirm Order
                </button>
            </form>

        </div>
    );
}

export default SubmitOrder;

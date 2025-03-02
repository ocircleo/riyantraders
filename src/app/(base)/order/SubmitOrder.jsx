"use client"
import React, { useEffect, useState } from 'react';
import { GetOrder } from './OrderState';
import emitter from '@/app/utls/mitt/Mit';


const SubmitOrder = () => {
    const [total, setTotal] = useState({ total: 0, price: 0 })
    // const submit = (e) => {
    //     e.preventDefault();
    //     let data = GetOrder()
    //     console.log(data);
    // }
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
        <div className='w-full flex flex-col-reverse lg:flex-row justify-end p-6  h-full gap-1'>
            <div>
                <p className=''>Total Items: {total.total}</p>
                <p className=''>Price:<span className='font-semibold'> {total.price} Taka</span> </p>

            </div>
        </div>
    );
}

export default SubmitOrder;

import { API } from '@/app/utls/api/API';
import Image from 'next/image';
import React from 'react';

const OrderedItemCard = async ({ id, quantity, price }) => {
    try {
        let url = API + "user/laptop_id/" + id;
        const res = await fetch(url);
        let data = await res.json();
        if (data.error) return <div>{data.message} || id: {id}</div>
        data = data.result;
        return <div className=" rounded flex flex-col lg:flex-row gap-1 py-2 lg:pr-6 my-2 items-center lg:items-center justify-between ">
            <div className='flex flex-col md:flex-row gap-2 items-center '>
                <div className='w-40 px-2 group overflow-hidden'>
                    <Image alt={data?.dataUrl ?? "unspecified"} height={60} width={110} src={(data?.images?.[0] ?? "")} className='w-full aspect-video bg-transparent border-transparent outline-transparent'></Image>
                </div>
                <div className='flex gap-2 flex-col items-start px-2 '>
                    <p className='text-sm font-semibold capitalize'>{data?.laptop?.brand + " " + data?.laptop?.model}</p>

                    <p className=' text-xs text-gray-700 font-semibold capitalize'> {data?.processor?.brand}  | {data?.memory?.ram} GB | {data?.storage?.capacity} GB | {data?.display?.size} inch, {data?.display?.type} </p>

                    <p className='text-sm font-semibold'>Price: {price} Taka
                    </p>
                </div>
            </div>
            <div className='flex items-center flex-col bg-gray-50 px-12 lg:px-0  py-2 lg:py-0'>
                <p>Quantity: {quantity}</p>
                <p>Total: {quantity * price} Taka</p>
            </div>
        </div>
    } catch (error) {
        console.log(error);
        return <div>{error.message}</div>;
    }

}

export default OrderedItemCard;

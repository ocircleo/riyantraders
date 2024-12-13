import Image from 'next/image';
import React from 'react';
import OrderForm from './OrderForm';
const OrderItemCard = ({ data }) => {
    return (
        <div className=" border-2 rounded flex flex-col lg:flex-row gap-1 py-2 lg:pr-6 my-2 items-center justify-between ">
            <div className='flex flex-col md:flex-row gap-2 items-center'>
                <div className='w-40 px-2 group overflow-hidden'>
                    <Image alt={data?.dataUrl ?? "unspecified"} height={60} width={110} src={(data?.images?.[0] ?? "")} className='w-full aspect-video bg-transparent border-transparent outline-transparent'></Image>
                </div>
                <div className='flex gap-2 flex-col items-start px-2 '>
                    <p className='text-sm font-semibold capitalize'>{data?.laptop?.brand + " " + data?.laptop?.model}</p>

                    <p className=' text-xs text-gray-700 font-semibold capitalize'> {data?.processor?.brand}  | {data?.memory?.ram} GB | {data?.storage?.capacity} GB | {data?.display?.size} inch, {data?.display?.type} </p>

                    <p className='text-sm font-semibold'>Price: {data?.laptop?.price} Taka
                    </p>
                </div>
            </div>


            <OrderForm data={data}></OrderForm>
        </div>
    );
}

export default OrderItemCard;

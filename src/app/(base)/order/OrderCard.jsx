import { API } from '@/app/utls/api/API';
import React from 'react';
import OrderForm from './OrderForm';
import Image from 'next/image';
const OrderCard = async ({ id }) => {
    try {
        let url = API + "user/item_id/" + id;
        const res = await fetch(url, { cache: "force-cache", next: { revalidate: (60 * 3) } });
        const data = await res.json();
        if (data.error) return <div>{data.message} || id: {id}</div>
        console.log(data);
        if (data?.result?.category == "laptop") return <OrderItemCard data={data.result}></OrderItemCard>
        return <OrderItemCardGen data={data.result}></OrderItemCardGen>;
    } catch (error) {
        console.log(error);
        return <div>{error.message}</div>;
    }
}

const OrderItemCardGen = ({ data }) => {
    return (
        <div className=" border-2 rounded flex flex-col lg:flex-row gap-1 py-2 lg:pr-6 my-2 items-center justify-between ">
            <div className='flex flex-col md:flex-row gap-2 items-center'>
                <div className='w-40 px-2 group overflow-hidden'>
                    <Image alt={data?.dataUrl ?? "unspecified"} height={60} width={110} src={(data?.images?.[0] ?? "")} className='w-full aspect-video bg-transparent border-transparent outline-transparent'></Image>
                </div>
                <div className='flex gap-2 flex-col  items-start capitalize px-2 '>
                    <p className='text-sm pb-3 font-semibold '>Product: {data?.title}</p>
                    <p className='text-sm font-semibold'>Price: {data?.price} Taka
                    </p>
                </div>
            </div>


            <OrderForm data={data}></OrderForm>
        </div>
    );
}
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


export default OrderCard;

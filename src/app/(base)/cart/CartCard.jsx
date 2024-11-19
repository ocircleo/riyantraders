import { API } from '@/app/utls/api/API';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const CartCard = ({ id }) => {
    const [data, setData] = useState({ loading: true, error: null, data: {} })
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(API + "user/laptop_id/" + id)
                const result = await res.json();
                if (result.error) setData({ loading: false, error: result.message, data: {} });
                else setData({ loading: false, error: null, data: result.result });

            } catch (error) {
                setData({ loading: false, error: error.message, data: {} })
            }
        }
        fetchUser()
    }, [id])
    if (data.loading) return <div className="bg-gray-50 border-2 rounded flex flex-col lg:flex-row gap-1 py-5 lg:pr-6 items-center justify-center w-full lg:h-36 ">
        Loading....
    </div>
    return (
        // <div>{data.data.dataUrl}</div>
        <div className="bg-gray-50 border-2 rounded flex flex-col lg:flex-row gap-1 py-5 lg:pr-6 items-center justify-between w-full lg:h-36 ">
            <div className='flex gap-2 items-center'>
                <div className='w-full sm:w-56 px-2 group overflow-hidden'>
                    <Image alt={data?.data?.dataUrl} height={125} width={220} src={data?.data?.images[0]} className='w-full aspect-video bg-transparent border-transparent outline-transparent'></Image>
                </div>
                <div className='flex gap-2 flex-col  items-start px-2 '>
                    <p className='text-sm font-semibold '>{data?.data?.laptop?.brand + " " + data?.data?.laptop?.model + " " + data?.data?.memory.ram}</p>

                    <p className=' text-xs text-gray-700 font-semibold'> {data?.data?.processor?.brand}  | {data?.data?.memory?.ram} | {data?.data?.storage?.capacity} |{data?.data?.display?.size} | {data?.data?.display?.type} </p>

                    <p className='text-sm font-semibold'>Price: {data?.data?.laptop?.price}
                    </p>
                </div>
            </div>


        </div>
    );
}

export default CartCard;

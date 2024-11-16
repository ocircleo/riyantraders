import Image from 'next/image';
import React from 'react';
import OrderForm from './OrderForm';
const OrderItemCard = ({ data }) => {
    return (
        <div className="bg-gray-50 border-2 rounded flex flex-col lg:flex-row gap-1 py-5 lg:pr-6 items-center justify-between w-full lg:h-36 ">
            <div className='flex gap-2 items-center'>
                <div className='w-full sm:w-56 px-2 group overflow-hidden'>
                    <Image alt={data.dataUrl} height={125} width={220} src={data.images[0]} className='w-full aspect-video bg-transparent border-transparent outline-transparent'></Image>
                </div>
                <div className='flex gap-2 flex-col  items-start px-2 '>
                    <p className='text-sm font-semibold '>{data.laptop.brand + " " + data.laptop.model + " " + data.memory.ram}</p>

                    <p className=' text-xs text-gray-700 font-semibold'> {data.processor.brand}  | {data.memory.ram} | {data.storage.capacity} |{data.display.size} | {data.display.type} </p>

                    <p className='text-sm font-semibold'>Price: {data.laptop.price}
                    </p>
                </div>
            </div>


            <OrderForm data={data}></OrderForm>
        </div>
    );
}

export default OrderItemCard;

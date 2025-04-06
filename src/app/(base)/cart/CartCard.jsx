import { API } from '@/app/utls/api/API';
import emitter from '@/app/utls/mitt/Mit';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { removeOne, selectOne } from './CartSelect';
import { ToggleAddCart } from '@/app/utls/db/Cart';

const CartCard = ({ id }) => {
    const [data, setData] = useState({ loading: true, error: null, data: {} })
    const [hidden, setHidden] = useState(false)
    const [checked, setChecked] = useState(true)
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(API + "user/item_id/" + id)
                const result = await res.json();
                if (result.error) setData({ loading: false, error: result.message, data: {} });
                else setData({ loading: false, error: null, data: result.result });


            } catch (error) {
                setData({ loading: false, error: error.message, data: {} })
            }
        }
        fetchUser();
        emitter.on("selectAllCart", () => setChecked(true))
    }, [id])
    const selectitem = () => {
        setChecked(!checked)
        if (checked) return removeOne(id);
        selectOne(id);
    }
    const deleteItem = () => {
        removeOne(id);
        const result = ToggleAddCart(id);
        emitter.emit("toggleCart", { result })
        setHidden(true);
    }

    if (data.loading) return <div className="bg-gray-50 border-2 rounded flex flex-col lg:flex-row gap-1 py-5 lg:pr-6 items-center justify-center w-full lg:h-36 ">
        Loading....

    </div>
    if (data.error) return <div className={`bg-gray-50 border-2 rounded  ${hidden ? "hidden" : "flex"} flex-col lg:flex-row gap-1 py-5 lg:pr-6 items-center justify-between px-3 md:px-8 w-full lg:h-36 `}>
        <p className='text-red-500 font-semibold'> Error: {data.error}
            <br /> Please Try to reload
        </p>
        <button onClick={deleteItem} className='bg-red-500 px-5 py-2 rounded text-white font-semibold'>Delete</button>
    </div>

    if (data?.data?.category == "laptop") return <Laptop data={data} deleteItem={deleteItem} selectitem={selectitem} hidden={hidden} checked={checked}></Laptop>
    else return <General data={data} deleteItem={deleteItem} selectitem={selectitem} hidden={hidden} checked={checked}></General>
}

const Laptop = ({ data, deleteItem, selectitem, hidden, checked }) => {

    return (

        <div className={`bg-gray-50 border-2 rounded ${hidden ? "hidden" : "flex"} flex-col lg:flex-row gap-1 py-5 lg:pr-6 items-center justify-between w-full lg:h-36 `}>
            <div className='flex gap-2 items-center'>
                <input name='carts' id='carts' type='checkbox' className='h-5 w-5 mx-6 cursor-pointer' checked={checked} onChange={selectitem} ></input>
                <div className='w-full sm:w-56 px-2 group overflow-hidden'>
                    <Image alt={data?.data?.dataUrl} height={125} width={220} src={data?.data?.images[0]} className='w-full aspect-video bg-transparent border-transparent outline-transparent'></Image>
                </div>
                <div className='flex gap-2 flex-col  items-start capitalize px-2 '>
                    <p className='text-sm font-semibold '>{data?.data?.laptop?.brand + " " + data?.data?.laptop?.model + " " + data?.data?.memory.ram} GB</p>

                    <p className=' text-xs text-gray-700 font-semibold'> {data?.data?.processor?.brand}  | {data?.data?.memory?.ram} GB | {data?.data?.storage?.capacity} GB | {data?.data?.display?.size} Inch | {data?.data?.display?.type} </p>

                    <p className='text-sm font-semibold'>Price: {data?.data?.laptop?.price} Tk
                    </p>
                </div>
            </div>
            <button onClick={deleteItem} className='bg-red-500 px-5 py-2 rounded text-white font-semibold'>Delete</button>


        </div>
    );
}
const General = ({ data, deleteItem, selectitem, hidden, checked }) => {
    return (

        <div className={`bg-gray-50 border-2 rounded ${hidden ? "hidden" : "flex"} flex-col lg:flex-row gap-1 py-5 lg:pr-6 items-center justify-between w-full lg:h-36 `}>
            <div className='flex gap-2 items-center'>
                <input name='carts' id='carts' type='checkbox' className='h-5 w-5 mx-6 cursor-pointer' checked={checked} onChange={selectitem} ></input>
                <div className='w-full sm:w-56 px-2 group overflow-hidden'>
                    <Image alt={data?.data?.dataUrl} height={125} width={220} src={data?.data?.images[0]} className='w-full aspect-video bg-transparent border-transparent outline-transparent'></Image>
                </div>
                <div className='flex gap-2 flex-col  items-start capitalize px-2 '>
                    <p className='text-sm pb-3 font-semibold '>Product: {data?.data?.title}</p>
                    <p className='text-sm font-semibold'>Price: {data?.data?.price} Tk
                    </p>
                </div>
            </div>
            <button onClick={deleteItem} className='bg-red-500 px-5 py-2 rounded text-white font-semibold'>Delete</button>


        </div>
    );

}
export default CartCard;

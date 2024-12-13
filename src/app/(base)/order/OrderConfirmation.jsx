"use client"
import getUser from '@/app/utls/db/UserDB';
import React, { useEffect, useState } from 'react';

const OrderConfirmation = () => {
    const [user, SetUser] = useState(null)
const placeOrder = (e)=>{

}


    useEffect(() => {
        const getUserTemp = async () => {
            const temUser = await getUser();
            SetUser(temUser)
            console.log(temUser);
        }
        getUserTemp()
    }, [])

    return (
        <div className='w-full lg:w-4/5 mx-auto' onClick={() => console.log(user)
        }>
            <p className='font-semibold py-3'>Delivery information</p>
            <form
                onSubmit={placeOrder}
                className=" grid grid-cols-1 lg:grid-cols-2 gap-3"
            >
                <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded">
                    <label htmlFor="name" className="font-bold">
                     Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className=" py-3 px-2 bg-white rounded outline-indigo-500 border-2 border-gray-300"
                        placeholder="your name"
                        defaultValue={user?.name}
                    ></input>
                </fieldset>
                <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded">
                    <label htmlFor="city" className="font-bold">
                        City / District
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        className=" py-3 px-2 bg-white rounded outline-indigo-500 border-2 border-gray-300"
                        placeholder="City or District you live in"
                        defaultValue={user?.city}
                    ></input>
                </fieldset>
                <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded">
                    <label htmlFor="address" className="font-bold">
                        Delivery address
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        className=" py-3 px-2 bg-white rounded outline-indigo-500 border-2 border-gray-300"
                        placeholder="From where you want to pick up orders"
                        defaultValue={user?.address}
                    ></input>
                </fieldset>
             
                <fieldset className="flex flex-col gap-2 p-2  rounded">
                    <label htmlFor="phone" className="font-bold">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        className=" py-3 px-2 bg-white outline-indigo-500 rounded border-2 border-gray-300"
                        placeholder="Phone number"
                        defaultValue={user?.phone}
                    ></input>
                </fieldset>
                <div className="my-6 col-span-2 flex items-center justify-center ">
                    <button className="bg-red-500 full lg:w-1/2 text-white font-semibold py-3 rounded  hover:bg-red-400 active:scale-95 duration-100">
                       Place Order
                    </button>
                </div>
            </form>
        </div >
    );
}

export default OrderConfirmation;

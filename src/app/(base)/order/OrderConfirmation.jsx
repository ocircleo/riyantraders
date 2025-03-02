"use client"
import getUser from '@/app/utls/db/UserDB';
import React, { useEffect, useRef, useState } from 'react';
import { GetOrder } from './OrderState';
import { API } from '@/app/utls/api/API';
import Popup from '@/app/utls/popup/Popup';
import UsePopup from '@/app/utls/popup/usePopup';
import Link from 'next/link';
import { getCookie } from '@/app/utls/cookie/Cookie';

const OrderConfirmation = () => {
    const reqRef = useRef(null)
    const [popup, closePopup, showPopup, showPopupError, askPopup] = UsePopup();
    const [user, SetUser] = useState(null)
    const placeOrder = async (e) => {
        e.preventDefault();
        if (!user?._id) return;
        let target = e.target;
        let order = GetOrder();
        let orderArray = convertOrder(order);
        let name, city, address, phone, paymentMethod;
        name = target.name.value;
        city = target.city.value;
        address = target.address.value;
        phone = target.phone.value;
        paymentMethod = target.paymentMethod.value;
        let orderData = { name, city, address, phone, paymentMethod, data: orderArray, }
        if (reqRef.current) {
            reqRef.current.innerText = "Please wait... "
            reqRef.current.style.pointerEvents = "none"
        }
        try {
            const res = await fetch(API + "order/newOrder", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: getCookie("accessToken"),
                },
                body: JSON.stringify(orderData)
            })
            const result = await res.json();
            if (result.error) return showPopupError("Error: " + result.message);
            else showPopup(result.message);

        } catch (error) {
            showPopupError("Error: " + error.message);
            console.log(error);
        } finally {
            if (reqRef.current) {
                reqRef.current.innerText = "Place Order"
                reqRef.current.style.pointerEvents = "auto"
            }
        }

    }

    useEffect(() => {
        const getUserTemp = async () => {
            const temUser = await getUser();
            SetUser(temUser)
          
        }
        getUserTemp()
    }, [])

    return (
        <div className='w-full lg:w-4/5 mx-auto'>
            <p className='font-semibold p-3'>Delivery information</p>

            {popup.is && <Popup popup={popup} closePopup={closePopup}></Popup>}
            <form
                onSubmit={placeOrder}
                className=" grid  lg:grid-cols-2 gap-3 p-3 "
            >
                <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded col-span-2 lg:col-span-1">
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
                        required
                    ></input>
                </fieldset>
                <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded col-span-2 lg:col-span-1">
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
                        required
                    ></input>
                </fieldset>
                <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded col-span-2 lg:col-span-1">
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
                        required
                    ></input>
                </fieldset>
                <fieldset className="flex flex-col gap-2 p-2  rounded col-span-2 lg:col-span-1">
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
                <fieldset className='my-4'>
                    <p className='font-semibold pb-2'>Payment Method</p>
                    <input type='radio' name='paymentMethod' value={"COD"} id='COD' defaultChecked />
                    <label htmlFor="COD" className='ms-2 '>Cash on Delivery  </label><br />
                    <input type='radio' name='paymentMethod' className='pointer-events-none' value={"OP"} id='OP' />
                    <label htmlFor="OP" className='ms-2 pointer-events-none'>Online Payment <span className='text-xs font-semibold'>(Unavailable)</span></label><br />
                </fieldset>
                <div className="my-6 col-span-2 flex items-center justify-center">

                    {user?._id ? <button ref={reqRef} className="bg-green-500 w-full lg:w-1/2 text-white font-semibold text-lg py-3 rounded  hover:bg-green-400 active:scale-95 duration-100">Place Order
                    </button> : <div className='flex flex-col'>
                        <p className='text-red-500 font-semibold text-lg'>You need to login or register first to make an order</p>
                        <div className='flex gap-2 p-2'>
                            <Link href={"/login"} className='bg-blue-500 px-6 py-1 text-white font-semibold hover:text-black'>Login</Link>
                            <Link href={"/register"} className='bg-blue-500 px-6 py-1 text-white font-semibold hover:text-black'>Register</Link>

                        </div>
                    </div>}

                </div>
            </form>
        </div >
    );
}

export default OrderConfirmation;




const convertOrder = (items) => {
    let newOrderArray = [];
    for (let item in items) {
        let orderObj = items[item]
        let temObj = { itemId: orderObj.data._id, quantity: orderObj.quantity }
        newOrderArray.push(temObj)
    }
    return newOrderArray;
}
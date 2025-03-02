import Link from 'next/link';
import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import OrderUpdateForm from './OrderUpdateForm';
const OrderItem = ({ data, index, currentPage,refreshData }) => {
    let newIndex = (currentPage * 12) + 1 + index;
    const [open, setOpen] = useState(false);
    const toggleState = () => setOpen(!open);
    return (
        <div className='flex flex-col'>
            <div className={`grid grid-cols-12 text-xs border-b-2  sm:text-sm md:text-base p-2 justify-items-center hover:bg-blue-300 ${open ? "bg-gray-100" : "bg-white"}`}>
                <div className="col-span-1">
                    {newIndex}
                </div>
                <div className="col-span-3">

                    {data.name}

                </div>

                <div className="col-span-3  ">
                    {data.phone}</div>
                <div className="col-span-2  ">{data.totalPrice}</div>

                <div className="col-span-2  ">{data.address}</div>
                <div className={`col-span-1 text-lg `}><button onClick={toggleState} className={`${open ? "rotate-180" : "rotate-0"} duration-100 scale-150`}><RiArrowDropDownLine /></button></div>

            </div>
            <div className={`${open ? "block" : "hidden"} bg-white  border-s-4 border-blue-400 p-2`}>
                <div className='bg-white px-2 md:px-5 lg:px-8'>
                    <h2 className="text-lg font-semibold  py-2">
                        Order Detail  | <Link
                            target="_blank"
                            href={"/orders?id=" + data._id}
                            className="text-blue-500 underline underline-offset-4 font-semibold "
                        >
                            Full Detail
                        </Link>
                    </h2>
                    <p>
                        Status: {data.orderStatus}{" "}
                        <span className="text-blue-500">|</span> Order-Date:{" "}
                        {data.orderDate}
                    </p>
                    <p>
                        <span className="font-semibold">Shipment Date: </span>
                        {data.orderStatus == "Pending" ? data.shipmentDate : ""}
                    </p>
                    <p className=''>user phone: {data.userPhone}</p>
                    <p>
                        Payment-Method:
                        <span className="font-semibold">
                            {data.paymentMethod == "COD"
                                ? " Cash On Delivery"
                                : " Online Payment"}
                        </span>
                        <span className="text-blue-500"> |</span> Paid: {data.paid} Taka
                    </p>

                    <p className="pt-4 font-semibold">Customer Info:</p>
                    <p className="">Name: {data.name}</p>
                    <p className="">phone: {data.phone}</p>
                    <p className="">
                        City: {data.city} <span className="text-blue-500">|</span>{" "}
                        Address: {data.address}
                    </p>

                    <span className="font-semibold">Total Price: {data.totalPrice} Taka</span>
                    <OrderUpdateForm data={data} refreshData={refreshData}></OrderUpdateForm>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;

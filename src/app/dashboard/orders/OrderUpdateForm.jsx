import { API } from '@/app/utls/api/API';
import { getCookie } from '@/app/utls/cookie/Cookie';
import React, { useRef } from 'react';

const OrderUpdateForm = ({ data, refreshData }) => {
    const buttonRef = useRef(null)
    const changeButtonText = (text) => {
        if (buttonRef.current) {
            buttonRef.current.innerText = text;
        }
    }
    let date = "";
    if (data.shipmentDate) {
        let temDate = data.shipmentDate.split("T")
        date += temDate[0];

    } else {
        let newDate = new Date;
        date = "";
        date += newDate.getFullYear() + "-";
        date += 1 + newDate.getMonth() + "-";
        date += newDate.getDate();
    }

    const submitForm = async (e) => {
        e.preventDefault();
        let target, deliveryDate, paid, status, message, reqStatus;
        target = e.target;
        deliveryDate = target.deliveryDate.value;
        paid = target.paid.value;
        status = target.status.value;
        message = target.message.value;
        changeButtonText("Please Wait..")

        let reqData = { id: data._id, shipmentDate: deliveryDate, orderStatus: status, paid: paid, orderMessage: message }
        let res, result;
        try {
            res = await fetch(API + "order/updateOrderAdmin", {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    authorization: getCookie("accessToken")
                },
                body: JSON.stringify(reqData)
            })
            result = await res.json();
         
            if (result.error) return changeButtonText(result.message);
            refreshData();
        } catch (error) {
            console.log(error);
            changeButtonText("Failed to update")
        } finally {
            setTimeout(() => {
                changeButtonText("Update")
            }, 1500)
        }

    }
    return (
        <div className='my-4'>
            <p className='font-semibold pb-2'>Update Status</p>
            <form onSubmit={submitForm} className='flex flex-col w-full gap-2 bg-gray-200 px-2 md:px-5 py-2 md:py-6'>
                <div className='flex flex-wrap gap-3'>

                    <fieldset className='flex flex-col gap-2'>
                        <label htmlFor="deliveryDate" className="font-semibold">Delivery Date (m/d/y)</label>
                        <input type="date" name="deliveryDate" id="deliveryDate" defaultValue={date} className='bg-white py-2 px-2' />
                    </fieldset>
                    <fieldset className="flex flex-col gap-2">
                        <label htmlFor="status" className="font-semibold">
                            Status
                        </label>
                        <select
                            id="status"
                            name="status"
                            className="py-3 px-2 bg-white rounded outline-indigo-500"
                        >
                            <option value={"Pending"}>Pending</option>
                            <option value={"Processing"}>Processing</option>
                            <option value={"Shipped"}>Shipped</option>
                            <option value={"Delivered"}>Delivered</option>
                            <option value={"Canceled"}>Canceled</option>
                        </select>
                    </fieldset>
                    <fieldset className="flex flex-col relative  gap-2 flex-grow">
                        <label htmlFor="paid" className="font-semibold">
                            Paid Amount
                        </label>
                        <input
                            type="number"
                            name="paid"
                            placeholder="Enter amount that was paid"
                            id="paid"
                            min={0}
                            defaultValue={data.paid}
                            className="py-3 px-2 bg-white rounded outline-indigo-500 w-full "
                        ></input>

                    </fieldset>

                </div>
                <fieldset className="flex flex-col relative  gap-2 flex-grow">
                    <label htmlFor="message" className="font-semibold">
                        Message
                    </label>
                    <textarea
                    defaultValue={data.orderMessage}
                        type="number"
                        name="message"
                        placeholder="Any Message for the customer ?"
                        id="message"
                        rows={4}
                        className="py-3 px-2 bg-white rounded outline-indigo-500 w-full "
                    ></textarea>

                </fieldset>
                <p id='reqStatus'></p>
                <button ref={buttonRef} className='bg-green-400 text-black font-semibold px-6 py-2' type='submit'>Update</button>
            </form>
        </div>
    );
}

export default OrderUpdateForm;

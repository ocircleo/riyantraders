import { API } from '@/app/utls/api/API';
import { getCookie } from '@/app/utls/cookie/Cookie';
import { useRouter } from 'next/navigation';
import React from 'react';

const CancelButton = ({ order = {}, cancelFailed }) => {
    const router = useRouter();
    const cancelOrder = async () => {
        const res = await fetch(API + "order/cancelOrder", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: getCookie("accessToken"),
            },
            body: JSON.stringify({
                id: order._id,
            }),
        });
        const result = await res.json();
        if (result.error) {
            let message = result.message;
            cancelFailed(message);
            return;
        } else {
            router.refresh()
        }

    };
    if (order.orderStatus === "Pending" || order.orderStatus === "Processing") {
        return (
            <button onClick={cancelOrder} className="text-red-500  font-semibold px-5 border-red-500 border-2 rounded active:scale-90 duration-100">
                Cancel
            </button>
        );
    }
    else return (
        <button className="text-orange-500 pointer-events-none  font-semibold px-5 border-orange-500 border-2 rounded active:scale-90 duration-100">
            Cant Cancel
        </button>
    );
}

export default CancelButton;

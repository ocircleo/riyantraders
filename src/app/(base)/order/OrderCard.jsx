import { API } from '@/app/utls/api/API';
import React from 'react';
import OrderItemCard from './OrderItemCard';

const OrderCard = async ({ id }) => {
    try {
        let url = API + "user/laptop_id/" + id;
        const res = await fetch(url, { cache: "force-cache", next: { revalidate: (60 * 3) } });
        const data = await res.json();
        if (data.error) return <div>{data.message} || id: {id}</div>
        return <OrderItemCard data={data.result}></OrderItemCard>;
    } catch (error) {
        console.log(error);
        return <div>{error.message}</div>;
    }
}

export default OrderCard;

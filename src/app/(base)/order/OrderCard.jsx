import { API } from '@/app/utls/api/API';
import React from 'react';
import OrderItemCard from './OrderItemCard';

const OrderCard = async ({ id }) => {
    try {
        let url = API + "user/laptop_id/" + id;
        const res = await fetch(url);
        const data = await res.json();
        if (data) return <OrderItemCard data={data.result}></OrderItemCard>;
    } catch (error) {
        return <div>{error.message}</div>;
    }
}

export default OrderCard;

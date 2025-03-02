import { API } from "@/app/utls/api/API";
import React from "react";
import OrderedItemCard from "./OrderedItemCard";

const Page = async (request) => {
  const id = request.searchParams.id;
  try {
    let url = API + "order/ordersById/" + id;
    const res = await fetch(url);
    const data = await res.json();
    if (data.error) return <div>Error: {data.message}</div>;
    let totalQuantity = 0;
    data.result.products.map((ele) => (totalQuantity += ele.quantity));
    return (
      <div className="w-full px-3 md:w-5/6 mx-auto pb-16">
        <h2 className="text-lg py-4 font-semibold underline underline-offset-4">
          Your Order Detail
        </h2>
        <p>
          Status: {data.result.orderStatus}{" "}
          <span className="text-blue-500">|</span> Order-Date:{" "}
          {data.result.orderDate}
        </p>
        <p>
          <span className="font-semibold">Shipment Date: </span>
          {data.result.orderStatus == "Pending" ? data.result.shipmentDate : ""}
        </p>
        <p>
          Payment-Method: 
          <span className="font-semibold">
            {data.result.paymentMethod == "COD"
              ?  " Cash On Delivery"
              : " Online Payment"}
          </span>
          <span className="text-blue-500"> |</span> Paid: {data.result?.paid || 0} Taka
        </p>
        <p className="pt-4 font-semibold">Customer Info:</p>
        <p className="">Name: {data.result.name}</p>
        <p className="">phone: {data.result.phone}</p>
        <p className="">
          City: {data.result.city} <span className="text-blue-500">|</span>{" "}
          Address: {data.result.address}
        </p>
        <div className="w-full border-b-2 border-dashed border-black my-4"></div>
        <p className="bg-blue-400 py-1 px-2 md:px-6 text-white">
          Ordered Items: <span className="font-semibold">{totalQuantity}</span>
          <span className="text-black"> |</span> Total Price:{" "}
          <span className="font-semibold"> {data.result.totalPrice} Taka</span>
        </p>
        {data.result.products.map((ele, index) => (
          <OrderedItemCard
            id={ele.itemId}
            quantity={ele.quantity}
            price={ele.price}
            key={"order" + index}
          ></OrderedItemCard>
        ))}
      </div>
    );
    return;
  } catch (error) {
    console.log(error);
    return <div>{error.message}</div>;
  }
};

export default Page;

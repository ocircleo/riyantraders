"use client";

import { API } from "@/app/utls/api/API";
import { getCookie } from "@/app/utls/cookie/Cookie";
import getUser from "@/app/utls/db/UserDB";
import { useEffect, useState } from "react";
// import CancelButton from "./CancelButton";
import UsePopup from "@/app/utls/popup/usePopup";
import Popup from "@/app/utls/popup/Popup";
import Link from "next/link";

const Page = () => {
  const [popup, closePopup, showPopup, showPopupError, askPopup] = UsePopup();
  const [orders, SetOrders] = useState([]);

  useEffect(() => {
    (async function () {
      let temUser = await getUser();
      if (temUser) {
        try {
          const res = await fetch(API + "order/myOrdersPaid/" + temUser.phone, {
            method: "GET",
            headers: {
              Authorization: getCookie("accessToken"),
            },
          });
          const result = await res.json();
          SetOrders(result.result);
    
        } catch (error) {
          console.log(error);
        }
      }
    })();
    return () => {};
  }, []);
  const cancelFailed = (message) => {
    showPopupError("Error: " + message);
  };
  return (
    <div>
      {popup.is && <Popup popup={popup} closePopup={closePopup}></Popup>}
      <h1 className="text-lg font-semibold py-2">Payment Completed</h1>
      <div className="flex flex-col gap-2">
        <div className="shadow-inner border p-2 sm:bg-green-400 hidden sm:grid grid-cols-8 w-full font-semibold">
          <div>SI </div>
          <div>Status</div>
          <div>Detail</div>
          <div className="col-span-2">Total Price</div>
          <div className="col-span-2">Order Date</div>
          <div>Paid</div>
        </div>
        {orders.map((order, index) => (
          <>
            <div
              key={order._id}
              className="shadow-inner border p-2 hidden sm:grid grid-cols-8 w-full "
            >
              <div className="col-span-1">{index + 1}</div>
              <div className="col-span-1">
                {" "}
                {order?.orderStatus ?? "un known"}{" "}
              </div>
              <div className="col-span-1">
                <Link
                  target="_blank"
                  href={"/orders?id=" + order._id}
                  className="text-blue-500 underline underline-offset-4 font-semibold "
                >
                  Order
                </Link>
              </div>

              <div className="col-span-2">{order?.totalPrice} Taka</div>
              <div className="col-span-2">
                {" "}
                {(order?.orderDate ?? "nullTnull").split("T")[0] ?? "N/A"}
              </div>
              <div>{order?.paid} Taka</div>
            </div>
            <div
              key={index}
              className="shadow-inner border p-4  w-full flex gap-2 flex-col sm:hidden"
            >
              <p className="font-semibold">Order No: {index + 1}</p>
              <div className="col-span-1">
                Order Status: {order?.orderStatus ?? "un known"}{" "}
              </div>
              <div className="col-span-1">
                <Link
                  target="_blank"
                  href={"/orders?id=" + order._id}
                  className="text-blue-500 underline underline-offset-4 font-semibold "
                >
                  Order Detail
                </Link>
              </div>
              <div className="col-span-2">Price: {order.totalPrice} Taka</div>
              <div className="col-span-2">
                order Date:{" "}
                {(order?.orderDate ?? "nullTnull").split("T")[0] ?? "N/A"}
              </div>
              <div>Paid: {order?.paid} Taka</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default Page;

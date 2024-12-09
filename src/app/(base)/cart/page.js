"use client";
import { GetCart } from "@/app/utls/db/Cart";
import React, { useEffect, useState } from "react";
import CartCard from "./CartCard";
import { getSelected, selectMany } from "./CartSelect";
import emitter from "@/app/utls/mitt/Mit";
import { useRouter } from "next/navigation";

const Page = () => {
  const [cart, setCart] = useState([]);
  const router = useRouter();
  const selectAll = () => {
    let items = GetCart();
    let temCart = Object.keys(items);
    selectMany(temCart);
    emitter.emit("selectAllCart");
  };
  const order = () => {
    const selectedItems = getSelected();
    const items = "items=" + selectedItems;
    router.push("order?" + items);
  };
  useEffect(() => {
    let items = GetCart();
    let temCart = Object.keys(items);
    selectMany(temCart);
    setCart(temCart);
    return () => emitter.off("selectAllCart");
  }, []);
  return (
    <div className="w-5/6 mx-auto mb-12">
      <h1 className="text-3xl font-bold text-center underline underline-offset-4 my-6">
        Cart Items{" "}
      </h1>
      <button
        onClick={selectAll}
        className="bg-black/20 px-12 py-2 font-semibold my-6 rounded border-2  active:scale-95 duration-75"
      >
        Select All
      </button>
      <div className="flex gap-3 flex-col">
        {cart.map((ele) => (
          <CartCard key={ele} id={ele}></CartCard>
        ))}
      </div>
      <div className="flex justify-center py-8 items-center w-full ">
        <button
          onClick={order}
          className="bg-green-500 px-6 py-2  font-semibold text-white active:scale-95 duration-75"
        >
          Order Selected
        </button>
      </div>
    </div>
  );
};

export default Page;

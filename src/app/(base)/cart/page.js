"use client";
import { GetCart } from "@/app/utls/db/Cart";
import React, { useEffect, useState } from "react";
import CartCard from "./CartCard";

const Page = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    let items = GetCart();
    let temCart = Object.keys(items);
    setCart(temCart);
  }, []);
  return (
    <div className="w-5/6 mx-auto">
      {cart.map((ele) => (
        <CartCard key={ele} id={ele}></CartCard>
      ))}
    </div>
  );
};

export default Page;

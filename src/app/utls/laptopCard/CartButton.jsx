"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import cart from "/public/cart.png"
import { isOnCart, ToggleAddCart } from '../db/Cart';
import emitter from '../mitt/Mit';
const CartButton = ({ id }) => {
    const [added, setAdded] = useState(false)
    const addToCart = () => {
        const result = ToggleAddCart(id)
        if (result) setAdded(true);
        else setAdded(false)
        emitter.emit("toggleCart", { result })
    }
    useEffect(() => {
        const result = isOnCart(id)
        if (result) setAdded(true);
        else setAdded(false);
    }, [id])
    return (
        <Image onClick={addToCart} height={10} width={30} src={cart} alt='cart' className={`${added ? "bg-blue-500" : "bg-white"} p-2 cursor-pointer active:scale-90 duration-100 hover:bg-blue-500`} title='Add to cart'></Image>
    );
}

export default CartButton;

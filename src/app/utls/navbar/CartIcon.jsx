import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import cart from "/public/cart.png"
import Link from 'next/link';
import { GetCart } from '../db/Cart';
import emitter from '../mitt/Mit';
const CartIcon = () => {
    const cartRef = useRef(null)

    useEffect(() => {
        const setCarValue = () => {
            try {
                const allCart = GetCart();
                let length = Object.keys(allCart).length;
                if (cartRef.current) cartRef.current.innerText = length;

            } catch (error) {
                if (cartRef.current) cartRef.current.innerText = 0;
            }
        }
        setCarValue();
        const handler = () => setCarValue();
        emitter.on("toggleCart", handler)
        return () => emitter.off("toggleCart")
    }, [])
    return (
        <Link href="/cart" className="h-8 w-8 relative rounded p-2">
            <Image alt="cart" src={cart}  ></Image>
            <p ref={cartRef} className="absolute -top-2 text-sm font-semibold -right-2 bg-red-500 rounded-full min-w-5 text-center px-1 text-white">0</p>
        </Link>
    );
}

export default CartIcon;

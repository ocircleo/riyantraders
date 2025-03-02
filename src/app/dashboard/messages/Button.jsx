'use client';
import { API } from '@/app/utls/api/API';
import { getCookie } from '@/app/utls/cookie/Cookie';
import React from 'react';

const Button = ({ data, hideDiv }) => {
    const replied = async (e) => {
        try {
            const req = await fetch(API + "admin/messageReplied/" + data._id, {
                method: "PUT",
                headers: { "authorization": getCookie("accessToken") }
            })
            const res = await req.json()
        
            if (!res.error) hideDiv()
        } catch (error) {
            console.log(error);
        }
    }
    const deleteMessage = async (e) => {
        try {
            const req = await fetch(API + "admin/deleteMessage/" + data._id, {
                method: "DELETE",
                headers: { "authorization": getCookie("accessToken") }
            })
            const res = await req.json()
         
            if (!res.error) hideDiv()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="flex gap-2 absolute top-2 right-2 font-semibold z-50">

            {data.state == "unread" ? <button onClick={replied} className="px-6 py-2  bg-slate-800 text-white hover:bg-white hover:text-black rounded">Replied</button> : <><button onClick={deleteMessage} className="px-6 py-2 bg-red-600 text-white rounded active:scale-95 duration-100">Delete</button></>}
            
        </div>
    );
}

export default Button;

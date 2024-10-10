import { API } from '@/app/utls/api/API';
import { getCookie } from '@/app/utls/cookie/Cookie';
import React, { useState } from 'react';
let timeout;
const RegisterName = ({ updateState }) => {
    const [app, setApp] = useState({
        ani: false,
        message: "Enter an app name ",
        state: "pending",
    });

    //function to update state
    const updateNameState = (key, value) =>
        setApp((prevState) => ({ ...prevState, [key]: value }));
    const registerAppName = (e) => {
        e.preventDefault()
        let form = e.target
        let appName = form.appName.value
        if(app.state != "found") return;
        updateNameState("ani",true)
        setTimeout(() => {
            updateState("name", appName);
            updateState("registered", true)

        }, 1000)

    }

    const findValidAppName = (e) => {
         clearTimeout(timeout)
        updateNameState("message", "Finding availability")
        updateNameState("state", "pending")
        timeout = setTimeout(async () => {
            let res = await fetch(`${API}get/name-check/${e.target.value}`, {
                headers: { "Authorization": getCookie('accessToken') }
            })
            let result = await res.json()
            if (result?.error) {
                updateNameState("message", result.message);
                updateNameState("state", "")
            }
            else {
                updateNameState("message", result.message);
                updateNameState("state", "found")
            }
        }, 500)
    }
    return (
        <div className='w-full  overflow-x-hidden h-full bg-white rounded flex flex-col items-center justify-center px-5 relative group'>
            <h1 className='text-3xl pb-12 z-10' >Lets find a name for your app</h1>
            <form className='w-full md:w-96 z-10' onChange={findValidAppName} onSubmit={registerAppName}>
                <fieldset>
                    <label htmlFor="name">Enter your app name</label>
                    <input type="text" name="appName" placeholder='Enter name' id="name" className="p-2 border-[3px]  rounded focus:border-indigo-500  outline-transparent w-full" />
                </fieldset>
                <p className={`pb-2 text-xs font-semibold ${app.state == "found" ? "text-green-500" : app.state == "pending" ? "text-orange-500" : "text-red-500"}`}>{app.message}</p>
                <button type='submit' className='w-full bg-indigo-400 rounded py-2 text-white font-semibold hover:bg-indigo-500 '>Continue</button>
            </form>
            {/* <div className='h-full w-full bg-white absolute z-0 rotate-12  group-hover:scale-110 duration-200'></div> */}
            <div className={`h-full w-full bg-white absolute z-20   ${app.ani ? "left-0" : "-left-full"} duration-1000`}></div>
        </div>
    );
};

export default RegisterName;
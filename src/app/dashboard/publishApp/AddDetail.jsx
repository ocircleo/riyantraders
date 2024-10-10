import { API } from '@/app/utls/api/API';
import { getCookie } from '@/app/utls/cookie/Cookie';
import Parser from '@/app/utls/textparser/Parser';
import React, { useRef, useState } from 'react';
const OperatingSystem = [
    "Windows 11",
    "Windows 10",
    "Windows Server",
    "macOS Ventura",
    "macOS Monterey",
    "macOS Big Sur",
    "Ubuntu",
    "Fedora",
    "Debian",
    "Arch Linux",
    "Linux Mint",
    "Pop!_OS",
    "CentOS",
    "Red Hat Enterprise Linux (RHEL)",
    "Kali Linux",
    "Manjaro",
    "Zorin OS",
    "Chrome OS",
    "iOS",
    "iPadOS",
    "Android",
    "HarmonyOS",
    "Tizen",
    "watchOS",
    "tvOS",
    "FreeBSD",
    "QNX",
    "Ubuntu Touch"
];
const AddDetail = ({ updateState, appInfo }) => {
    const [os, setOs] = useState([])
    const [show, setShow] = useState(false);
    const imgRef = useRef(null)
    const [preview, setPreview] = useState('')
    const formRef = useRef(null)
    const searchOs = (e) => {
        let text = e.target.value;
        text = text.toLocaleLowerCase()
        let newArray = OperatingSystem.filter(ele => ele.toLocaleLowerCase().includes(text))
        setShow(true)
        setOs(newArray);
    }
    const focusMoved = (e) => {
        setTimeout(() => {
            setShow(false)
        }, 200)
    }
    const click = (e) => {
        let text = e.target.textContent;
        if (formRef.current) {
            formRef.current.value = text
        }
    }
    const appInfoUpdate = async (e) => {
        e.preventDefault()
        let name, description, iconUrl, os, version, orgName, target, res, result;
        target = e.target;
        name = appInfo.name
        description = target.description.value
        os = target.osType.value
        version = target.version.value
        orgName = target.org.value
        iconUrl = 'https://tooltip-backend.vercel.app/assets/profile.jpg'
        const data = { name, description, iconUrl, os, version, orgName }
        console.log(data);
        try {
            res = await fetch(API+"user/register-app", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `${getCookie('accessToken')}`
                },
                body: JSON.stringify(data)
            })
            result = await res.json()
            console.log(result);
            if (result) {
                updateState("result", result?.result || {})
                updateState("detailAdded", true)
            };
        } catch (error) {
            console.log(error);
        }
    }
    const updatePreview = (e) => {
        // let target = e.target.value;
        // let newArr = target.split("\n")
        // console.log(newArr);
        setPreview(e.target.value);
    }
    const handelImageLoad = (e) => {
        e.preventDefault()
        let target = e.target;
        let file = target.files[0]
        if (imgRef.current) {
            imgRef.current.src = URL.createObjectURL(file)
        }
    }
    return (
        <div className='w-full min-h-full h-auto bg-white rounded flex items-center justify-center pt-12 flex-col'>
            <h2 className='text-xl font-bold underline'>Add Detail</h2>
            <form onSubmit={appInfoUpdate} className='w-full h-full md:w-96 lg:w-4/5 xl:w-3/6  p-5 gap-2 flex flex-col'>
                <fieldset className='flex flex-col w-full gap-2 relative'>
                    <label htmlFor="osType" className='font-semibold'>Enter Operating System</label>
                    <input ref={formRef} type="text" name="osType" onKeyUp={searchOs} onBlur={focusMoved} placeholder='Android, Windows, linux , Apple etc' id="osType" className="p-2 border-2  rounded border-indigo-500  outline-transparent w-full" required />
                    <div className={`w-full absolute top-20 bg-white max-h-44 rounded h-auto overflow-y-scroll  flex-col ${show ? "flex" : "hidden"}`}>
                        {os.map((ele, index) => <button onClick={click} key={index} type='button' className='mb-2 bg-gray-100 p-1 cursor-pointer hover:bg-indigo-500'>{ele}</button>)}
                    </div>
                </fieldset>
                <fieldset className='flex flex-col w-full gap-2'>
                    <label htmlFor="version" className='font-semibold'>Enter your App Version</label>
                    <input type="text" name="version" placeholder='The version of your app. ex: 1.1.0.1' id="version" className="p-2 border-2  rounded border-indigo-500  outline-transparent w-full" required />
                </fieldset>
                <fieldset className='flex flex-col w-full gap-2'>
                    <label htmlFor="org" className='font-semibold'>Enter Publisher Organization Name</label>
                    <input type="text" name="org" id="org" placeholder='Org name or your name or N/A' className="p-2 border-2  rounded border-indigo-500  outline-transparent w-full" required />
                </fieldset>
                <fieldset className='flex flex-col w-full gap-2'>
                    <label htmlFor="description" className='font-semibold'>Describe your app</label>
                    <textarea onChange={updatePreview} rows={9} type="text" name="description" id="description" placeholder='What does your app do in short' className="p-2 border-[3px]  rounded focus:border-indigo-500  outline-transparent w-full" required />
                </fieldset>
                <fieldset className='flex flex-col sm:flex-row items-center w-full h-auto my-2  gap-2 justify-around relative '>
                    <div className='h-16 flex items-center '>
                        <label htmlFor="logo" className='font-semibold bg-red-600 cursor-pointer p-2 rounded text-white z-10'>Add App Logo</label>
                        <input type="file" onChange={handelImageLoad} name="logo" id="logo" title='Square image recommended' placeholder='What does your app do in short' className="p-2 z-0 border-[3px]  rounded focus:border-indigo-500  outline-transparent absolute opacity-0 left-0" />

                    </div>
                    <div className='h-20 w-20 bg-gray-300 rounded overflow-hidden'>
                        <img ref={imgRef} className='h-full w-full object-cover' alt="" />
                    </div>
                </fieldset>
                <button type='submit' className='w-full bg-indigo-500 rounded py-2 text-white font-semibold hover:bg-indigo-600 '>Register App</button>
            </form>
            <div className='w-full md:w-96 lg:w-4/5 xl:w-3/6 my-6 border p-2'>
                <h2 className='text-lg font-bold text-gray-600 py-4 underline'>Description Preview</h2>
                <Parser text={preview}></Parser>
            </div>
        </div>
    );
};

export default AddDetail;
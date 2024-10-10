'use client'
import { API } from '@/app/utls/api/API';
import { getCookie } from '@/app/utls/cookie/Cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Publish = ({ appInfo }) => {
    const router = useRouter()
    let { name, icon, description, os, version, organization, file_url, org_url } = appInfo?.result;
    console.log(appInfo.result);
    const publish = async () => {
        let res, result;
        res = await fetch(API+"user/publish-app", {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${getCookie("accessToken")}`,
            },
            body: JSON.stringify({ name: appInfo.name }),
        })
        result = await res.json();
        if (!result.error) return router.push("/apps/" + name)
        console.log(result);
    }
    return (
        <div className='w-full bg-white min-h-screen'>
            <div className="w-full p-2 md:w-4/5 mx-auto">
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='flex gap-5 items-center '>
                        <img src={icon} alt="icon" className='h-28 w-28 rounded bg-gray-200' />
                        <div >
                            <h1 className="text-2xl font-semibold capitalize">{name}</h1>
                            <Link href={org_url} target='_blank' className='text-green-600 font-semibold'>{organization}</Link>
                            <div className='flex gap-2 items-center text-gray-600'>
                                <p>4.5 ⭐</p> <p className='text-green-600'>|</p> <p>1k downloads</p>

                            </div>

                        </div>

                    </div>
                    <div className='flex flex-col'>
                        <Link href={file_url} target='_blank' className="bg-indigo-400 text-white text-center font-semibold px-5 py-2 mt-8 active:scale-105 duration-100">
                            Download
                        </Link>
                        <p className="text-sm capitalize text-gray-500 pt-1">
                            for <span className='text-black font-semibold'>{os}</span>, version: {version}
                        </p>

                    </div>

                </div>
                <h2 className="text-xl py-3">About app</h2>
                <p>
                    {description}
                </p>
                <div className='flex w-full justify-center'>
                    <button onClick={publish} className='bg-green-500 px-12 py-3 rounded font-semibold  text-white my-20 w-full md:w-96 active:scale-105 duration-100'>Publish</button>

                </div>
            </div>
        </div>
    );
};

export default Publish;
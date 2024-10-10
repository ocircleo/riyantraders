
import { API } from '@/app/utls/api/API';
import { getCookie } from '@/app/utls/cookie/Cookie';
import FireApp from '@/app/utls/FireApp/FireApp';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import Link from 'next/link';
import React from 'react';

const AppCard = ({ ele, index }) => {
    const storage = getStorage(FireApp);
    const desertRef = ref(storage, 'apps/' + ele.fileName);
    console.log(ele);
    const deleteFile = () => {
        deleteObject(desertRef).then(() => {
            // File deleted successfully
            fetch(API+"user/delete-app", {
                method: "DELETE",
                headers: {
                    "Authorization": getCookie("accessToken"),
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ _id: ele._id })
            }).then(res => res.json()).then(data => console.log(data))
            console.log("File delete successful");
        }).catch((error) => {
            // Uh-oh, an error occurred!
            console.log(error);
        });

    }
    return (
        <div
            key={ele._id}
            className=" py-4 pe-4 bg-gray-100 flex gap-2 items-center justify-between flex-wrap"
        >
            <div className="bg-white flex  gap-4 py-2 px-5 rounded w-full md:w-auto flex-wrap">
                <p className="font-semibold">{index + 1}. </p>
                <p className='font-semibold text-green-600 capitalize'>{ele.name}</p>
                <p>
                    Size:{" "}
                    {ele.size > 1024
                        ? (ele.size / 1024).toFixed(2) + "MB"
                        : ele.size + " KB"}
                </p>{" "}
                <span className="text-blue-500">|</span>
                <p>Type: {ele.type}</p> <span className="text-blue-500">|</span>
                <p>Publish Date: {ele.date_registered.split("T")[0]}</p>
                <Link
                    className="text-indigo-500 underline italic"
                    href={"/apps/" + ele.name}
                >
                    Detail
                </Link>
            </div>
            <div className='flex gap-2 flex-wrap items-center py-3'>
                <Link
                    className="bg-blue-500 text-white font-semibold rounded px-4 py-1 text-xl my-2"
                    href={"ola"}
                    target="_blank"
                    download={ele.file_url}
                >
                    Download
                </Link>
                <button onClick={deleteFile} className="bg-red-500 text-white font-semibold rounded px-4 py-1 text-xl my-2">Delete</button>
            </div>
        </div>
    );
};

export default AppCard;
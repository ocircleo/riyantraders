"use client"
import { useEffect } from "react";


const Popup = ({ popup, closePopup }) => {
    useEffect(() => {
        if (document) document.body.style.overflowY = "hidden";
        return () => { if (document) document.body.style.overflowY = "auto" };
    }, [])
    return (
        <div className={`fixed top-0 left-0 h-screen w-full bg-gray-900/40 flex items-center justify-center p-12 sm:p-3 z-[111] `}>
            <div className="bg-white rounded p-4 md:p-6 flex w-full sm:w-96 lg:w-[30rem] flex-col  justify-between gap-12 overflow-hidden relative">
                <p className="font-semibold max-h-[12rem] overflow-y-auto z-20 ">{popup?.message}</p>

                <div className="flex justify-end  ">
                    {
                        popup?.action ? <>
                            <span className="">
                                <button onClick={closePopup} className={` bg-red-500 px-3 py-1 mx-4 rounded text-white font-semibold active:scale-90 duration-75 z-10`}>
                                    Cancel
                                </button>
                                <button onClick={popup?.action} className={`bg-green-500 hover:bg-green-600 px-6 py-1 rounded text-white font-semibold active:scale-90 duration-75 z-10`}>
                                    Yes
                                </button>
                            </span>


                        </> : <button onClick={closePopup} className={`${popup?.error ? "bg-red-600 " : "bg-green-500"} rounded px-4 py-1  text-white font-semibold active:scale-90 duration-75 z-10`}>
                            Close
                        </button>
                    }

                </div>

                <div className={`${popup?.error ? "bg-red-600" : "bg-green-400"} absolute w-full h-1 start-0 top-0 `}>
                </div>

            </div>
        </div>
    );
}

export default Popup;

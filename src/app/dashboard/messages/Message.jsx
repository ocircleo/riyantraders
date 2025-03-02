import React, { useRef } from 'react';
import Button from './Button';

const Message = ({ data }) => {
    let { name, email, message, messageDate
    } = data
    const divRef = useRef(null)
    const hideDiv = () => {
        if (divRef.current) {
            divRef.current.style.display = "none";
        }
    }
    return (
        <div ref={divRef} className="group border border-gray-300 bg-stone-200  duration-100 rounded p-2 mt-10 relative overflow-hidden">
             <div className='h-full w-full bg-blue-300 rounded absolute duration-150 top-full group-hover:top-0 left-0 z-0'></div>
            <div className="flex gap-2 z-30 relative items-center">
                <div className="bg-white text-black text-2xl h-12 w-12 grid place-content-center font-semibold rounded-full capitalize">
                    {name[0]}
                </div>
                <div className="flex flex-col">
                    <p className='capitalize font-semibold'>{name}</p>
                    <p>{email}</p>
                    <p className="text-xs text-gray-700">{messageDate}</p>
                </div>
            </div>
            <div className="bg-white p-4 mt-6 rounded z-30 relative">
                {message}
            </div>
            <Button hideDiv={hideDiv} data={data}></Button>
          
        </div>
    );
}

export default Message;

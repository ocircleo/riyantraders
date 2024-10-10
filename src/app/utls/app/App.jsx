import Link from 'next/link';
import React from 'react';

const App = ({ app }) => {
    return (
        <div
            className="bg-gray-100 flex gap-1 p-5 items-center justify-between"
        >
            <div className='flex gap-4'>

                <img className="bg-gray-50 h-20 w-20 bg-white rounded"></img>
                <div className="flex flex-col">
                    <div className="flex flex-col gap-1">
                        <h4 className='capitalize font-bold text-gray-800'>{app?.name}</h4>
                        <p className="text-xs  capitalize">{app?.os}</p>
                    </div>
                    <p className="text-xs  text-green-500 capitalize">{app?.organization}</p>
                </div>
            </div>
            <p>
                <Link
                    href={"/apps/" + app?.name}
                    className="text-indigo-500 font-semibold text-sm underline italic"
                >
                    Detail
                </Link>
            </p>
        </div>
    );
};

export default App;
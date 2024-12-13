import Link from 'next/link';
import React from 'react';

const Authorization = () => {
    return (
        <div className='w-full h-screen grid place-content-center text-center'>
            <p className='text-3xl font-bold text-red-500 py-4'>Un Authorized Access</p>
            <Link className="text-blue-500 underline italic" href={"/"}>
                Go Back to Home
            </Link>
        </div>
    );
}

export default Authorization;

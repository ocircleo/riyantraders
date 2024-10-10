import Link from 'next/link';
import React from 'react';

const Dashboard = () => {
    return (
        <div className='bg-white w-full h-full  flex items-center relative text-sm justify-center  font-semibold flex-col gap-3'>
            <p className='absolute top-4 '> Welcome to Dashboard</p>
          <p className='scale-[8] text-4xl'>😘</p> 
        </div>
    );
};

export default Dashboard;
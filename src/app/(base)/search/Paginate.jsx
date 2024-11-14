import Link from 'next/link';
import React from 'react';

const Paginate = ({ request }) => {
    let array = [...new Array(14).keys()];
    return <div className='flex gap-2 items-start w-full '> {array.map(ele => <PaginateItem key={ele} length={array.length} current={ele} request={request}></PaginateItem>)} </div>
}



const PaginateItem = ({ length, current, request }) => {
    

    let button = <Link href={`/search?inStock=${request.inStock}&min=${request.min}&max=${request.max}&processor=${request.processor}&gen=${request.gen}&ram=${request.ram}&storage=${request.storage}&graphics=${request.graphics}&sort=${request.sort}&page=${current}`} className={`${current == request.page ? "bg-blue-400 text-white" : "bg-white"} border px-3 py-1 rounded hover:scale-75 duration-100`}>{current + 1}</Link>
    if (length <= 8) return button; //If pages are less then or equal to seven no need for the rest of the conditions

    //if there are more then seven pages go below
    if (current < 3) return button;
    if (current == (length - 1)) return button;
    if (current == (length - 2)) return button;
    if (current == request.page) return button
    if (current == (request.page - 1)) return button;
    if (current == (request.page + 1)) return button;
    if (current == (length - 3) && current > (request.page + 1)) return <p>...</p>;
    if (current == (request.page - 2) && current > 2) return <p>...</p>;
    return null;

}






export default Paginate;

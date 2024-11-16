import Link from 'next/link';
import React from 'react';


const PaginateItem = ({ length, current, request }) => {


    let button = <Link href={`?page=${current}`} className={`${current == request ? "bg-blue-400 text-white border-blue-400" : "bg-white"} border-2 border-black font-semibold px-3 py-1 rounded  active:scale-90 duration-100`}>{current + 1}</Link>
    if (length <= 8) return button; //If pages are less then or equal to seven no need for the rest of the conditions

    //if there are more then seven pages go below
    if (current < 3) return button;
    if (current == (length - 1)) return button;
    if (current == (length - 2)) return button;
    if (current == request) return button;
    if (current == (request - 1)) return button;
    if (current == (request + 1)) return button;
    if (current == (length - 3) && current > (request.page + 1)) return <p>...</p>;
    if (current == (request - 2) && current > 2) return <p>...</p>;
    return null;

}
export default PaginateItem


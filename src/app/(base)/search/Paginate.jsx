import Link from 'next/link';
import React from 'react';

const Paginate = ({ query, paginate }) => {
    let length = 0;
    try {
        length = Math.ceil(Number(paginate?.length) / 12);
    } catch (error) {
        length = 0;
    }
    let array = [...new Array(length).keys()];
    return <div className='flex gap-2 items-start w-full  m-3'> {array.map(ele => <PaginateItem key={ele} length={array.length} current={ele} query={query}></PaginateItem>)} </div>
}



const PaginateItem = ({ length, current, query }) => {
    let queryString = "/search?";
    let start = true;
    for (let item in query) {
        if (item == "page") continue;
        if (start) queryString += `${item}=${query[item]}`;
        else queryString += `&${item}=${query[item]}`;
        start = false;
    }
    if (start) queryString += `${"page"}=${current}`
    else queryString += `&${"page"}=${current}`;

    let button = <Link className={` ${query.page == current ? "bg-blue-400" : "bg-gray-100"} rounded border-2 border-gray-300 hover:bg-white font-semibold  px-4 py-1 active:scale-95 duration-100`} href={queryString}>{current + 1}</Link>
    if (length <= 8) return button; //If pages are less then or equal to seven no need for the rest of the conditions

    //if there are more then seven pages go below
    if (current < 3) return button;
    if (current == (length - 1)) return button;
    if (current == (length - 2)) return button;
    if (current == query.page) return button
    if (current == (query.page - 1)) return button;
    if (current == (query.page + 1)) return button;
    if (current == (length - 3) && current > (query.page + 1)) return <p>...</p>;
    if (current == (query.page - 2) && current > 2) return <p>...</p>;
    return null;

}






export default Paginate;

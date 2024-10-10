'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
const ActiveLink = ({ to, click, children }) => {
    const pathname = usePathname()
    return (
        <Link onClick={click} href={to} className={pathname == to ? "bg-black text-center py-2 rounded font-semibold capitalize  hover:bg-indigo-400 text-white duration-100" : "bg-gray-100 border  shadow-inner text-center py-2 rounded font-semibold capitalize  hover:bg-indigo-400 hover:text-white duration-100"}>
            {children}
        </Link>
    );
};

export default ActiveLink;
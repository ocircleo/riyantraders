'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
const ActiveNavLink = ({ to, click, children }) => {
  const pathname = usePathname()
  return (
    <Link onClick={click} href={to} className={pathname == to ? "text-center font-semibold capitalize  text-red-600  italic text-nowrap" : " text-black font-semibold  capitalize  hover:text-red-500 text-nowrap"}>
      {children}
    </Link>
  );
};

export default ActiveNavLink;

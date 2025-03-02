import Link from "next/link";
import Home from "./home/Home";

let apps = ["dell", "asus", "acer", "hp", "mac", "walton"];
export default async function page(request) {
  return (
    <div className=" min-h-screen h-full rounded flex items-center flex-col">
      <div className="flex gap-3 h-9 ps-12 bg-gray-800 w-full items-center  self-start overflow-x-hidden">
        {apps.map((ele) => (
          <Link
            className="text-sm capitalize font-semibold  rounded px-2 text-white hover:text-red-500"
            href={"/search?text=" + ele}
            key={ele}
          >
            {ele}
          </Link>
        ))}
      </div>
      <Home request={request}></Home>
    </div>
  );
}

import Search from "@/app/utls/searchbar/Search";
import Link from "next/link";
import { API } from "../utls/api/API";
import App from "../utls/app/App";
import { textWash } from "../utls/searchbar/TextFilter";
const SearchPage = ({ text }) => {
  return (
    <>
      <p className="text-sm font-semibold text-gray-600  border-s-2 ps-2 italic">
        <Link href={"/"}>home</Link> /{" "}
        <Link className="text-indigo-300" href={"/search"}>
          search
        </Link>
      </p>
      <Search text={text}></Search>
      <p className="text-gray-600 text-sm">
        Results for: &quot; <i> {text} &quot;</i>
      </p>
    </>
  );
};
const page = async ({ searchParams }) => {
  const text = searchParams.text;
  const res = await fetch(API + "get/search?text=" + textWash(text));
  const result = await res.json();
  return (
    <div className="w-full px-3 py-1 lg:w-5/6 mx-auto">
      <SearchPage text={searchParams?.text}></SearchPage>
      {result?.length == 0 ? (
        <p className="text-center font-semibold text-gray-600 pt-12">
          No Result found <br /> try another keyword
        </p>
      ) : (
        ""
      )}
      <div className="px-3 sm:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 mt-5">
        {result.map((ele, index) => (
          <App key={ele} app={ele}></App>
        ))}
      </div>
    </div>
  );
};
export default page;

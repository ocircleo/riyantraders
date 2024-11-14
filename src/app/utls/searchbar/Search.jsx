"use client"
import { useRouter } from 'next/navigation';
import { textWash } from './TextFilter';
const Search = ({ text,invisible = "md" }) => {
    let router = useRouter()
    const searchText = (e) => {
        e.preventDefault();
        let text = e.target.text.value;
        router.push(`/search?text=${textWash(text)}`)
    }
    return (
        <form onSubmit={searchText} action='/search' title='search' className={`md:w-2/5 rounded mx-4 md:mx-0 w-full border-2 border-gray-800  ${invisible == "md"?"md:hidden flex":invisible=="sm"?"hidden md:flex":"flex"} items-center justify-center gap-2 bg-transparent scale-90 sm:scale-100`}>
            <input type="text" name="text" className='bg-transparent p-2  w-full h-full outline-none border-none  focus:border-transparent focus:outline-none ' required defaultValue={text} placeholder='Search Laptops' />
            <button type='submit' className='h-full bg-gray-800  px-2 sm:px-5 py-2 text-white duration-100 active:scale-x-105 font-semibold '>Search</button>
        </form>
    );
};


export default Search;
"use client";
import { API } from "@/app/utls/api/API";
import NextPrev from "@/app/utls/nextprev/NextPrev";
import NextPrevFunc from "@/app/utls/nextprev/NextPrevFun";
import { useEffect, useRef, useState } from "react";
import Item from "./Item";
import Pagination from "@/app/utls/pagination/Paginate";
import {
  getSingleLapBlock,
  setMultiLap,
  setSingLapBlock,
} from "@/app/utls/db/LaptopDB";
const Page = () => {
  const [items, setItems] = useState({ loading: true, data: [] });
  const [pages, setPages] = useState({ current: 0, length: 0 });
  const formRef = useRef(null);
  const fetchData = async (text, price, stock, page) => {
    setItems({ loading: true, data: [] });
    try {
      const response = await fetch(
        `${API}user/search_items_admin?text=${text}&stock=${stock}&sort=${price}&page=${page}`,{cache:"no-cache"}
      );
      const data = await response.json();
      setPages({ current: page, length: data.result.length });
      setItems({ loading: false, data: data.result.data });
      let queryString = text + stock + price; // For validating if search params changed
      setMultiLap(data?.result?.data); // for finding on info using id quickly (caching data)
      setSingLapBlock(page, data?.result?.data, queryString); //for page like page 0, 1 to etc. (caching data)
    } catch (error) {
      console.log(error);
    }
  };

  let timeout;
  const formChange = (page, timer = 400) => {
    let text, price, stock;
    if (formRef.current) {
      let form = formRef.current;
      text = form.model.value;
      price = form.price.value;
      stock = form.stock.value;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fetchData(text, price, stock, page);
    }, timer);
  };
  const submitForm = (e) => {
    e.preventDefault();
    formChange(0);
  };
  const paginate = (to) => {
    const cachedData = getSingleLapBlock(to);
    if (cachedData) {
      setItems({ loading: false, data: cachedData });
      setPages({ current: to, length: pages.length });
      return;
    }
    if (to < 0) to = 0;
    if (to > pages.length / 12) to = Math.floor(pages.length / 12);
    formChange(to, 0);
  };
  useEffect(() => {
    fetchData("", 0, null, 0);
  }, []);
  return (
    <div className="bg-stone-200/80 min-h-full px-6 py-3 flex justify-between flex-col">
      <div>
        <h2 className=" text-stone-800 font-bold border-b-2 border-dashed border-b-stone-500 mb-3 text-xl pt-2 pb-5">
          Edit Laptops
        </h2>
        <form
          onSubmit={submitForm}
          ref={formRef}
          onChange={submitForm}
          className="flex justify-between flex-wrap gap-2 md:gap-4 lg:gap-6"
        >
          <fieldset className="flex flex-col gap-2 flex-grow">
            <label htmlFor="model" className="font-semibold">
              Laptop Model
            </label>
            <input
              type="text"
              name="model"
              placeholder="Laptop Model"
              id="model"
              className="py-3 px-2 bg-white rounded outline-indigo-500 w-full "
            ></input>
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="price" className="font-semibold">
              Price
            </label>
            <select
              id="price"
              name="price"
              className="py-3 px-2 bg-white rounded outline-indigo-500"
            >
              <option value={0}>default</option>
              <option value={-1}>High to low</option>
              <option value={1}>Low to high</option>
            </select>
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="stock" className="font-semibold">
              Stock{" "}
            </label>
            <select
              id="stock"
              name="stock"
              className="py-3 px-2 bg-white rounded outline-indigo-500"
            >
              <option value={"null"}>default</option>
              <option value={"in"}>In Stock</option>
              <option value={"out"}>Out of Stock</option>
            </select>
          </fieldset>
        </form>
        <div className="bg-indigo-400 text-white grid grid-cols-12 text-xs sm:text-sm md:text-base p-2 justify-items-center mt-4">
          <div className="col-span-1">Index</div>
          <div className="col-span-3">Brand</div>
          <div className="col-span-3">Model</div>
          <div className="col-span-2">Price</div>
          <div className="col-span-2">Stock</div>
          <div className="col-span-1">Edit</div>
        </div>
        {items.loading ? (
          <p className="text-center py-12 text-lg font-semibold">Loading ...</p>
        ) : (
          <>
            {items?.data.map((ele, index) => (
              <Item
                key={index}
                index={index}
                currentPage={pages.current}
                data={ele}
              ></Item>
            ))}
          </>
        )}
      </div>
      <div className="flex gap-4">
        <p className="py-2">
          Page {pages.current} / {Math.floor(pages.length / 12)}
        </p>
        <p className="py-2">Products found: {pages.length}</p>
      </div>
      <Pagination current={pages.current} paginate={paginate}></Pagination>
      <NextPrev
        info={NextPrevFunc(
          "/dashboard/addItem",
          "Add Item",
          "/dashboard/users",
          "Users"
        )}
      ></NextPrev>
    </div>
  );
};

export default Page;

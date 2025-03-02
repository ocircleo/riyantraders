"use client";
import { API } from "@/app/utls/api/API";
import NextPrev from "@/app/utls/nextprev/NextPrev";
import NextPrevFunc from "@/app/utls/nextprev/NextPrevFun";
import { useEffect, useRef, useState } from "react";
import Pagination from "@/app/utls/pagination/Paginate";
import { ImCross } from "react-icons/im";

import OrderItem from "./OrderItem";
import {
  getSingleOrderBlock,
  resetOrder,
  setSingOrderBlock,
} from "@/app/utls/db/OrdersDB";
const Page = () => {
  const [items, setItems] = useState({ loading: true, data: [] });
  const [pages, setPages] = useState({ current: 0, length: 0 });
  const formRef = useRef(null);
  const fetchData = async (phone, status, page) => {
    setItems({ loading: true, data: [] });
    try {
      const response = await fetch(
        `${API}order/searchOrders?phone=${phone}&status=${status}&page=${page}`,
        { cache: "no-cache" }
      );
      const data = await response.json();
      setPages({ current: page, length: data.result.length });
      setItems({ loading: false, data: data.result.data });
      let queryString = phone; // For validating if search params changed
      setSingOrderBlock(page, data?.result?.data, queryString); //for page like page 0, 1 to etc. (caching data)
    } catch (error) {
      console.log(error);
    }
  };

  let timeout;
  const formChange = (page, timer = 400) => {
    let phone, status;
    if (formRef.current) {
      let form = formRef.current;
      phone = form.model.value;
      status = form.status.value;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fetchData(phone, status, page);
    }, timer);
  };
  const submitForm = (e) => {
    e.preventDefault();
    formChange(0);
  };
  const paginate = (to) => {
    const cachedData = getSingleOrderBlock(to);
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
    fetchData("", "Pending", 0);
  }, []);
  const refreshData = () => {
    resetOrder();
    fetchData("", "Pending", 0);
  };
  return (
    <div className="bg-stone-200/80 min-h-full px-6 py-3 flex justify-between flex-col">
      <div>
        <h2 className=" text-stone-800 font-bold border-b-2 border-dashed border-b-stone-500 mb-3 text-xl pt-2 pb-5">
          Current Orders
        </h2>
        <form
          onSubmit={submitForm}
          ref={formRef}
          onChange={submitForm}
          className="flex justify-between flex-wrap gap-2 md:gap-4 lg:gap-6"
        >
          <fieldset className="flex flex-col relative  gap-2 flex-grow">
            <label htmlFor="model" className="font-semibold">
              Phone Number
            </label>
            <input
              type="text"
              name="model"
              placeholder="Enter Phone Number"
              id="model"
              className="py-3 px-2 bg-white rounded outline-indigo-500 w-full "
            ></input>
            <button type="reset" className=" p-2  absolute bottom-2 right-1">
              <ImCross />
            </button>
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="status" className="font-semibold">
              Status
            </label>
            <select
              id="status"
              name="status"
              className="py-3 px-2 bg-white rounded outline-indigo-500"
            >
              <option value={""}>Default</option>
              <option selected value={"Pending"}>
                Pending
              </option>
              <option value={"Processing"}>Processing</option>
              <option value={"Shipped"}>Shipped</option>
              <option value={"Delivered"}>Delivered</option>
              <option value={"Canceled"}>Canceled</option>
            </select>
          </fieldset>
        </form>
        <div className="bg-indigo-400 text-white grid grid-cols-12 text-xs sm:text-sm md:text-base p-2 justify-items-center mt-4">
          <div className="col-span-1">Index</div>
          <div className="col-span-3">Name</div>
          <div className="col-span-3">Phone</div>
          <div className="col-span-2">Price</div>
          <div className="col-span-2">Address</div>
          <div className="col-span-1">More</div>
        </div>
        {items.loading ? (
          <p className="text-center py-12 text-lg font-semibold">Loading ...</p>
        ) : (
          <>
            {items?.data.map((ele, index) => (
              <OrderItem
                refreshData={refreshData}
                key={index}
                index={index}
                currentPage={pages.current}
                data={ele}
              ></OrderItem>
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
          "/dashboard/dashboard",
          "Dashboard",
          "/dashboard/addItem",
          "Add Item"
        )}
      ></NextPrev>
    </div>
  );
};

export default Page;

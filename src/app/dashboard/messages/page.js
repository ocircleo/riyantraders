"use client";
import { API } from "@/app/utls/api/API";
import { getCookie } from "@/app/utls/cookie/Cookie";
import {
  getSingleMessageBlock,
  setSingleMessageBlock,
} from "@/app/utls/db/MessageDB";
import NextPrev from "@/app/utls/nextprev/NextPrev";
import NextPrevFunc from "@/app/utls/nextprev/NextPrevFun";
import Pagination from "@/app/utls/pagination/Paginate";
import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState({ loading: true, data: [] });
  const [pages, setPages] = useState({ current: 0, length: 0 });
  const [currentType, setCurrent] = useState("unread");

  const fetchData = async (state, page) => {
    setMessages({ loading: true, data: [] });
    try {
      const response = await fetch(
        `${API}admin/messages?state=${state}&page=${page}`,
        {
          headers: { authorization: getCookie("accessToken") },
        }
      );
      const data = await response.json();
      let { result } = await data;
      setPages({ current: page, length: result.length ?? 0 });
      setMessages({ loading: false, data: result.data ?? [] });
      let queryString = state + page; // For validating if search params changed
      setSingleMessageBlock(page, result.data ?? [], queryString); //for page like page 0, 1 to etc. (caching data)
    } catch (error) {
      console.log(error);
      setMessages({ loading: false, data: [] });
    }
  };

  const paginate = (to) => {
    const cachedData = getSingleMessageBlock(to);
    if (cachedData) {
      setMessages({ loading: false, data: cachedData });
      setPages({ current: to, length: pages.length });
      return;
    }
    if (to < 0) to = 0;
    if (to > pages.length / 12) to = Math.floor(pages.length / 12);
    fetchData(currentType, to);
  };
  const stateChange = (e) => {
    let target = e.target;
    let type = target.getAttribute("data-type");
    setCurrent(type);
    fetchData(type, 0);
  };
  useEffect(() => {
    fetchData("unread", 0);
  }, []);
  return (
    <div className="bg-stone-200/80 min-h-full px-6 py-3 flex justify-between flex-col">
      <div>
        <h2 className=" text-stone-800 font-bold border-b-2 border-dashed border-b-stone-500 mb-3 text-xl pt-2 pb-5">
          Messages
        </h2>
      </div>
      <div className="flex gap-5 ">
        <button
          onClick={stateChange}
          data-type="unread"
          className={`ps-2 py-2 pe-5  font-semibold ${
            currentType == "unread" ? "bg-green-300" : "bg-white"
          }`}
        >
          New Message
        </button>
        <button
          onClick={stateChange}
          data-type="replied"
          className={`ps-3 py-2 pe-10 font-semibold ${
            currentType == "replied" ? "bg-green-300" : "bg-white"
          }`}
        >
          History
        </button>
      </div>
      <div>
        <p className="text-xl font-semibold text-center ">
          {messages.loading
            ? "Loading..."
            : messages.data?.length == 0
            ? "No Data Found"
            : ""}
        </p>
        {(messages.data ?? []).map((ele,index) => (
          <Message data={ele} key={index}></Message>
        ))}
      </div>
      <Pagination current={pages.current} paginate={paginate}></Pagination>
      <NextPrev
        info={NextPrevFunc(
          "/dashboard/users",
          "Users",
          "/dashboard/editProfile",
          "Edit Profile"
        )}
      ></NextPrev>
    </div>
  );
};

export default Messages;

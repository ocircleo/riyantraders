"use client";
import NextPrev from "@/app/utls/nextprev/NextPrev";
import NextPrevFunc from "@/app/utls/nextprev/NextPrevFun";
import Form from "./Form";
import { API } from "@/app/utls/api/API";
import ErrorPage from "@/app/error";
import { getCookie } from "@/app/utls/cookie/Cookie";
import { useEffect, useState } from "react";
const Page = (request) => {
  const { id } = request.params;
  const [data, setData] = useState({ loading: true, data: null, error: false });
  useEffect(() => {
    (async function () {
      try {
        let res = await fetch(API + "admin/user/" + id, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `${getCookie("accessToken")}`,
          },
        });
        res = await res.json();
        setData({ loading: false, data: res.result, error: false });
      } catch (error) {
        setData({ loading: false, data: null, error: true });
        console.log("some error happened");
      }
    })();
  }, [id]);

  return (
    <div className="bg-stone-200/80 min-h-full px-6 py-3 flex justify-between flex-col">
      <div>
        <h2 className=" text-stone-800 font-bold border-b-2 border-dashed border-b-stone-500 mb-3 text-xl pt-2 pb-5">
          User Information
        </h2>
        <Form error={data.error} loading={data.loading} data={data.data} setData={setData}></Form>
      </div>

      <NextPrev
        info={NextPrevFunc(
          "/dashboard/addItem",
          "Add Item",
          "/dashboard/statistics",
          "Statistics"
        )}
      ></NextPrev>
    </div>
  );
};

export default Page;

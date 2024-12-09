import React from "react";
import OrderCard from "./OrderCard";
import SubmitOrder from "./SubmitOrder";
import Link from "next/link";

const Page = (request) => {
  let { items } = request.searchParams;
  let itemArray = [];
  if (items) itemArray = items.length > 0 ? items.split(",") : [];
  if (itemArray.length == 0)
    return (
      <div className="text-2xl font-semibold text-center py-24">
        No Items Selected <br /> <Link className="text-blue-500 text-base underline italic underline-offset-4" href={"/"}>Select Items</Link>
      </div>
    );
  return (
    <>
      <div className="flex flex-col gap-4 w-5/6 mx-auto py-12">
        <div className="text-2xl underline underline-offset-4 pb-6 font-semibold">
          Confirm Order
        </div>
        <div className="flex gap-2 flex-col lg:flex-row">
          <div className="w-full lg:w-2/3">
            {itemArray.map((ele, index) => (
              <OrderCard key={ele} id={ele}></OrderCard>
            ))}
          </div>
          <div className="w-full lg:w-1/3">
            <SubmitOrder></SubmitOrder>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

import React from "react";
import OrderCard from "./OrderCard";
import SubmitOrder from "./SubmitOrder";
import Link from "next/link";
import OrderConfirmation from "./OrderConfirmation";

const Page = (request) => {
  let { items } = request.searchParams;
  let itemArray = [];
  if (items) itemArray = items.length > 0 ? items.split(",") : [];
  if (itemArray.length == 0)
    return (
      <div className="text-2xl font-semibold text-center py-24">
        No Items Selected <br />{" "}
        <Link
          className="text-blue-500 text-base underline italic underline-offset-4"
          href={"/"}
        >
          Select Items
        </Link>
      </div>
    );
  return (
    <>
      <div className="flex flex-col gap-4 w-5/6 mx-auto pt-12">
        <div className="text-xl font-medium">Order Overview</div>
        <div className=" w-full">
          <div className="w-full ">
            {itemArray.map((ele, index) => (
              <OrderCard key={ele} id={ele}></OrderCard>
            ))}
          </div>
          <div className=" bg-gray-100 w-full ">
            <SubmitOrder></SubmitOrder>
          </div>
        </div>
      </div>
      <OrderConfirmation></OrderConfirmation>
    </>
  );
};

export default Page;

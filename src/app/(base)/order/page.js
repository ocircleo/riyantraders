import React from "react";
import OrderCard from "./OrderCard";
import SubmitOrder from "./SubmitOrder";

const Page = (request) => {
  let { items } = request.searchParams;
  let itemArray = [];
  if (items) itemArray = items.length > 0 ? items.split(",") : [];

  return (
    <div className="flex flex-col gap-4 w-5/6 mx-auto py-12">
      {itemArray.map((ele) => (
        <OrderCard key={ele} id={ele}></OrderCard>
      ))}
      <SubmitOrder></SubmitOrder>
    </div>
  );
};

export default Page;

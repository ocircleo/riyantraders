"use client";
import React, { useEffect, useState } from "react";
import getUser from "../utls/db/UserDB";
import NextPrev from "../utls/nextprev/NextPrev";
import NextPrevFunc from "../utls/nextprev/NextPrevFun";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async function () {
      let temUser = await getUser();
      if (temUser) setUser(temUser);
    })();
  }, []);

  return (
    <div className="bg-stone-200/80 min-h-full px-6 flex justify-between flex-col py-3 relative">
      <div>
        <form className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
          <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded">
            <label htmlFor="name" className="font-bold">
              User Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className=" py-3 px-2 bg-white rounded outline-indigo-500"
              placeholder="your name"
              defaultValue={user?.name}
            ></input>
          </fieldset>
          <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded">
            <label htmlFor="city" className="font-bold">
              City / Zila
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className=" py-3 px-2 bg-white rounded outline-indigo-500"
              placeholder="City or zila you live in"
              defaultValue={user?.city}
            ></input>
          </fieldset>
          <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded">
            <label htmlFor="address" className="font-bold">
              Delivery address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className=" py-3 px-2 bg-white rounded outline-indigo-500"
              placeholder="From where you want to pick up orders"
              defaultValue={user?.address}
            ></input>
          </fieldset>
          <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              disabled
              type="text"
              id="email"
              name="email"
              className=" py-3 px-2 bg-white rounded outline-indigo-500"
              placeholder="your Email"
              defaultValue={user?.email}
              title="You Can't Edit Email"
            ></input>
          </fieldset>
          <fieldset className="flex flex-col gap-2 p-2  rounded">
            <label htmlFor="phone" className="font-bold">
              Phone Number
            </label>
            <input
              disabled
              type="text"
              id="phone"
              name="phone"
              className=" py-3 px-2 bg-white outline-indigo-500 rounded"
              placeholder="Phone number"
              defaultValue={user?.phone}
              title="You Can't Edit Phone"
            ></input>
          </fieldset>
        </form>
      </div>
      <NextPrev
        info={NextPrevFunc(
          "/dashboard",
          "Dashboard",
          "/dashboard/addItem",
          "Add Item"
        )}
      ></NextPrev>
    </div>
  );
};

export default Dashboard;

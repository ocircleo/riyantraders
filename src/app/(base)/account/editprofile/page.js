"use client";
import { API } from "@/app/utls/api/API";
import { getCookie } from "@/app/utls/cookie/Cookie";
import getUser from "@/app/utls/db/UserDB";
import NextPrev from "@/app/utls/nextprev/NextPrev";
import NextPrevFunc from "@/app/utls/nextprev/NextPrevFun";
import Popup from "@/app/utls/popup/Popup";
import UsePopup from "@/app/utls/popup/usePopup";
import React, { useEffect, useState } from "react";

const Page = () => {
  let [user, setUser] = useState(null);
  const [popup, closePopup, showPopup, showPopupError, askPopup] = UsePopup();
  useEffect(() => {
    (async function () {
      let temUser = await getUser();
      if (temUser) setUser(temUser);
    })();
  }, []);
  const submit = async (e) => {
    try {
      e.preventDefault();
      let form = e.target;
      let name, city, address, phone, email;
      name = form.name.value;
      city = form.city.value;
      address = form.address.value;
      phone = form.phone.value;
      email = form.email.value;
      let data = { name, city, address, phone, email };
      const res = await fetch(API + "user/update_profile", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: getCookie("accessToken"),
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.error) showPopupError(result.message);
      else showPopup(result.message);
    } catch (error) {
      console.log(error);
      showPopupError(error.message);
    }
  };
  return (
    <div className=" min-h-full px-6 py-3 relative mb-14 pb-10">
      {popup.is && <Popup popup={popup} closePopup={closePopup}></Popup>}
      <h2 className=" text-stone-800  font-bold border-b-2 border-dashed border-b-stone-500 mb-8 text-xl pt-2 pb-5  capitalize">
        Edit your profile
      </h2>
      <form
        onSubmit={submit}
        className=" grid grid-cols-2 gap-3"
      >
        <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded col-span-2 lg:col-span-1">
          <label htmlFor="name" className="font-bold">
            User Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className=" py-3 px-2 bg-white rounded outline-indigo-500 border-2"
            placeholder="your name"
            defaultValue={user?.name}
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded col-span-2 lg:col-span-1">
          <label htmlFor="city" className="font-bold">
            City / Zila
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className=" py-3 px-2 bg-white rounded outline-indigo-500 border-2"
            placeholder="City or zila you live in"
            defaultValue={user?.city}
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded col-span-2 lg:col-span-1">
          <label htmlFor="address" className="font-bold">
            Delivery address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className=" py-3 px-2 bg-white rounded outline-indigo-500 border-2"
            placeholder="From where you want to pick up orders"
            defaultValue={user?.address}
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded col-span-2 lg:col-span-1">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            disabled
            type="text"
            id="email"
            name="email"
            className=" py-3 px-2 bg-white rounded outline-indigo-500 border-2"
            placeholder="your Email"
            defaultValue={user?.email}
            title="You Can't Edit Email"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2  rounded col-span-2 lg:col-span-1">
          <label htmlFor="phone" className="font-bold">
            Phone Number
          </label>
          <input
            disabled
            type="text"
            id="phone"
            name="phone"
            className=" py-3 px-2 bg-white outline-indigo-500 rounded border-2"
            placeholder="Phone number"
            defaultValue={user?.phone}
            title="You Can't Edit Phone"
          ></input>
        </fieldset>
        <div className="mt-6 col-span-2 flex items-center justify-center ">
          <button className="bg-green-500 w-full lg:w-1/2 text-white font-semibold py-3 rounded  hover:bg-indigo-400 active:scale-95 duration-100">
            Update Information
          </button>
        </div>
      </form>
      {/* <NextPrev
        info={NextPrevFunc(
          "/dashboard/messages",
          "Messages",
          "/dashboard/changePassword",
          "Change Password"
        )}
      ></NextPrev> */}
    </div>
  );
};

export default Page;

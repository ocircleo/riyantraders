"use client";
import { API } from "@/app/utls/api/API";
import { getCookie, setCookie } from "@/app/utls/cookie/Cookie";
import NextPrev from "@/app/utls/nextprev/NextPrev";
import NextPrevFunc from "@/app/utls/nextprev/NextPrevFun";
import Popup from "@/app/utls/popup/Popup";
import UsePopup from "@/app/utls/popup/usePopup";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [popup, closePopup, showPopup, showPopupError, askPopup] = UsePopup();
  const [error, setError] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    let oldPassword, newPassword, confirmPassword;
    oldPassword = form.oldPassword.value;
    newPassword = form.newPassword.value;
    confirmPassword = form.confirmPassword.value;
    if (newPassword != confirmPassword)
      return setError("New password and confirm password does not match");
    try {
      let data = { oldPassword, newPassword };
      const res = await fetch(API + "auth/update_password", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: getCookie("accessToken"),
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.error) return showPopupError(result.message);
      else showPopup(result.message);
      setCookie("accessToken", result?.token, 3);
    } catch (error) {
      console.log(error);
      showPopupError(error.message);
    }
  };
  return (
    <div className=" min-h-full px-6 py-3 ">
      {popup.is && <Popup popup={popup} closePopup={closePopup}></Popup>}
      <h2 className=" text-stone-800 font-bold border-b-2 border-dashed border-b-stone-500 mb-3 text-xl pt-2 pb-5  capitalize">
        Change your Password
      </h2>

      <form onSubmit={submit} className=" flex flex-col gap-1">
        <fieldset className="flex flex-col gap-2 p-2  pb-3 rounded">
          <label htmlFor="oldPassword" className="font-bold">
            Previous Password
          </label>
          <input
            required
            type="text"
            id="oldPassword"
            name="oldPassword"
            className=" py-3 px-2 bg-white rounded outline-indigo-500 w-full lg:w-1/2 border-2"
            placeholder="Enter your previous password"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2  pb-3 rounded">
          <label htmlFor="newPassword" className="font-bold">
            New Password
          </label>
          <input
            required
            type="text"
            id="newPassword"
            name="newPassword"
            className=" py-3 px-2 bg-white rounded outline-indigo-500 w-full lg:w-1/2 border-2"
            placeholder="Enter your new password"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2  pb-3 rounded">
          <label htmlFor="confirmPassword" className="font-bold">
            Confirm New Password
          </label>
          <input
            required
            type="text"
            id="confirmPassword"
            name="confirmPassword"
            className=" py-3 px-2 bg-white rounded outline-indigo-500 w-full lg:w-1/2 border-2"
            placeholder="Confirm New password"
          ></input>
        </fieldset>
        <p className="text-red-500 text-xs py-2 font-semibold">{error}</p>
        <button
          type="submit"
          className="bg-red-500 w-full lg:w-1/2 text-white font-semibold py-3 mb-4 mt-4 rounded hover:bg-indigo-400 active:scale-95 duration-100"
        >
          Update Password
        </button>
      </form>
      <Link
        href={"/forgotPassword"}
        className="text-indigo-500 font-semibold text-sm"
      >
        Forgotten Password ? click here to reset
      </Link>
      <NextPrev
        info={NextPrevFunc(
          "/dashboard/editProfile",
          "Edit Profile",
          "/dashboard",
          "Dashboard Home"
        )}
      ></NextPrev>
    </div>
  );
};

export default Page;

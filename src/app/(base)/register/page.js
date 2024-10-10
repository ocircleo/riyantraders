"use client";
import Link from "next/link";
import React, { useState } from "react";
import { setCookie } from "../../utls/cookie/Cookie";
import { setAuthInfo } from "../../utls/auth/AuthInfo";
import { useRouter } from "next/navigation";
import { API } from "@/app/utls/api/API";

const Register = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const submitForm = async (e) => {
    e.preventDefault();
    setError("")
    let name, email, password, button, form, formData;
    form = e.target;
    name = form.name.value;
    email = form.email.value;
    password = form.password.value;
    button = form.button;
    button.innerText = "Please Wait...";
    formData = { name, email, password };
    let result, data;
    result = await fetch(API+"auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    data = await result.json();
    if (data.error) {
      setError(data.message);
      button.innerText = "Register";
      return;
    }
    setCookie("accessToken", data?.cookie, 3);
    setAuthInfo(data);
    router.replace("/dashboard");
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 px-2">
      <div className="w-full md:w-[27rem] bg-white border rounded  p-7 ">
        <h1 className="text-xl font-bold py-4">Register a new account</h1>
        <form className="flex flex-col gap-3" onSubmit={submitForm}>
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">
              Enter Name
            </label>
            <input
              type="text"
              id="name"
              className="p-2 border-[3px]  rounded focus:border-indigo-500  outline-transparent w-full"
              name="name"
              placeholder="Full name"
              required
            ></input>
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">
              Enter Email
            </label>
            <input
              type="email"
              id="email"
              className="p-2 border-[3px]  rounded focus:border-indigo-500  outline-transparent w-full"
              name="email"
              placeholder="Email address"
              required
            ></input>
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold">
              Enter Password
            </label>
            <input
              minLength={6}
              maxLength={32}
              type={show ? "text" : "password"}
              id="password"
              className="p-2 border-[3px]  rounded focus:border-indigo-500  outline-transparent  w-full"
              name="password"
              placeholder="Email password"
              required
            ></input>
            <p className="font-semibold text-xs text-red-500 capitalize">
              {error}
            </p>
          </fieldset>

          <fieldset className="flex gap-2 items-center flex-wrap">
            <input
              onChange={() => setShow(!show)}
              type="checkbox"
              id="check"
              className="cursor-pointer h-4 w-4"
            ></input>
            <label
              htmlFor="check"
              className="font-semibold select-none cursor-pointer"
            >
              Show Password
            </label>
          </fieldset>
          <button
            type="submit"
            className="bg-indigo-500 rounded py-2 mt-6 text-white font-semibold duration-100  hover:bg-blue-500 active:scale-105  w-full"
            name="button"
          >
            Register
          </button>
        </form>
        {/* <p className="text-center py-3 font-semibold">or</p>
        <button
          type="button"
          className="border-2 border-gray-400 font-semibold  py-2 rounded text-center w-full duration-100 active:scale-105 hover:border-indigo-500"
        >
          Continue With <span className="font-bold text-blue-500">G</span>
          <span className="font-bold text-red-500">o</span>
          <span className="font-bold text-orange-500">o</span>
          <span className="font-bold text-blue-500">g</span>
          <span className="font-bold text-green-500">l</span>
          <span className="font-bold text-red-500">e</span>
        </button> */}
        <p className="text-sm font-semibold py-3">
          Already have an account ?{" "}
          <Link href={"/login"} className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Register;

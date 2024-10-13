"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { setAuthInfo } from "../../utls/auth/AuthInfo";
import { setCookie } from "../../utls/cookie/Cookie";
import { API } from "@/app/utls/api/API";
const Login = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const submitForm = async (e) => {
    setError("");
    e.preventDefault();
    let form = e.target;
    let key = form.key.value;
    let password = form.password.value;
    let button = form.button;
    button.innerText = "Please Wait...";
    let formData = { key, password };
    let result, data;
    result = await fetch(API + "auth/login", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    data = await result.json();
    if (data.error) {
      button.innerText = "Login";
      setError(data.message);
      return;
    }
    button.innerText = "Successful";
    console.log(data);
    setCookie("accessToken", data?.token, 3);
    setAuthInfo(data);
    router.replace("/dashboard");
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white px-2">
      <div className="w-full md:w-[27rem] bg-white border rounded  p-7 ">
        <h1 className="text-xl font-bold py-4">Login To your Account</h1>
        <form className="flex flex-col gap-3" onSubmit={submitForm}>
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">
              Enter Email / Phone
            </label>
            <input
              type="text"
              id="key"
              className="p-2 border-[3px]  rounded focus:border-indigo-500  outline-transparent w-full"
              name="key"
              placeholder="Email or phone number"
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
            <p className="text-xs text-red-500 font-semibold">{error}</p>
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
            Login
          </button>
        </form>
        {/* <p className="text-center py-3 font-semibold">or</p>
        <button
          type="button"
          className="border-2 border-gray-400 font-semibold  py-2 rounded text-center w-full duration-100 active:scale-105 hover:border-indigo-500"
        >
          Login With <span className="font-bold text-blue-500">G</span>
          <span className="font-bold text-red-500">o</span>
          <span className="font-bold text-orange-500">o</span>
          <span className="font-bold text-blue-500">g</span>
          <span className="font-bold text-green-500">l</span>
          <span className="font-bold text-red-500">e</span>
        </button> */}
        <p className="text-sm font-semibold py-3">
          Do not have an account ?{" "}
          <Link href={"/register"} className="text-blue-500 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

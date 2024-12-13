import React from "react";
import LayoutCompo from "./LayoutCompo";
import { cookies } from "next/headers";
import ErrorPage from "./error";
import { API } from "../utls/api/API";
import Authorization from "./Authorization";

const Layout = async ({ children }) => {
  const cookieStore = await cookies();
  let token = cookieStore.get("accessToken");
  if (!token) return <ErrorPage>{"No Token  Provided"}</ErrorPage>;
  let result, res;
  try {
    res = await fetch(API + "auth/auto_login", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token?.value}`,
      },
    });
    result = await res.json();
  } catch (error) {
    if (error) return <ErrorPage>{error.message}</ErrorPage>;
  }
  if (result.error) return <ErrorPage>{result?.message}</ErrorPage>;
  if (result.result.role != "admin") return <Authorization></Authorization>;
  return <LayoutCompo user={result}>{children}</LayoutCompo>;
};

export default Layout;

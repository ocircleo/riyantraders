import { useEffect, useState } from "react";
import { API } from "../api/API";

const setCookie = (key, value, day) => {
  // Set a cookie with an expiration date
  let date = new Date();
  date.setTime(date.getTime() + day * 24 * 60 * 60 * 1000); //days from now
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${key}=${value};` + expires;
};
// function cookieParser(name){
//   let cookieArr = document.cookie.split("; ");
//   for (let cookie of cookieArr) {
//     let [cookieName, cookieValue] = cookie.split("=");
//     if (cookieName == name) {
//       return cookieValue;
//     }
//   }
//   return null;
// }
function getCookie(name) {
  let cookieArr = document.cookie.split("; ");
  for (let cookie of cookieArr) {
    let [cookieName, cookieValue] = cookie.split("=");
    if (cookieName == name) {
      return cookieValue;
    }
  }
  return null;
}
let user_cached = {};
async function getCachedUser() {
  if (user_cached.phone) return user_cached;
  console.log("not cached: ", user_cached); 
  let cookie = getCookie("accessToken");
  try {
    if (cookie) {
      const result = await fetch(API + "auth/auto_login", {
        method: "PUT",
        headers: { Authorization: `${cookie}` },
      });
      const data = await result.json();
      user_cached = data?.result;
      return data;
    }
  } catch (error) {
    return user_cached;
  }
}
function GetUser() {
  const [user, setUser] = useState({});

  useEffect(() => {
    let cookie = getCookie("accessToken");
    try {
      if (cookie) {
        fetch(API + "auth/auto_login", {
          method: "PUT",
          headers: { Authorization: `${cookie}` },
        })
          .then((res) => res.json())
          .then((data) => setUser(data?.result));
      }
    } catch (error) {
      setUser({});
    }
  }, []);

  return [user, setUser];
}
function removeCookie() {
  setCookie("accessToken", "", -1);
}
export { setCookie, getCookie, GetUser, removeCookie, getCachedUser };

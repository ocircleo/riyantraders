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
function GetUser() {
  const [user, setUser] = useState({});
  useEffect(() => {
    let cookie = getCookie("accessToken");
    if (cookie) {
      fetch(API+"auth/auto_login", {
        method: "PUT",
        headers: {"Authorization": `${cookie}` },
      })
        .then((res) => res.json())
        .then((data) => setUser(data?.result));
    }
  }, []);

  return [user, setUser];
}
function removeCookie() {
  setCookie("accessToken", "", -1);
}
export { setCookie, getCookie, GetUser, removeCookie };

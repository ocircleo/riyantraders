import { API } from "../api/API";

const { getCookie, removeCookie } = require("../cookie/Cookie");

let user_cached = null;
let loading = false;
const fetchUser = async (cookie) => {
  console.log("fetching user .. please wait");
  try {
    const result = await fetch(API + "auth/auto_login", {
      method: "PUT",
      headers: { Authorization: `${cookie}` },
    });
    const data = await result.json();
    user_cached = data?.result;
    loading = false;
    console.log("User Loaded");
    return user_cached;
  } catch (error) {
    console.log(error);
    loading = false;
    user_cached = null;
    return user_cached;
  } finally {
    console.clear();
  }
};
let promise;
async function getUser() {
  if (user_cached) {
    console.log("-- user cached");
    return user_cached;
  }

  console.log("--user not cached: ");

  let cookie = getCookie("accessToken");
  if (!cookie) {
    console.log("no cookie found ---");
    return null;
  }
  if (loading) {
    console.log("Loading user, I promise..");
    return await promise;
  }
  loading = true;
  promise = fetchUser(cookie);
  return await promise;
}
function clearUser() {
  removeCookie("accessToken");
  user_cached = null;
}
export { clearUser };
export default getUser;

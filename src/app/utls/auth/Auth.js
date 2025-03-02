import API from "../api/API";

const fetchUserServer = async (cookie) => {
  console.log("fetching user .. please wait");
  try {
    const result = await fetch(API + "auth/auto_login", {
      method: "PUT",
      headers: { Authorization: `${cookie}` },
    });
    const data = await result.json();
   
    if (data.error) return null;
    return data.result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { fetchUserServer };

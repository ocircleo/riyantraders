"use client";
const getLocalData = () => {
  const data = localStorage.getItem("cart");
  if (data) return JSON.parse(data);
  else localStorage.setItem("data", JSON.stringify({}));
  return {};
};
const setLocalData = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};
const ToggleAddCart = (id) => {
  try {
    const cart = getLocalData();
    if (cart[id]) {
      delete cart[id];
      setLocalData(cart);
      return false;
    } else {
      cart[id] = 1;
      setLocalData(cart);
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
const isOnCart = (id) => {
  try {
    const cart = getLocalData();
    if (cart[id]) return true;
    else return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};
const GetCart = () => getLocalData();
export { ToggleAddCart, isOnCart, GetCart };

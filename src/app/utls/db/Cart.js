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
const AddToCart = (id) => {
  try {
    const cart = getLocalData();
    if (cart[id]) cart[id] = Number(cart[id]) + 1;
    else cart[id] = 1;
    setLocalData(cart);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
const RemoveFormCart = (id) => {
  try {
    const cart = getLocalData();
    if (cart[id]) {
      delete cart[id];
      setLocalData(cart);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
const GetCart = () => getLocalData();

export { AddToCart, RemoveFormCart, GetCart };

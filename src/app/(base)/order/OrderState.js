const order = {};
const SetOrder = (id, data, quantity) => {
  let newObj = { data, quantity };
  order[id] = newObj;
};
const IncrementOrder = (id) => {
  if (order[id]) order[id].quantity = Number(order[id].quantity) + 1;
  else order[id].quantity = 1;
  return order[id];
};
const DecrementOrder = (id) => {
  if (order[id].quantity <= 0) return order[id];
  if (order[id]) order[id].quantity = Number(order[id].quantity) - 1;
  return order[id];
};
const DeleteOrder = (id) => delete order[id];
const GetOrder = () => order;
const GetOrderId = (id) => (order[id] ? order[id] : false);
export {
  SetOrder,
  GetOrder,
  GetOrderId,
  IncrementOrder,
  DecrementOrder,
  DeleteOrder,
};

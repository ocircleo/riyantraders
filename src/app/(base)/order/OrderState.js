const order = {};
const SetOrder = (id) => (order[id] = 1);
const IncrementOrder = (id) => {
  if (order[id]) order[id] = Number(order[id]) + 1;
  else order[id] = 1;
};
const DecrementOrder = (id) => {
  if (order[id]) order[id] = Number(order[id]) - 1
};
const DeleteOrder = (id) => delete order[id];
const GetOrder = () => order;
const GetOrderId = (id) => (order[id] ? order[id] : 0);
export { SetOrder, GetOrder,GetOrderId, IncrementOrder, DecrementOrder, DeleteOrder };

let data = {};
const resetOrder = () => (data = {});

let dataBlock = {};
let queryString = null;
const setSingOrderBlock = (page, arr, text) => {
  if (text == queryString) dataBlock[page] = arr;
  else {
    queryString = text;
    dataBlock = {};
  }
};
const getSingleOrderBlock = (page) => dataBlock[page];

export {
  resetOrder,
  setSingOrderBlock,
  getSingleOrderBlock,
};

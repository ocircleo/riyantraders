let data = {};

const setSingUser = (obj) => (data[obj._id] = obj);

const setMultiUser = (arr) => arr.forEach((obj) => (data[obj._id] = obj));

const getSingUser = (id) => data[id];

const deleteSingUser = (id) => delete data[id];

const resetUsers = () => (data = {});

let dataBlock = {};
let queryString = null;
const setSingleUserBlock = (page, arr, text) => {
  if (text == queryString) dataBlock[page] = arr;
  else {
    queryString = text;
    dataBlock = {};
    dataBlock[page] = arr;
  }
};
const getSingleUserBlock = (page) => dataBlock[page];

export {
  setSingUser,
  setMultiUser,
  getSingUser,
  deleteSingUser,
  resetUsers,
  setSingleUserBlock,
  getSingleUserBlock,
};

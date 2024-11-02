let data = {};

const setSingLap = (obj) => (data[obj._id] = obj);

const setMultiLap = (arr) => arr.forEach((obj) => (data[obj._id] = obj));

const getSingLap = (id) => data[id];

const deleteSingLap = (id) => delete data[id];

const resetLaptops = () => (data = {});

let dataBlock = {};
let queryString = null;
const setSingLapBlock = (page, arr, text) => {
  if (text == queryString) dataBlock[page] = arr;
  else {
    queryString = text;
    dataBlock = {};
  }
};
const getSingleLapBlock = (page) => dataBlock[page];

export {
  setSingLap,
  setMultiLap,
  getSingLap,
  deleteSingLap,
  resetLaptops,
  setSingLapBlock,
  getSingleLapBlock,
};

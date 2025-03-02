let dataBlock = {};
let queryString = null;
const setSingleMessageBlock = (page, arr, text) => {
  if (text == queryString)
    dataBlock[page] =
      arr; //if query does not change for example if query => page+state = 0unread, if previous page has same query
  else {
    queryString = text;
    dataBlock = {};
    dataBlock[page] = arr;
  }
};
const getSingleMessageBlock = (page) => dataBlock[page];

export { getSingleMessageBlock, setSingleMessageBlock };

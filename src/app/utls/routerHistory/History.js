import React from "react";
let history = [];
const setHistory = (link) => {
  history.push(link);
};
const getHistory = () => history;
const getClearHistory = () => {
  let sorterObj = {};
  for (let i = 0; i < history.length; i++) {
    sorterObj[history[i]?.path] = 1;
  }
  let newHistory = Object.keys(sorterObj).map((key) => key);
  return newHistory;
};
export { history, setHistory, getHistory, getClearHistory };

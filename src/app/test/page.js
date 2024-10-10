"use client";
import React from "react";
import Parser from "../utls/textparser/Parser";

const page = () => {
  const changedText = (e) => {
    let text = e.target.value;
    console.log(text.split("\n"));
  };
  return (
    <div>
      <Parser text={"hi my name is salman \n how are you I am fine "}></Parser>
      <textarea onKeyUp={changedText}>hello</textarea>
    </div>
  );
};

export default page;

import App from "@/app/utls/app/App";
import React from "react";
import More from "../More";
let apps = [...new Array(24).keys()];
const page = () => {
  return (
    <div className="w-full md:w-5/6 px-2 h-auto mx-auto py-4 ">
      <div className="px-3 sm:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 ">
        {apps.map((ele) => (
          <App key={ele}></App>
        ))}
      </div>
      <More></More>
    </div>
  );
};

export default page;

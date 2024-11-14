import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 w-full lg:w-5/6 relative py-4">
      <Sidebar></Sidebar>
      <Main></Main>
    </div>
  );
};

export default Home;
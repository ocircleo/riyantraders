import React from "react";
import Footer from "../utls/footer/Footer";
import Navbar from "../utls/navbar/Navbar";


const layout = ({ children }) => {

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Navbar></Navbar>
        {children}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default layout;

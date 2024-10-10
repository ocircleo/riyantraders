import React from "react";
import Loading from "@/app/utls/loading/Loading";

const loading = () => {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center">
      <Loading></Loading>
    </div>
  );
};

export default loading;

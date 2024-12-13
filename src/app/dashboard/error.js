"use client";
import Link from "next/link";
import React from "react";

const ErrorPage = ({ children }) => {
  return (
    <div className="bg-white text-gray-800 font-semibold flex items-center justify-center text-center flex-col w-full min-h-screen">
      <h1 className="text-4xl py-6">Error</h1>
      <p>
        The requested page had an error<br></br> Please try again later
      </p>
      <p className="text-sm text-red-500 py-4 capitalize">Reason: {children}</p>
      <Link className="text-blue-500 underline italic" href={"/"}>
        Go Back to Home
      </Link>
    
    </div>
  );
};

export default ErrorPage;

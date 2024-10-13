"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCachedUser } from "../utls/cookie/Cookie";

const Dashboard = () => {
  let [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      const temUser = await getCachedUser();
      setUser(temUser);
      console.log("from /dashboard: ",temUser);
    };
    getUser();
  }, []);

  return (
    <div className="bg-white w-full h-full font-semibold flex-col gap-3">
      <p className=""> Welcome to Dashboard</p>
      <p>name: {user?.name}</p>
      <p>name: {user?.role}</p>
    </div>
  );
};

export default Dashboard;

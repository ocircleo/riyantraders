"use client";
import React, { useEffect, useState } from "react";
import getUser from "../utls/db/UserDB";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async function () {
      let temUser = await getUser();
      if (temUser) setUser(temUser);
    })();
  }, []);

  return (
    <div className="bg-white w-full h-full font-semibold flex-col gap-3">
      <p className=""> Welcome to Dashboard</p>
      <p>Name: {user?.name}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
};

export default Dashboard;

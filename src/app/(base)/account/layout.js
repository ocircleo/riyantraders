"use client";
import React, { useEffect, useState } from "react";
import getUser from "../../utls/db/UserDB";

const Layout = ({ children }) => {
  const [navState, setNavState] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async function () {
      let temUser = await getUser();
      if (temUser) setUser(temUser);
    })();
  }, []);
  const toggleNav = () => setNavState(!navState);
  const baseLinks = [
    { path: "/account", text: "Account" },
    { path: "/account/orders", text: "Orders" },
    { path: "/account/", text: "Orders" },
    { path: "/account/editProfile", text: "Edit Profile" },
    { path: "/account/changePassword", text: "change password" },
  ];
  if (!user)
    return (
      <div className="grid place-content-center h-screen w-full">
        <h2 className="text-xl font-semibold">Loading profile page.....</h2>
      </div>
    );
  return (
    <div
      className={` `}
    >
      {children}
    </div>
  );
};

export default Layout;

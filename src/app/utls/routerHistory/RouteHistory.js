'use client'
import { useEffect } from "react";
import {  usePathname, useSearchParams } from "next/navigation";
import { setHistory } from "./History";

const RouteHistory = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams.toString()}`;
    const historyObj = {
      path: pathname,
      url: url,
    };
    setHistory(historyObj);
  }, [pathname, searchParams]);

  return null;
};

export default RouteHistory;

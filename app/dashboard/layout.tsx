"use client";

import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "../(context)/UpdateCreditUsageContext";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalUsage, setTotalUsage] = useState<Number>(0);
  const [updateCreditUsage, setUpdateCreditUsage] = useState<any>();

  return (
    <UpdateCreditUsageContext.Provider value={{updateCreditUsage, setUpdateCreditUsage}}>
      <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
        <div className="bg-slate-50 h-screen">
          <div className="md:w-64 hidden md:block fixed">
            <SideNav />
          </div>
          <div className="md:ml-64">
            <Header />
            {children}
          </div>
        </div>
      </TotalUsageContext.Provider>
    </UpdateCreditUsageContext.Provider>
  );
}

export default layout;

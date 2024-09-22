"use client";

import React from "react";
import Image from "next/image";
import { Home, FileClock, Settings, WalletCards } from "lucide-react";
import { usePathname } from "next/navigation";
import UsageTrack from "./UsageTrack";

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();

  return (
    <div className="h-screen relative p-5 shadow-sm border bg-white">
      <div className="flex justify-start items-center gap-4 mx-4">
        <Image src={"/logo.svg"} alt="logo" height={40} width={40} />
        <h2 className="text-primary font-semibold text-xl">aiContentGen</h2>
      </div>
      <div>
        <ul className="flex flex-col gap-2 my-4">
          {MenuList.map((item) => (
            <li
              key={item.name}
              className={`flex gap-2 px-4 py-2 hover:bg-primary hover:text-white rounded-lg items-center cursor-pointer ${
                path === item.path && "bg-slate-100"
              }`}
            >
              <span>
                <item.icon />
              </span>
              <span className="text-lg font-medium">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;

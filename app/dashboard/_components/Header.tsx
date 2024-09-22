import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="p-4 shadow-sm border-b flex justify-between items-center bg-white">
      <div className="flex gap-2 p-2 items-center border rounded-md max-w-lg">
        <Search className="text-gray-400" />
        <input type="text" placeholder="Seach for" className="outline-none" />
      </div>
      <div className="flex gap-2 items-center">
        <h2 className="bg-primary py-2 px-4 text-white hover:opacity-90 rounded-full cursor-pointer">
          🔥 Join Membership at just $9.99
        </h2>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;

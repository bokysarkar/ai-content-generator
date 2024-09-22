import { Search } from "lucide-react";
import React from "react";

function SearchSection({onSearchInput}:any) {
  return (
    <div className="p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-800 flex justify-center m-8 rounded-lg shadow-md">
      <div className="flex flex-col gap-2 md:items-center w-full">
        <h2 className="text-white font-bold text-2xl">Browse all templates</h2>
        <p className="text-white">What would you like to create today?</p>
        <div className="flex gap-2 p-2 border rounded-sm bg-white mt-4 w-full md:w-[40%]">
          <Search className="text-gray-400" />
          <input
            type="text"
            placeholder="search"
            className="outline-none bg-transparent"
            onChange={(event) => onSearchInput(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;

import React, { useContext } from "react";
import { PlantsContext } from "../contexts/PlantsContext";
import { GoSearch } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(PlantsContext);

  return showSearch ? (
    <div className="flex items-center w-[60%] px-4 text-center">
      <div className="relative flex items-center justify-center w-full max-w-md px-4 mx-auto border border-green-600 rounded-full">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 w-full px-3 py-2 text-sm text-green-800 transition-transform duration-300 ease-in-out outline-none dark:text-green-100 bg-inherit"
          type="text"
          placeholder="Search"
        />
        <GoSearch  className="absolute text-green-600 right-4"/>
      </div>
      <RxCross1
        size={26}
        onClick={() => setShowSearch(false)}
        className="inline w-3 ml-4 text-red-600 cursor-pointer"
      />
    </div>
  ) : null;
};

export default SearchBar;

"use client";
import { useState } from "react";
import Image from "next/image";
import search from "../public/header_assets/search.svg";

const SearchBar = () => {
  const [input, setInput] = useState("");
  return (
    <div className="flex gap-3 px-6 searchBar bg-[#F5F5F5] w-[450px] h-10 rounded-md">
      <Image src={search} width={15} alt="search_icon" />
      <input
        className="bg-transparent w-full outline-0 text-sm "
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search by employee or application"
      />
    </div>
  );
};

export default SearchBar;

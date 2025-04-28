import React, { useState } from "react";
import { useNavigate } from "react-router";

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Button clicked!");
    console.log(query);
    onSearch(query); // Pass the query up to the parent component
    navigate("/search");
  };

  return (
    <div className="flex flex-grow border-2 border-gray-500 rounded-full focus-within:border-gray-400">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        autoCapitalize="none"
        autoSave="off"
        className="pl-4 bg-base-100 border-none focus:outline-none focus:ring-0 focus:border-transparent h-[30px] rounded-bl-full rounded-tl-full self-center text-base-content flex-grow"
        placeholder="Find your next great tech deal!"
      />
      <button
        onClick={handleSearch}
        className="bg-gray-600 rounded-br-full rounded-tr-full text-white  hover:border-gray-600 hover:border-l-gray-500 hover:bg-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M7 19a8 8 9 100-18 9 9 0 000 18zm8-1l10 10"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Searchbar;

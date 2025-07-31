import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    //console.log("Button clicked!");
    //console.log(query);
    onSearch(query); // Pass the query up to the parent component
    navigate("/search");
  };

  // Mobile: focus input when it opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Mobile: close input on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Button search bar below md */}
      <div ref={containerRef} className="relative">
        {/* Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-white bg-blue-500 p-1.5 hover:bg-gray-500 rounded-full md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </button>

        {/* Absolutely positioned search */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-55 bg-base-100 rounded-full shadow-md pl-3 z-50 flex">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-full bg-transparent focus:outline-none"
              placeholder="Find your next tech deal!"
            />
            <button
              onClick={handleSearch}
              className="text-white bg-blue-500 p-1.5 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Open search bar above md */}
      <div className="hidden md:flex items-center rounded-full bg-base-100 w-full max-w-md cursor-text">
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
          className="text-white bg-blue-500 p-1.5 hover:bg-blue-400 rounded-full cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Searchbar;

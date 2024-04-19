import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search for a country..."
      className="border p-2 rounded-lg placeholder:text-gray-500 placeholder:font-light flex-grow"
    />
  );
};

export { SearchBar };

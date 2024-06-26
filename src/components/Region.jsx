import React from "react";

const Region = ({
  dropdownText,
  setShowDropdown,
  showDropdown,
  handleRegionClick,
}) => {
  return (
    <div className="relative">
      <div
        className="border p-2 rounded-md cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {dropdownText}
      </div>
      {showDropdown && (
        <div className="absolute z-10 mt-2 w-32 bg-white border rounded-md shadow-lg">
          {["Africa", "Americas", "Asia", "Europe", "Oceania"].map((region) => (
            <div
              key={region}
              onClick={() => handleRegionClick(region)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {region}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Region };

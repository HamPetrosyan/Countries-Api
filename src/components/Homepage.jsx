import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../redux/countriesSlice";
import { SearchBar } from "./SearchBar";
import { CountryCard } from "./CountryCard";
import { Region } from "./Region";

const Homepage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.list);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    let results = countries;

    if (selectedRegion) {
      results = results.filter((country) => country.region === selectedRegion);
    }

    results = results.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredCountries(results);
  }, [searchTerm, countries, selectedRegion]);

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    setShowDropdown(false);
  };

  const dropdownText = selectedRegion || "First by Region";

  const sortedCountries = [...filteredCountries].sort((a, b) => {
    if (a.name.common < b.name.common) return -1;
    if (a.name.common > b.name.common) return 1;

    const regionsOrder = {
      Africa: 1,
      Americas: 2,
      Asia: 3,
      Europe: 4,
      Oceania: 5,
    };

    const regionA = regionsOrder[a.region] || 6;
    const regionB = regionsOrder[b.region] || 6;

    return regionA - regionB;
  });

  return (
    <div>
      <div className="flex justify-between mx-3">
        <div>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div>
          <Region
            dropdownText={dropdownText}
            setShowDropdown={setShowDropdown}
            showDropdown={showDropdown}
            handleRegionClick={handleRegionClick}
          />
        </div>
      </div>

      <article className="max-w-screen-xl mx-auto flex flex-wrap gap-16 justify-center items-center pt-12 pb-20">
        {sortedCountries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </article>
    </div>
  );
};

export { Homepage };

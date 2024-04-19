// CountryCard.js
import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <Link
      to={`/country/${country.name.common}`}
      key={country.flags.svg}
      className="w-64 h-80 shadow-custom-shadow rounded-lg"
    >
      <img
        src={country.flags.svg}
        alt={country.flags.alt}
        className="w-64 h-40 object-cover rounded-t-lg"
      />
      <div className="px-5 pt-4">
        <h1 className="font-bold mb-4 text-base">{country.name.common}</h1>
        <p className="font-extralight text-sm">
          <b className="font-bold">Population:</b> {country.population}
        </p>
        <p className="font-extralight text-sm">
          <b className="font-bold">Region:</b> {country.region}
        </p>
        <p className="font-extralight text-sm">
          <b className="font-bold">Capital:</b>{" "}
          {country.capital.map((c) => `${c} `)}
        </p>
      </div>
    </Link>
  );
};

export { CountryCard };

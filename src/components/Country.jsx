import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { getCountry } from "../redux/countrySlice";

const Country = () => {
  const dispatch = useDispatch();
  const countryInfo = useSelector((state) => state.country.data);
  const navigate = useNavigate();
  const { name } = useParams();

  useEffect(() => {
    dispatch(getCountry(name));
  }, [dispatch, name]);

  const getCurrencyInfo = () => {
    if (countryInfo?.currencies) {
      const currencyCode = Object.keys(countryInfo.currencies)[0];
      const currencyData = countryInfo.currencies[currencyCode];
      return {
        name: currencyData?.name,
        symbol: currencyData?.symbol,
      };
    }
    return {
      name: "",
      symbol: "",
    };
  };

  const { name: currencyName, symbol: currencySymbol } = getCurrencyInfo();

  return (
    <div className="max-w-screen-xl mx-auto px-3">
      <button
        onClick={() => navigate(-1)}
        className="px-3 py-2 mb-12 bg-white rounded-lg"
      >
        ← Back
      </button>
      <section>
        <img
          className="w-1/2 rounded-lg"
          src={countryInfo?.flags?.svg}
          alt={countryInfo?.flags?.svg}
        />
        <div>
          <h1>{countryInfo?.name?.common}</h1>
          <div>
            <p className="font-extralight">
              <b className="font-bold">Native Name:</b>{" "}
              {countryInfo?.name?.nativeName?.hye?.common}
            </p>
            <p className="font-extralight">
              <b className="font-bold">Population:</b> {countryInfo?.population}
            </p>
            <p className="font-extralight">
              <b className="font-bold">Region:</b> {countryInfo?.region}
            </p>
            <p className="font-extralight">
              <b className="font-bold">Sub region:</b> {countryInfo?.subregion}
            </p>
            <p className="font-extralight">
              <b className="font-bold">Capital:</b> {countryInfo?.capital}
            </p>
          </div>
          <div>
            <p className="font-extralight">
              <b className="font-bold">Top Level Domain:</b> {countryInfo?.tld}
            </p>
            <p className="font-extralight">
              <b className="font-bold">Currency:</b> {currencyName} (
              {currencySymbol})
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Country };

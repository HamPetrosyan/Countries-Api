import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./countriesSlice";
import countryReducer from "./countrySlice";

export default configureStore({
  reducer: {
    countries: countriesReducer,
    country: countryReducer,
  },
});

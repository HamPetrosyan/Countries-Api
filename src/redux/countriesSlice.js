import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountries = createAsyncThunk(
  "countries/getCountries",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const countries = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region"
      );
      dispatch(setCountries(countries.data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    list: [],
  },
  reducers: {
    setCountries(state, action) {
      state.list = action.payload;
    },
  },
});

const { setCountries } = countriesSlice.actions;
export default countriesSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountry = createAsyncThunk(
  "country/getCountry",
  async (name, { rejectWithValue, dispatch }) => {
    try {
      const country = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`
      );

      dispatch(setCountry(country.data[0]));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const countrySlice = createSlice({
  name: "country",
  initialState: {
    data: [],
  },
  reducers: {
    setCountry(state, action) {
      state.data = action.payload;
    },
  },
});

const { setCountry } = countrySlice.actions;
export default countrySlice.reducer;

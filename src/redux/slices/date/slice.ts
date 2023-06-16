import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { date } from "./types";

const setInitalState = () => {
  const date = new Date();

  const year = date.getFullYear();
  const months = date.getMonth();
  const day = date.getDate();

  return {
    months,
    year,
    day,
    activeNumber: day,
  };
};

const initialState: date = setInitalState();

export const dateSlice = createSlice({
  name: "Date",
  initialState,
  reducers: {
    incrementMonths: (state) => {
      if (state.months < 11) {
        state.months++;
        return;
      }
      state.year++;
      state.months = 0;
    },
    decrementMonths: (state) => {
      if (state.months > 0) {
        state.months--;
        return;
      }

      state.year--;
      state.months = 11;
    },
    setActiveNumber: (state, action: PayloadAction<number>) => {
      state.activeNumber = action.payload;
    },
    setToday: (state) => {
      const initalState = setInitalState();
      Object.keys(initalState).map((key) => {
        state[key as keyof date] = initalState[key as keyof date];
      });
    },
  },
});

export const { incrementMonths, decrementMonths, setActiveNumber, setToday } =
  dateSlice.actions;

export default dateSlice.reducer;

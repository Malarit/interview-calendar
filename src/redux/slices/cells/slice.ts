import isEqual from "lodash.isequal";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { cellsState, event } from "./types";

const initialState: cellsState = (() => {
  const rowsCount = 24;
  const columnCount = 7;
  const cells = rowsCount * columnCount;

  return {
    rowsCount,
    columnCount,
    cells,
    events: [],
    deleteActive: undefined,
  };
})();

export const cellsSlice = createSlice({
  name: "Cells",
  initialState,
  reducers: {
    setEvent: (state, action: PayloadAction<event>) => {
      const { year, month, day, hour, minutes } = action.payload;
      const event = state.events.some(
        (item) =>
          item.year === year &&
          item.month === month &&
          item.day === day &&
          item.hour === hour &&
          item.minutes === minutes
      );
      if (!event) {
        state.events.push(action.payload);
      }
    },
    deleteEvent: (state, action: PayloadAction<event>) => {
      state.events = state.events.filter(
        (item) => !isEqual(item, action.payload)
      );
      state.deleteActive = undefined;
    },
    setDeleteActive: (state, action: PayloadAction<event | undefined>) => {
      state.deleteActive = action.payload;
    },
  },
});

export const { setEvent, deleteEvent, setDeleteActive } = cellsSlice.actions;

export default cellsSlice.reducer;

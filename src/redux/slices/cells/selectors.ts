import { RootState } from "../..";

export const selectCells = (state: RootState) => {
  const { cells, columnCount } = state.cellsReducer;
  return { cells, columnCount };
};

export const selectEvents =
  (events: { year: number; months: number; day: number }) =>
  (state: RootState) => {
    const { year, months, day } = events;
    return state.cellsReducer.events.filter(
      (item) => item.year === year && item.month === months && item.day === day
    );
  };

export const selectDeleteActive = (state: RootState) => {
  return state.cellsReducer.deleteActive;
};

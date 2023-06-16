export type event = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minutes: number;
};

export type cellsState = {
  rowsCount: number;
  columnCount: number;
  cells: number;
  events: event[];
  deleteActive: event | undefined;
};
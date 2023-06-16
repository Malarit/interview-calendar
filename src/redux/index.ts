import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import dateReducer from "./slices/date/slice";
import cellsReducer from "./slices/cells/slice";

export const store = configureStore({
  reducer: {
    dateReducer,
    cellsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

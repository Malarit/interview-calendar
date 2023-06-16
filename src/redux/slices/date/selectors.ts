import { RootState } from "../..";

export const selectDate = (state: RootState) => {
  return state.dateReducer;
};

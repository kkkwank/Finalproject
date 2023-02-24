import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
type StateType = {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
};
const initialValue: StateType = {
  "1": 0,
  "2": 0,
  "3": 0,
  "4": 0,
  "5": 0,
};
const ResultSlice = createSlice({
  name: "stateStore",
  initialState: initialValue,
  reducers: {
    updateResult: (
      state: StateType,
      action: PayloadAction<string>
    ) => {
      console.log(action.payload)
      switch (action.payload) {
        case "1":
          state[1]++;
          break;
        case "2":
          state[2]++;
          break;
        case "3":
          state[3]++;
          break;
        case "4":
          state[4]++;
          break;
        default:
          state[5]++;
          break;
      }
    },
  },
});
export const { updateResult } = ResultSlice.actions;
export const ResultSelector = (store: RootState) => store.ResultReducer;
export default ResultSlice.reducer;

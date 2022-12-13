import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
type StateType = {
  state: number;
};
const initialValue: StateType = {
  state: 0,
};
const StateSlice = createSlice({
  name: "stateStore",
  initialState: initialValue,
  reducers: {
    nextState:(state:StateType,action:PayloadAction<void>)=>{
      state.state = state.state + 1
    }
  },
});
export const {nextState} = StateSlice.actions;
export const StateSelector = (store: RootState) => store.StateReducer;
export default StateSlice.reducer;

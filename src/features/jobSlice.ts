import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Job {}

interface InitialState {
  jobs: Job[];
}

const initialState: InitialState = {
  jobs: [],
};

const jobReducer = createSlice({
  name: "JobSlice",
  initialState,
  reducers: {
    addJob: (state: { jobs: Job[] }, action: PayloadAction<Job>) => {
      state.jobs.push(action.payload);
    },
  },
});

export const { addJob } = jobReducer.actions;

export default jobReducer.reducer;

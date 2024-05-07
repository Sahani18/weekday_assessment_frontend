import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  jobs: [],
  filterJob: [],
};

const jobReducer = createSlice({
  name: "JobSlice",
  initialState,
  reducers: {
    addJob: (state, action) => {
      action?.payload.forEach((item: Object) => state?.jobs.push(item));
    },
    filteredJob: (state, action) => {
      action?.payload.forEach((item: Object) => state?.filterJob.push(item));
    },
  },
});

export const { addJob, filteredJob } = jobReducer.actions;

export default jobReducer.reducer;

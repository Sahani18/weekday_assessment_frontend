import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  jobs: [],
};

const jobReducer = createSlice({
  name: "JobSlice",
  initialState,
  reducers: {
    addJob: (state, action) => {
      action?.payload.forEach((item: Object) => state?.jobs.push(item));
    },
  },
});

export const { addJob } = jobReducer.actions;

export default jobReducer.reducer;

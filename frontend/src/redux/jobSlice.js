import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        allJobs: [],
        allAdminJobs: [],
        singleJob: null,
        loading: false,
        searchJobByText: '',
    },
    reducers: {
        setAllJobs: (state, action) => {
            state.allJobs = action.payload;
        },
        setSingleJob: ((state, action) => {
            state.singleJob = action.payload;
        }),
        setAdminJobs: (state, action) => {
            state.setAdminJobs = action.payload;
        },
        setSearchJobByText: (state, action) => {
            state.searchJobByText = action.payload
        }
    }
});

export const { setAllJobs, setSingleJob, setAdminJobs, setSearchJobByText } = jobSlice.actions;
export default jobSlice.reducer;
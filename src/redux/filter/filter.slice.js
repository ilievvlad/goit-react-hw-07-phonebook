import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filter: "",
    },
    reducers: {
        filterAction(state, { payload }) {
            state.filter = payload;
        },
    }
})

export const { filterAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
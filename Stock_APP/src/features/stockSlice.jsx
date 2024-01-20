import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	firms: [],
	products: [],
	purchases: [],
	brands: [],
	sales: [],
	categories: [],
	loading: false,
	error: false,
};

const stockSlice = createSlice({
	name: "stock",
	initialState,
	reducers: {
		fetchStart: (state) => {
			state.loading = true;
		},
		getStocksSuccess: (state, { payload }) => {
			state[payload.url] = payload.apiData;
			state.loading = false;
		},
		fetchFail: (state) => {
			state.loading = false;
			state.error = true;
		},
	},
});

export const { fetchStart, fetchFail, getStocksSuccess } = stockSlice.actions;

export default stockSlice.reducer;

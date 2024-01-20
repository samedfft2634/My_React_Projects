import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	user: {
		username: "",
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	},
	loading: false,
	error: false,
	token: "",
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		fetchStart: (state) => {
			state.loading = true;
		},
		loginSuccess: (state, { payload }) => {
			state.loading = false;
			state.user.username = payload.user.username;
			state.token = payload.token;
		},
		logoutSuccess: (state) => {
			state.loading = false;
			state.user.username = "";
			state.token = "";
		},
		fetchFail: (state) => {
			state.loading = false;
			state.error = true;
		},
		registerSuccess: (state, { payload }) => {
			state.loading = false;
			state.user.username = payload.data.username;
			state.firstName = payload.data.firstName;
			state.lastName = payload.data.lastName;
			state.email = payload.data.email;
			state.password = payload.data.password;
			state.token = payload.token;
		},
	},
});

export const {
	fetchStart,
	fetchFail,
	loginSuccess,
	registerSuccess,
	logoutSuccess,
} = authSlice.actions;
export default authSlice.reducer;

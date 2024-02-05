import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	user: {
		username: "",
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		image: "",
		bio: "",
		_id: "",
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
		fetchFail: (state) => {
			state.loading = false;
			state.error = true;
		},
		loginSuccess: (state, { payload }) => {
			state.loading = false;
			state.user.email = payload.user.email;
			state.user.image = payload.user.image;
			state.token = payload.token;
			state.user._id = payload.user._id;
		},
		logoutSuccess: (state) => {
			state.loading = false;
			state.user.email = "";
			state.user.username = "";
			state.user.firstName = "";
			state.user.lastName = "";
			state.user.image = "";
			state.user._id = "";
			state.token = "";
		},
		registerSuccess: (state, { payload }) => {
			state.loading = false;
			const { firstName, lastName, email, password, image, bio } =
				payload.data;
			state.user = {
				username: payload.data.username,
				firstName,
				lastName,
				email,
				password,
				image,
				bio,
				_id: payload.data._id,
			};
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

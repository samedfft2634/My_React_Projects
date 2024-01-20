import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import {
	fetchFail,
	fetchStart,
	loginSuccess,
	logoutSuccess,
	registerSuccess,
} from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "./useAxios";


const useAuthCall = () => {
	const {axiosWithToken, axiosPublic} = useAxios()
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// const {token} = useSelector(state=>state.auth)
	const login = async (userInfo) => {
		dispatch(fetchStart());
		try {
			// const { data } = await axios.post(
			// 	`${process.env.REACT_APP_BASE_URL}/auth/login`,
			// 	userInfo
			// );
			const {data} = await axiosPublic.post("/auth/login",userInfo)
			dispatch(loginSuccess(data));
			toastSuccessNotify("Login successful.");
			navigate("/stock");
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify("Login failed!");
			console.log(error);
		}
	};
	const register = async (userInformations) => {
		dispatch(fetchStart());
		try {
			// const { data } = await axios.post(
			// 	`${process.env.REACT_APP_BASE_URL}/users/`,
			// 	userInformations
			// );
			const {data} = await axiosPublic.post("/users/",userInformations)

			dispatch(registerSuccess(data));
			toastSuccessNotify("Registered success!");
			navigate("/");
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify("Registration failed!");
			console.log(error);
		}
	};
	const logout = async () => {
		dispatch(fetchStart());
		try {
			// await axios.get(
			// 	`${process.env.REACT_APP_BASE_URL}/auth/logout`,
			// 	{
			// 		headers: { Authorization: `Token ${token}` },
			// 	}
			// ); used to without custom axios hook
			await axiosWithToken("/auth/logout")
			dispatch(logoutSuccess());
			toastSuccessNotify("Logged out successfully!");
			navigate("/"); //? here is additional
		} catch (error) {
			console.log(error);
			dispatch(fetchFail());
			toastErrorNotify("Failed operation!");
		}
	};
	return { login, register, logout };
};

export default useAuthCall;

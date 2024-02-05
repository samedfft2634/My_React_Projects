
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	fetchFail,
	fetchStart,
	loginSuccess,
	logoutSuccess,
	registerSuccess,
} from "../features/authSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "../hooks/useAxios";

const useAuthCalls = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {axiosWithToken, axiosPublic} = useAxios()

  const register = async (userInformations) => {
		dispatch(fetchStart());
		try {
			const {data} = await axiosPublic.post("/users/",userInformations)
			dispatch(registerSuccess(data));
			toastSuccessNotify("Registered success!");
			navigate("/auth/");
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify("Registration failed!");
			console.log(error);
		}
	};
	const login = async (userInfo) =>{
		dispatch(fetchStart())
		try {
			const {data} = await axiosWithToken.post("/auth/login/",userInfo)
			dispatch(loginSuccess(data))
			toastSuccessNotify("Login success!");
			navigate("/")
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify("Login  failed!");
			console.log(error);
		} 
	}
	const logout = async () =>{
		dispatch(fetchStart())
		try {
			await axiosPublic("/auth/logout/")
			dispatch(logoutSuccess())
			toastSuccessNotify("Logout success!");
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify("Logout  failed!");
			console.log(error);
		}
	}

  return {register,login,logout}
}

export default useAuthCalls
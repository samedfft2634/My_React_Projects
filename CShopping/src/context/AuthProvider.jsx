import { createContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

export const AuthContext = createContext(); //? bu kisim onemli bu contexti consume etmek icin

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(
		JSON.parse(sessionStorage.getItem("user")) || null
	);
	const navigate = useNavigate();

	//  backend simulasyonu= await axios.post("url",info)
	const login = (info) => {
		setUser(info);

		navigate("/dashboard"); //? kullanici giris yapti onu dashboarda gonder
	};
	const logout = () => {
		setUser(null);
	};
	useEffect(() => {
		sessionStorage.setItem("user", JSON.stringify(user));
	}, [user]); //! componenDidUpdate asamasi.

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

// children parametresi authprovidera gecilir cunku o sarmalayici component olacak, ayni sekilde childrenlarda provider yani ureticinin altinda jsx gecilir.

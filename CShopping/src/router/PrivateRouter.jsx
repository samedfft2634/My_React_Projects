import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthProvider";
const PrivateRouter = () => {
	const { user } = useContext(AuthContext);
	return user ? (
		<>
			<Navbar />
			<Outlet />
		</>
	) : (
		<Navigate to="/" />
	); //? True ise outlet cagirlir aksi takdirde ana sayfaya yani logine gidilir.
};

export default PrivateRouter;

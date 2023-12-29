import React, { useContext, useState } from "react";
import cart from "../assets/cart.png";
import { closeNavbar, openNavbar, logoutIcon } from "../helper/icons";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
const navigation = [
	{
		title: "Home",
		path: "/dashboard",
	},
	{
		title: "Products",
		path: "/dashboard/products",
	},
	{
		title: "About",
		path: "/dashboard/about",
	},
];

const Navbar = () => {
	const [show, setShow] = useState(true);
	const { logout } = useContext(AuthContext);
	const location = useLocation();
	// console.log(location);
	return (
		<nav className="bg-navbarColor md:text-sm">
			<div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
				<div className="flex items-center justify-between py-5 md:block">
					<a
						href="#"
						target="true"
						rel="noopener noreferrer"
						className="flex items-center"
					>
						<img
							src={cart}
							width={50}
							height={50}
							alt="shoppingCart"
						/>
						<span className="text-slate-300 hover:text-slate-400 font-medium ms-2 text-lg">
							CStore
						</span>
					</a>
					<div className="md:hidden">
						<button
							onClick={() => setShow(!show)}
							className="menu-btn text-gray-100 hover:text-orange-300"
						>
							{show ? closeNavbar : openNavbar}
						</button>
					</div>
				</div>
				<div
					className={`${
						show ? "flex flex-col pb-2 " : "hidden"
					} flex-1 items-center md:flex md:flex-row`}
				>
					<ul className="space-y-6 md:flex md:space-x-6 md:space-y-0">
						{navigation.map((item) => (
							<li
								key={item.title}
								className="text-gray-300 font-medium flex justify-center"
							>
								<NavLink
									to={item.path}
									className={`block hover:bg-labelColor rounded-full py-2 px-4 hover:text-white ${
										location.pathname === item.path
											? "underline scale-150 text-orange-500"
											: ""
									}`}
								>
									{item.title}
								</NavLink>
							</li>
						))}
					</ul>
					<div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
						<NavLink
							to="/"
							onClick={logout}
							className="flex items-center justify-center gap-x-1 py-2 px-4 font-medium text-slate-300 hover:bg-labelColor hover:text-white active:bg-gray-900 rounded-full md:inline-flex"
						>
							Logout {logoutIcon}
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

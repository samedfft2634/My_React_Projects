import { useState } from "react";
import "./Navbar.scss";


const Navbar = ({ category }) => {
	const [menuOpen, setMenuOpen] = useState(false)
	const handleClick = () => {
		setMenuOpen(!menuOpen);
	}

	return (
		<nav>
			<div className="logo">
				<img src="./img/logo-2.png" alt="logoSun" />
				<i className={`fa-solid ${menuOpen  ? "fa-times" : "fa-bars"}`} id="bars" onClick={handleClick} />
			</div>
			
			<ul className={menuOpen ? "open" : ""}>
				{category.map((item, index) => (
					<div key={index}>
					<li className="desktopMenu">
						<a href="#">{item}</a>
					</li>
					<li >
						<a href="#">{item}</a>
					</li>
					</div>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;

import React, { useEffect, useState } from "react";
import mailSvg from "./assets/mail.svg";
import womanSvg from "./assets/woman.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import axios from "axios";
import UserList from "./components/UserList";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// import manAgeSvg from "./assets/growing-up-man.svg";
// import manSvg from "./assets/man.svg";

// const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
	const [current, setCurrent] = useState(1);
	const [isLoading, setIsLoading] = useState(true);
	const [isFirstLoad, setIsFirstLoad] = useState(true);
	const [title, setTitle] = useState("");
	const [value, setValue] = useState("");
	const [userLists, setUserLists] = useState([]);
	const [user, setUser] = useState({
		name: "",
		email: "",
		picture: "",
		dob: "",
		location: "",
		phone: "",
		password: "",
	});

	/* ======================== axios ======================= */
	const getUser = async () => {
		if (isFirstLoad) setIsLoading(true);
		try {
			const url = "https://randomuser.me/api/";
			const res = await axios.get(url);
			const userData = res.data.results[0];
			setUser(userData);
			if (isFirstLoad) {
				setTimeout(() => {
					setIsLoading(false);
					setIsFirstLoad(false);
				}, 1000);
			}
			if (userData.name && userData.name.first && userData.name.last) {
				setTitle("name");
				setValue(`${userData.name.first} ${userData.name.last}`);
			}
		} catch (error) {
			console.log(error);
			if (isFirstLoad) setIsLoading(false);
		}
	};

	const handleHover = (dataLabel) => {
		setTitle(dataLabel);
		switch (dataLabel) {
			case "name":
				if (first && last) {
					setValue(`${first} ${last}`);
				}
				break;
			case "email":
				setValue(email);
				break;
			case "age":
				setValue(age);
				break;
			case "street":
				setValue(state);
				break;
			case "phone":
				setValue(phone);
				break;
			case "password":
				setValue(password);
				break;
			default:
				break;
		}
	};
	const addUser = (userId) => {
		const valid = userLists.some((item) => item.id.value === userId);
		if (!valid) {
			setUserLists([...userLists, user]);
			localStorage.setItem(
				"userData",
				JSON.stringify([...userLists, user])
			);
		} else {
			Swal.fire({
				position: "center",
				icon: "error",
				title: "This user already exist on list!",
				showConfirmButton: false,
				timer: 1500,
			});
		}
	};
	const deleteUser = (userId) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				const filteredUser = userLists.filter(
					(item) => item.id.value !== userId
				);
				setUserLists(filteredUser);
				localStorage.setItem("userData", JSON.stringify(filteredUser));
				const maxPage = Math.ceil(filteredUser.length / itemPerPage);
				if (current > maxPage && maxPage) {
					setCurrent(maxPage);
				}
				Swal.fire({
					title: "Deleted!",
					text: "Your file has been deleted.",
					icon: "success",
				});
			}
		});
	};
	function LoadingSpinner() {
		return <div className="loading-spinner"></div>;
	}

	/// ===================== pagination ===================== */
	const itemPerPage = 5;
	const lastItemIndex = current * itemPerPage;
	const firstItemIndex = lastItemIndex - itemPerPage;
	const filteredData = userLists.slice(firstItemIndex, lastItemIndex);
	const handlePreviousClick = () => {
		setCurrent((prev) => (prev > 1 ? prev - 1 : prev));
	};
	const handleNextClick = () => {
		const maxPage = Math.ceil(userLists.length / itemPerPage);
		setCurrent((prev) => (prev < maxPage ? prev + 1 : prev));
	};
	/// ========================== / ========================= */

	const {
		name: { first, last } = {},
		picture: { large } = {},
		email,
		dob: { age } = {},
		location: { state } = {},
		phone,
		login: { password } = {},
	} = user;
	/* ====================== useEffect ===================== */
	useEffect(() => {
		getUser();
	}, []);
	useEffect(() => {
		const getData = localStorage.getItem("userData");
		if (getData) {
			setUserLists(JSON.parse(getData));
		}
	}, []);
	useEffect(() => {}, [current, userLists]);

	return (
		<main>
			{isLoading && (
				<div className="loading">
					<LoadingSpinner />
					<div>Loading...</div>
				</div>
			)}
			<div className="block bcg-orange"></div>
			<div className="block">
				<div className="container">
					<img src={large} alt="random user" className="user-img" />
					<p className="user-title">My {title} is</p>
					<p className="user-value">{value}</p>
					<div className="values-list">
						<button className="icon" data-label="name">
							<img
								src={womanSvg}
								alt="user"
								id="iconImg"
								onMouseOver={(e) =>
									handleHover(
										e.target.parentNode.getAttribute(
											"data-label"
										)
									)
								}
							/>
						</button>
						<button className="icon" data-label="email">
							<img
								src={mailSvg}
								alt="mail"
								id="iconImg"
								onMouseOver={(e) =>
									handleHover(
										e.target.parentNode.getAttribute(
											"data-label"
										)
									)
								}
							/>
						</button>
						<button className="icon" data-label="age">
							<img
								src={womanAgeSvg}
								alt="age"
								id="iconImg"
								onMouseOver={(e) =>
									handleHover(
										e.target.parentNode.getAttribute(
											"data-label"
										)
									)
								}
							/>
						</button>
						<button className="icon" data-label="street">
							<img
								src={mapSvg}
								alt="map"
								id="iconImg"
								onMouseOver={(e) =>
									handleHover(
										e.target.parentNode.getAttribute(
											"data-label"
										)
									)
								}
							/>
						</button>
						<button className="icon" data-label="phone">
							<img
								src={phoneSvg}
								alt="phone"
								id="iconImg"
								onMouseOver={(e) =>
									handleHover(
										e.target.parentNode.getAttribute(
											"data-label"
										)
									)
								}
							/>
						</button>
						<button className="icon" data-label="password">
							<img
								src={padlockSvg}
								alt="lock"
								id="iconImg"
								onMouseOver={(e) =>
									handleHover(
										e.target.parentNode.getAttribute(
											"data-label"
										)
									)
								}
							/>
						</button>
					</div>
					<div className="btn-group">
						<button className="btn" type="button" onClick={getUser}>
							new user
						</button>
						<button
							className="btn"
							type="button"
							onClick={() => addUser(user.id.value)}
						>
							add user
						</button>
					</div>
					{userLists.length > 0 && (
						<div className="table">
							<table>
								<thead>
									<tr className="head-tr">
										<th className="th">Name</th>
										<th className="th">Email</th>
										<th className="th">Phone</th>
										<th className="th">Age</th>
										<th className="th">Delete</th>
									</tr>
								</thead>
								<tbody className="tbody">
									{filteredData.map((item, index) => (
										<UserList
											key={index}
											item={item}
											deleteUser={() =>
												deleteUser(item.id.value)
											}
										/>
									))}
								</tbody>
							</table>
							<div className="pages">
								<button
									className="pageBtn"
									type="button"
									onClick={handlePreviousClick}
								>
									<IoIosArrowBack />
								</button>
								<span
									style={{
										fontSize: "2rem",
										paddingTop: ".1rem",
										display: "flex",
									}}
								>
									{current}
								</span>

								<button
									className="pageBtn"
									type="button"
									onClick={handleNextClick}
								>
									<IoIosArrowForward />
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</main>
	);
}

export default App;

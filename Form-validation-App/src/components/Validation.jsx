import { PiEyeClosedLight } from "react-icons/pi";
import { LiaEye } from "react-icons/lia";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

const Validation = ({ data, setData }) => {
	const [showPass, setShowPass] = useState(false);
	const [listOfId, setListOfId] = useState({
		email: "",
		userName: "",
		firstName: "",
		lastName: "",
		img: "",
		password: "",
	});

	const { password, firstName, lastName, userName, email, img } = listOfId;
	//? onChange
	const handleChangeInput = (e) => {
		setListOfId({ ...listOfId, [e.target.name]: e.target.value });
	};

	//? onSubmit
	const handleSubmit = (e) => {
		e.preventDefault();
		if (Object.values(listOfId).some((value) => value === "")) {
			Swal.fire({
				position: "center",
				icon: "error",
				title: "There is an empty input field. Please fill required areas!",
				showConfirmButton: false,
				timer: 1000,
			});
			return;
		}
		if (!img.startsWith("https://")) {
			Swal.fire({
				position: "center",
				icon: "warning",
				title: "Image type must be URL!",
				showConfirmButton: false,
				timer: 1000,
			});
			return;
		}
		if (password.length < 8) {
			Swal.fire({
				position: "center",
				icon: "warning",
				title: "Password length must be minimum 8 character!",
				showConfirmButton: false,
				timer: 1000,
			});
			return;
		}
		if (
			userName.trim().length < 3 ||
			lastName.trim().length < 3 ||
			firstName.trim().length < 3
		) {
			Swal.fire({
				position: "center",
				icon: "warning",
				title: "User/First/Last name must be minimum 3 characters without empty characters. ",
				showConfirmButton: false,
				timer: 1000,
			});
			return;
		}
		if (!email.includes("@") || !email.endsWith(".com")) {
			Swal.fire({
				position: "center",
				icon: "warning",
				title: "Invalid email adress, use @ or '.com' for valid adress",
				showConfirmButton: false,
				timer: 1000,
			});
			return;
		}
		setData([...data, listOfId]);
		setListOfId({
			email: "",
			userName: "",
			firstName: "",
			lastName: "",
			img: "",
			password: "",
		});
	};

	return (
		<div>
			<Container style={{ maxWidth: "500px" }}>
				<Form onSubmit={handleSubmit}>
					<Form.Label htmlFor="email" className="mb-0">
						Email Adress
					</Form.Label>{" "}
					<span style={{ color: "red" }}>*</span>
					<InputGroup className="mb-1">
						<InputGroup.Text
							id="basic-addon1"
							style={{ backgroundColor: "red", color: "#fff" }}
						>
							@
						</InputGroup.Text>
						<Form.Control
							placeholder="Enter your email"
							aria-label="Username"
							aria-describedby="basic-addon1"
							type="email"
							required
							name="email"
							value={email}
							onChange={handleChangeInput}
						/>
					</InputGroup>
					<Form.Label htmlFor="userName" className="mb-0">
						Username
					</Form.Label>{" "}
					<span style={{ color: "red" }}>*</span>
					<InputGroup className="mb-1">
						<Form.Control
							placeholder="Enter your Username"
							aria-label="Username"
							aria-describedby="basic-addon1"
							type="text"
							name="userName"
							onChange={handleChangeInput}
							minLength={3}
							value={userName}
							required
						/>
					</InputGroup>
					<Form.Label htmlFor="firstName" className="mb-0">
						First Name
					</Form.Label>{" "}
					<span style={{ color: "red" }}>*</span>
					<InputGroup className="mb-1">
						<Form.Control
							placeholder="Enter your First Name"
							aria-label="Username"
							aria-describedby="basic-addon1"
							name="firstName"
							onChange={handleChangeInput}
							type="text"
							value={firstName}
							required
						/>
					</InputGroup>
					<Form.Label htmlFor="lastName" className="mb-0">
						Last Name
					</Form.Label>{" "}
					<span style={{ color: "red" }}>*</span>
					<InputGroup className="mb-1">
						<Form.Control
							placeholder="Enter your Last Name"
							aria-label="Username"
							aria-describedby="basic-addon1"
							name="lastName"
							value={lastName}
							onChange={handleChangeInput}
							type="text"
							required
						/>
					</InputGroup>
					<Form.Label htmlFor="basic-url" className="mb-0">
						Image{" "}
						<a
							href="https://lesson-of-reacts-imageapp.vercel.app"
							style={{ fontSize: ".7rem" }}
						>
							Get random image
						</a>
					</Form.Label>{" "}
					<span style={{ color: "red" }}>*</span>
					<InputGroup className="mb-1">
						<InputGroup.Text id="basic-addon3">
							https://
						</InputGroup.Text>
						<Form.Control
							id="basic-url"
							placeholder="Enter your Image URL"
							aria-describedby="basic-addon3"
							name="img"
							value={img}
							onChange={handleChangeInput}
							type="text"
							required
						/>
					</InputGroup>
					<Form.Label htmlFor="password" className="mb-0">
						Password{" "}
						<a
							href="https://password-generator-kappa-olive.vercel.app/"
							style={{ fontSize: ".7rem" }}
						>
							Do you need password?
						</a>
					</Form.Label>{" "}
					<span style={{ color: "red" }}>*</span>
					<InputGroup className="mb-1">
						<Form.Control
							placeholder="Enter a password"
							aria-label="Recipient's username"
							aria-describedby="basic-addon2"
							value={password}
							type={showPass ? "text" : "password"}
							name="password"
							onChange={handleChangeInput}
							minLength={8}
							required
						/>
						<Button
							variant="outline-secondary"
							id="button-addon2"
							onClick={() => setShowPass(!showPass)}
						>
							{showPass ? <LiaEye /> : <PiEyeClosedLight />}
						</Button>
					</InputGroup>
					<InputGroup className="mb-1 submitDiv">
						<Button
							variant="primary"
							className="mx-auto submitBtn"
							type="submit"
							onClick={handleSubmit}
						>
							Submit
						</Button>
					</InputGroup>
				</Form>
			</Container>
		</div>
	);
};
export default Validation;

import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/login.svg";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import useAuthCall from "../service/useAuthCalls";

const Login = () => {
	const { login } = useAuthCall();
	const loginSchema = object({
		email: string()
			.email("Email must be a valid email!")
			.required("Email is a required field!"),
		password: string()
			.required("Password is a required field!")
			.min(8, "Password must be at least 8 characters !")
			.max(16, "Password must be at most 16 characters !")
			.matches(/\d+/, "The password must contain at least one number!")
			.matches(
				/[a-z]/,
				"Password must contains at least one lowercase letter!"
			)
			.matches(
				/[A-Z]/,
				"Password must contains at least one uppercase letter!"
			)
			.matches(
				/[@$!%*?&]+/,
				"Password must contain at least one special character! (@ / $ / ! / % / * / ? / & )"
			),
	});
	return (
		<Container maxWidth="lg">
			<Grid
				container
				justifyContent="center"
				direction="row-reverse"
				sx={{ height: "95vh", p: 2 }}
			>
				<Grid item xs={12} mb={3}>
					<Typography variant="h3" color="primary" align="center">
						STOCK APP
					</Typography>
				</Grid>
				<Grid item xs={12} sm={10} md={6}>
					<Avatar
						sx={{
							backgroundColor: "secondary.light",
							m: "auto",
							width: 40,
							height: 40,
						}}
					>
						<LockIcon size="30" sx={{ color: "#A7F205" }} />
					</Avatar>
					<Typography
						variant="h4"
						align="center"
						mb={2}
						color="#3DD980"
					>
						Login
					</Typography>
					<Formik
						initialValues={{ email: "", password: "" }}
						validationSchema={loginSchema}
						onSubmit={(values, actions) => {
							login(values);
							actions.resetForm();
							actions.setSubmitting(false); //? isSubmitting
						}}
					>
						{({
							handleChange,
							values,
							touched,
							errors,
							handleBlur,
						}) => (
							<Form>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										gap: 2,
									}}
								>
									<TextField
										label="Email"
										name="email"
										id="email"
										type="email"
										variant="filled"
										color="success"
										value={values.email}
										onBlur={handleBlur}
										onChange={handleChange}
										error={
											touched.email &&
											Boolean(errors.email)
										}
										helperText={
											touched.email && errors.email
										}
									></TextField>
									<TextField
										label="Password"
										name="password"
										id="password"
										type="password"
										variant="filled"
										color="success"
										value={values.password}
										onBlur={handleBlur}
										onChange={handleChange}
										error={
											touched.password &&
											Boolean(errors.password)
										}
										helperText={
											touched.password && errors.password
										}
									/>
									<Button
										variant="contained"
										type="submit"
										color="success"
									>
										Submit
									</Button>
								</Box>
							</Form>
						)}
					</Formik>

					<Box sx={{ textAlign: "center", mt: 2 }}>
						<Link to="/register" style={{ textDecoration: "none" }}>
							Don't you have an account?
						</Link>
					</Box>
				</Grid>
				<Grid item xs={10} sm={7} md={6}>
					<Container>
						<img src={image} alt="img" />
					</Container>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Login;

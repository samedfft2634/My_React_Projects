import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import {
	Box,
	FormControl,
	FormHelperText,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { deepPurple } from "@mui/material/colors";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { object, string } from "yup";
import { Form } from "formik";

export const registerSchema = object({
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
			/[!/[@$!%*?&]+/,
			"Password must contain at least one special character! (@ / $ / ! / % / * / ? / & )"
		),
	username: string()
		.required("Username is a required field!")
		.max(20, " Username must contains maximum 20 character."),
	firstName: string()
		.required("First Name is a required field!")
		.max(20, "First Name must contains maximum 20 character."),
	lastName: string()
		.required("Last Name is a required field!")
		.max(20, "Last Name must contains maximum 20 character."),
	bio: string()
		.required("Bio is a required field!")
		.min(20, "Bio must contains minimum 20 charachter!")
		.max(200, "Bio can have a maximum of 200 characters!"),
	image: string()
		.url("Please enter a valid URL!")
		.required("Image URL entry is required!"),
});

const RegisterForm = ({
	values,
	handleChange,
	errors,
	touched,
	handleBlur,
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	// console.log(values);
	return (
		<Form>
			<Box noValidate sx={{ mt: 3 }}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							id="username"
							label="Username"
							name="username"
							value={values.username}
							onChange={handleChange}
							onBlur={handleBlur}
							error={touched.username && Boolean(errors.username)}
							helperText={touched.username && errors.username}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							label="First Name"
							name="firstName"
							id="firstName"
							required
							fullWidth
							value={values.firstName}
							onChange={handleChange}
							onBlur={handleBlur}
							error={
								touched.firstName && Boolean(errors.firstName)
							}
							helperText={touched.firstName && errors.firstName}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							fullWidth
							id="lastName"
							label="Last Name"
							name="lastName"
							value={values.lastName}
							onChange={handleChange}
							onBlur={handleBlur}
							error={touched.lastName && Boolean(errors.lastName)}
							helperText={touched.lastName && errors.lastName}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							label="Email Address"
							id="email"
							name="email"
							type="email"
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							error={touched.email && Boolean(errors.email)}
							helperText={touched.email && errors.email}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							label="Image"
							id="image"
							type="url"
							name="image"
							value={values.image}
							onChange={handleChange}
							onBlur={handleBlur}
							error={touched.image && Boolean(errors.image)}
							helperText={touched.image && errors.image}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							id="bio"
							label="Bio"
							name="bio"
							value={values.bio}
							onChange={handleChange}
							onBlur={handleBlur}
							error={touched.bio && Boolean(errors.bio)}
							helperText={touched.bio && errors.bio}
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControl
							sx={{ width: "100%" }}
							variant="outlined"
							error={touched.password && Boolean(errors.password)}
						>
							<InputLabel
								error={
									touched.password && Boolean(errors.password)
								}
							>
								Password
							</InputLabel>
							<OutlinedInput
								label="Password"
								id="password"
								name="password"
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
								error={
									touched.password && Boolean(errors.password)
								}
								type={showPassword ? "text" : "password"}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}
											edge="end"
											sx={{ color: deepPurple[400] }}
										>
											{showPassword ? (
												<Visibility />
											) : (
												<VisibilityOff />
											)}
										</IconButton>
									</InputAdornment>
								}
							/>
							{touched.password && errors.password && (
								<FormHelperText id="password-helper-text">
									{errors.password}
								</FormHelperText>
							)}
						</FormControl>
					</Grid>
				</Grid>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{
						mt: 3,
						mb: 2,
						bgcolor: deepPurple[400],
						":hover": {
							bgcolor: deepPurple[300],
						},
					}}
				>
					Sign Up
				</Button>
				<Grid container justifyContent="flex-start">
					<Grid item>
						<Typography component="span">
							<Link
								to="/auth"
								style={{
									textDecoration: "none",
									color: "black",
								}}
							>
								Already have an account?
								<Typography
									component="span"
									variant="body2"
									sx={{ color: "red" }}
								>
									Sign in
								</Typography>
							</Link>
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</Form>
	);
};

export default RegisterForm;

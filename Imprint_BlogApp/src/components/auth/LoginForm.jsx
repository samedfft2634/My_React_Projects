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

export const loginSchema = object({
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
});

const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<Form>
			<Box noValidate sx={{ mt: 3 }}>
				<Grid container spacing={2}>
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
					LOGIN
				</Button>
				<Grid container justifyContent="space-between">
					<Grid item>
						<Typography component="span">
							<Link
								to="/register"
								style={{
									textDecoration: "none",
									color: "black",
								}}
							>
								Don't you have an account?
								<Typography
									component="span"
									variant="body2"
									sx={{ color: "red" }}
								>
									Register
								</Typography>
							</Link>
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</Form>
	);
};

export default LoginForm;

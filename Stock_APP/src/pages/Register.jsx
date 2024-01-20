import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/register.svg";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import useAuthCall from "../service/useAuthCalls";
import RegisterForm, { registerSchema } from "../components/RegisterForm";

const Register = () => {
	const { register } = useAuthCall();

	return (
		<Container maxWidth="lg">
			<Grid
				container
				justifyContent="center"
				direction="row-reverse"
				rowSpacing={{ sm: 3 }}
				sx={{
					height: "100vh",
					p: 2,
				}}
			>
				<Grid item xs={12}>
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
						<LockIcon size="30" />
					</Avatar>
					<Typography
						variant="h4"
						align="center"
						mb={2}
						color="secondary.light"
					>
						Register
					</Typography>
					<Formik
						initialValues={{
							username: "",
							firstName: "",
							lastName: "",
							email: "",
							password: "",
						}}
						validationSchema={registerSchema}
						onSubmit={(values, actions) => {
							register(values);
							actions.resetForm();
							actions.setSubmitting(false);
						}}
						component={(props) => <RegisterForm {...props} />}
					></Formik>

					<Box sx={{ textAlign: "center", mt: 2 }}>
						<Link to="/" style={{ textDecoration: "none" }}>
							Do you have an account?
						</Link>
					</Box>
				</Grid>
				<Grid item xs={0} sm={7} md={6}>
					<Container>
						<img src={image} alt="img" />
					</Container>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Register;

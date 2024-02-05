import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AboutImg from "../assets/ssg.jpg";
import { AspectRatio } from "@mui/joy";
import { deepPurple } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Profile = () => {
	const { username, firstName, lastName, email, image, bio } = useSelector(
		(state) => state.auth.user
	);
	const navigate = useNavigate();
	return (
		<Container maxWidth="lg" sx={{ mt: 4 }}>
			<Card sx={{ p: 4, bgcolor: deepPurple[100] }}>
				<Grid container spacing={{ xs: 2, md: 3, lg: 4 }}>
					<Grid
						item
						xs={12}
						lg={6}
						sx={{ display: "flex", alignItems: "center" }}
					>
						<AspectRatio
							flex
							ratio="1"
							maxHeight={700}
							sx={{
								minWidth: 250,
								borderRadius: "50%",
								mr: { lg: 4 },
							}}
						>
							<CardMedia
								component="img"
								src={image || AboutImg}
								loading="lazy"
								alt={username}
								sx={{
									width: "400px",
									height: "400px",
									borderRadius: "50%",
								}}
							/>
						</AspectRatio>
					</Grid>
					<Grid item xs={12} lg={6} sx={{ display: "flex" }}>
						<Box>
							<Typography
								variant="h5"
								sx={{ fontFamily: "Monospace", my: 5 }}
							>
								Account Informations
							</Typography>
							<Typography variant="h5" sx={{ mb: 1 }}>
								<strong>Username:</strong> {username}
							</Typography>
							<Typography variant="h5" sx={{ mb: 1 }}>
								<strong>First Name:</strong> {firstName}
							</Typography>
							<Typography variant="h5" sx={{ mb: 1 }}>
								<strong>Last Name:</strong> {lastName}
							</Typography>
							<Typography variant="h5" sx={{ mb: 1 }}>
								<strong>Email:</strong> {email}
							</Typography>
							<Typography variant="body1">
								<strong>Bio:</strong>{" "}
								{bio || "There is no information about you :)"}
							</Typography>
							<Button
								variant="outlined"
								onClick={() => navigate("/")}
								sx={{
									mt: 4,
									color: "black",
									bgcolor: deepPurple[200],
									"&:hover": {
										bgcolor: deepPurple[400],
										color: "lightgray",
									},
								}}
							>
								Go back
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Card>
		</Container>
	);
};

export default Profile;

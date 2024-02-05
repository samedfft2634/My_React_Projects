import {
	Box,
	Card,
	CardMedia,
	Container,
	Grid,
	IconButton,
	Typography,
} from "@mui/material";
import AboutImg from "../assets/ssg.jpg";
import { AspectRatio } from "@mui/joy";
import { blue, deepPurple, grey, indigo, pink, red } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<Container maxWidth="lg" sx={{ mt: 4 }}>
			<Card sx={{ p: 4, bgcolor: deepPurple[50] }}>
				<Grid container spacing={{ xs: 2, md: 3, lg: 4 }}>
					<Grid item xs={12} lg={6}>
						<Typography
							variant="h5"
							sx={{ fontFamily: "Monospace" }}
						>
							About Us
						</Typography>
						<Typography
							sx={{
								mt: 2,
								textAlign: "justify",
								fontFamily: "Monospace",
							}}
						>
							First of all, welcome to our Imprint website. Our
							application, which was launched for the purpose of
							publishing blog posts and similar content, has a
							useful, fast and simple interface for those who want
							to find the information they are looking for and
							share their knowledge under these and similar
							categories with categories such as "World,
							Technology, Politics, Science, Health, Travel etc.".
							Users who wish can save the articles they are
							working on as a draft and then enter and edit this
							work at any time and share the current version on
							the site. Our aim is for our users to create their
							own personal development by following their own
							posts on the page and to easily benefit from other
							users' knowledge or thoughts on any subject. For
							those who think differently about benefiting, it can
							also be considered as a to do application, a recipe
							book to record recipes with pictures or a virtual
							travel book containing places visited and their
							photos. In the end, everyone's opinion is as
							different as their fingerprints.
						</Typography>
						<Typography sx={{ mt: 4, fontSize: ".8rem" }}>
							Created at 2024. All Rights Reserved.
						</Typography>
						<Box
							sx={{
								mt: 2,
								display: "flex",
								gap: 1.5,
								"& > button": { flex: 1 },
							}}
						>
							<Box sx={{ flex: 2 }}>
								<IconButton
									component={Link}
									to="https://www.facebook.com/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="add to favorites"
									sx={{
										"&:hover": {
											bgcolor: blue[100],
											"& .MuiSvgIcon-root": {
												color: blue[600],
											},
										},
									}}
								>
									<FacebookIcon />
								</IconButton>
								<IconButton
									component={Link}
									to="https://www.x.com/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="add to favorites"
									sx={{
										"&:hover": {
											bgcolor: grey[300],
											"& .MuiSvgIcon-root": {
												color: grey[900],
											},
										},
									}}
								>
									<XIcon />
								</IconButton>
								<IconButton
									component={Link}
									to="https://www.youtube.com/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="add to favorites"
									sx={{
										"&:hover": {
											bgcolor: red["A100"],
											"& .MuiSvgIcon-root": {
												color: red["A700"],
											},
										},
									}}
								>
									<YouTubeIcon />
								</IconButton>

								<IconButton
									component={Link}
									to="https://www.github.com/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="add to favorites"
									sx={{
										"&:hover": {
											bgcolor: grey[300],
											"& .MuiSvgIcon-root": {
												color: grey[900],
											},
										},
									}}
								>
									<GitHubIcon />
								</IconButton>
								<IconButton
									component={Link}
									to="https://www.pinterest.com/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="add to favorites"
									sx={{
										"&:hover": {
											"& .MuiSvgIcon-root": {
												color: red["A700"],
											},
										},
									}}
								>
									<PinterestIcon />
								</IconButton>
								<IconButton
									component={Link}
									to="https://www.instagram.com/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="comment"
									sx={{
										"&:hover": {
											bgcolor: pink[200],
											"& .MuiSvgIcon-root": {
												color: pink[500],
											},
										},
									}}
								>
									<InstagramIcon />
								</IconButton>
								<IconButton
									component={Link}
									to="https://www.linkedin.com/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="visible"
									sx={{
										"&:hover": {
											bgcolor: indigo["A100"],
											"& .MuiSvgIcon-root": {
												color: indigo["A700"],
											},
										},
									}}
								>
									<LinkedInIcon />
								</IconButton>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} lg={6}>
						<Card>
							<AspectRatio
								flex
								ratio="1"
								maxHeight={700}
								sx={{ minWidth: 250 }}
							>
								<CardMedia
									component="img"
									src={AboutImg}
									loading="lazy"
									alt="AboutImg"
									sx={{ width: "250px", height: "700px" }}
								/>
							</AspectRatio>
						</Card>
					</Grid>
				</Grid>
			</Card>
		</Container>
	);
};

export default About;

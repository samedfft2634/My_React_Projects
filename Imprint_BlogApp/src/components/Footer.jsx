import { Box, Container, Paper, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React from "react";
import { Link as MuiLink } from '@mui/material';


const Footer = () => {
	const date = new Date().getFullYear();
	return (
		<Paper
			sx={{
				// marginTop: "calc(10% + 60px)",
				marginTop: "1rem",
				bottom: 0,
				bgcolor: deepPurple[300],
			}}
			component="footer"
			square
			variant="outlined"
		>
			<Container maxWidth="lg">
				<Box
					sx={{
						flexGrow: 1,
						justifyContent: "center",
						display: "flex",
						my: 1,
					}}
				></Box>

				<Box
					sx={{
						flexGrow: 1,
						justifyContent: "space-between",
						display: "flex",
						mb: 2,
					}}
				>
					<Typography
						variant="caption"
						color="initial"
						sx={{ fontSize: "1rem" }}
					>
						Copyright ©{date} SF Production
					</Typography>

					<Box sx={{ display: "flex", gap: 2 }}>
						<MuiLink href="#" underline="none" sx={{color:"black","&:hover":{color:"lightgray"}}}>
							Support
						</MuiLink>
						|
						<MuiLink href="#" underline="none" sx={{color:"black","&:hover":{color:"lightgray"}}}>
							Privacy Policy
						</MuiLink>
					</Box>
				</Box>
			</Container>
		</Paper>
	);
};
export default Footer;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { CssBaseline } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { deepPurple } from "@mui/material/colors";
import {  useSelector } from "react-redux";
import useAuthCalls from "../hooks/useAuthCalls";
import PostAddIcon from "@mui/icons-material/PostAdd";
import FingerprintIcon from '@mui/icons-material/Fingerprint';
// import BookIcon from "@mui/icons-material/Book";

const pages = [
	{
		title: "Dashboard",
		url: "/",
	},
	{
		title: "About",
		url: "/about/",
	},
];
const getSettings = (token) => {
	if (token) {
		return [
			{ id: 1, title: "My Blogs", url: "/my-blogs/" },
			{ id: 2, title: "Account", url: "/profile/" },
			{ id: 4, title: "Logout", url: "/" },
		];
	} else {
		return [
			{ id: 3, title: "Login", url: "/auth/" },
			{ id: 5, title: "Register", url: "/register" },
		];
	}
};

function Navbar() {
	const { token } = useSelector((state) => state.auth);
	const { image } = useSelector((state) => state.auth.user);
	const settings = getSettings(token);
	const navigate = useNavigate();
	const { logout } = useAuthCalls();
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static" sx={{ bgcolor: deepPurple[100] }}>
			<CssBaseline />
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<FingerprintIcon
						sx={{
							display: { xs: "none", md: "flex" },
							mr: 1,
							color: "grey",
						}}
					/>
					<Typography
						variant="h6"
						noWrap
						component="a"
						onClick={() => navigate("/")}
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "black",
							textDecoration: "none",
							cursor: "pointer",
						}}
					>
						IMPRINT
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="black"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page.title}
									onClick={handleCloseNavMenu}
								>
									<Typography
										onClick={() => navigate(page.url)}
										textAlign="center"
										sx={{
											color: "black",
										}}
									>
										{page.title}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<FingerprintIcon
						sx={{
							display: { xs: "flex", md: "none" },
							mr: 1,
							color: "grey",
						}}
					/>
					<Typography
						variant="h5"
						noWrap
						component="a"
						onClick={() => navigate("/")}
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "black",
							textDecoration: "none",
							cursor: "pointer",
						}}
					>
						IMPRINT
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
						}}
					>
						{pages.map((page) => (
							<Button
								key={page.title}
								onClick={() => {
									handleCloseNavMenu();
									navigate(page.url);
								}}
								sx={{
									my: 2,
									color: "black",
									display: "block",
								}}
							>
								{page.title}
							</Button>
						))}
					</Box>
					<Tooltip title="New Blog">
							<IconButton
								onClick={()=> navigate("new-blog")}
								sx={{m:1, p: 1 }}
							>
							<PostAddIcon sx={{fontSize:"2rem"}}/>
							</IconButton>
					</Tooltip>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}
							>
								<Avatar
									alt="Remy Sharp"
									src={image}
								/>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem
									key={setting.title}
									onClick={() => {
										if (setting.title === "Logout") {
											logout(); 
										}
										handleCloseUserMenu();
										navigate(setting.url); 
									}}
								>
									<Typography
										textAlign="center"
										sx={{ color: "black" }}
										
									>
										{setting.title}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Navbar;

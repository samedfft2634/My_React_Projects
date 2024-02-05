import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import MyBlogs from "../pages/MyBlogs";
import Register from "../pages/Register";
import Detail from "../pages/Detail";
import NotFound from "../pages/NotFound";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import PrivateRouter from "./PrivateRouter";
const AppRouter = () => {
	return (
		<Box
			sx={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				bgcolor: grey[300],
			}}
		>
			<Router>
				<Navbar />
				<Box component="main" sx={{ flexGrow: 1 }}>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="auth" element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route path="about" element={<About />} />
						<Route element={<PrivateRouter />}>
							<Route path="new-blog" element={<NewBlog />} />
							<Route path="my-blogs" element={<MyBlogs />} />
							<Route path="profile" element={<Profile />} />
						</Route>
						<Route path="detail/:id" element={<Detail />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Box>

				<Footer />
			</Router>
		</Box>
	);
};

export default AppRouter;

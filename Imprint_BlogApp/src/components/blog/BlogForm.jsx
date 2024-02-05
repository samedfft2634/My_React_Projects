import React, { useEffect, useState } from "react";
import {
	Button,
	CssBaseline,
	TextField,
	Grid,
	Box,
	Typography,
	Container,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useBlogCalls from "../../hooks/useBlogCalls";

const BlogForm = ({ blogDetails, handleSubmit }) => {
	const { getCategories } = useBlogCalls();
	const { categories } = useSelector((state) => state.blog);
	const navigate = useNavigate();
	const [blog, setBlog] = useState({
		title: "",
		content: "",
		image: "",
		categoryId: "",
		isPublish: false,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setBlog({ ...blog, [name]: value });
	};

	useEffect(() => {
		getCategories();
    if(blogDetails){
      setBlog(blogDetails)
    } 
	}, [blogDetails]);

	return (
		<Container component="main" maxWidth="lg">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 4,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					textAlign: "left",
				}}
			>
				<Typography
					component="h1"
					variant="h5"
					sx={{ textAlign: "left" }}
				>
					{blogDetails?._id ? "UPDATE BLOG" : "NEW BLOG"}
				</Typography>
				<Box
					component="form"
					noValidate
					onSubmit={(e) => {
						e.preventDefault();
						handleSubmit(blog);
						navigate("/");
					}}
					sx={{ mt: 3, width: "100%", justifyContent: "center" }}
				>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								label="Title"
								name="title"
								id="title"
								type="text"
								value={blog?.title}
								variant="filled"
								onChange={handleChange}
								required
								fullWidth
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FormControl
								required
								sx={{ width: "100%" }}
								variant="filled"
							>
								<InputLabel id="demo-simple-select-required-label">
									Category
								</InputLabel>
								<Select
									labelId="category"
									id="categoryId"
									name="categoryId"
									label="Category *"
									value={
										blog?.categoryId?._id ||
										blog?.categoryId
									}
									onChange={handleChange}
								>
									{categories?.map((item) => (
										<MenuItem
											value={item?._id}
											key={item?._id}
										>
											{item?.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								label="Image URL"
								id="image"
								name="image"
								type="url"
								variant="filled"
								value={blog?.image}
								onChange={handleChange}
								required
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FormControl
								required
								sx={{ width: "100%" }}
								variant="filled"
							>
								<InputLabel id="demo-simple-select-required-label">
									Status
								</InputLabel>
								<Select
									labelId="demo-simple-select-required-label"
									id="demo-simple-select-required"
									name="isPublish"
									label="Status *"
									value={blog?.isPublish}
									onChange={handleChange}
									required
								>
									<MenuItem value={false}>Draft</MenuItem>
									<MenuItem value={true}>Published</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<TextField
								label="Content"
								id="content"
								name="content"
								value={blog?.content}
								onChange={handleChange}
								placeholder="Add a content"
								multiline
								rows={6}
								variant="filled"
								fullWidth
								sx={{
									mt: 2,
									"& label.Mui-focused": {
										color: deepPurple[500],
									},
									"& .MuiFilledInput-underline:after": {
										borderBottomColor: deepPurple[500],
									},
								}}
							/>
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
						{blogDetails?._id ? "UPDATE BLOG" : "NEW BLOG"}
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default BlogForm;

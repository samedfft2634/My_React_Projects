import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Avatar, CardMedia, Container, Grid, TextField } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { deepPurple, teal, yellow } from "@mui/material/colors";
import globalStyles from "../components/styles/globalStyles";
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import DeleteModal from "../components/blog/DeleteModal";
import UpdateModal from "../components/blog/UpdateModal";

export const customFormatDate = (dateString) => {
	const date = new Date(dateString);
	const options = {
		weekday: "short",
		day: "numeric",
		month: "short",
		year: "numeric",
	};
	return date.toLocaleDateString("en-GB", options);
};

const Detail = () => {
	//* For Update Modal ------------------------
	const [updateModalOpen, setUpdateModalOpen] = useState(false);
	const handleUpdateClick = () => {
		setUpdateModalOpen(true);
	};
	//* ------------------------------------------
	//? For Delete Modal -------------------------
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const handleDeleteClick = () => {
		setDeleteModalOpen(true);
	};
	//? ------------------------------------------

	const { EllipsisText } = globalStyles();
	const { blogDetails } = useSelector((state) => state.blog);

	const {
		user: { _id },token
	} = useSelector((state) => state.auth);
	// console.log(_id);
	const { getBlogDetails,postComment,likeBlog } = useBlogCalls();
	const [show, setShow] = useState(false);
	const {
		title,
		image,
		content,
		createdAt,
		likes,
		comments,
		countOfVisitors,
		userId,
		categoryId,
	} = blogDetails;
	const { id } = useParams();
	const [comment, setComment] = useState({
		blogId: id,
		comment: "",
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		await postComment(comment);
		getBlogDetails();
		setComment({
			blogId: "",
			comment: "",
		});
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setComment({ ...comment, [name]: value });
	};
	// console.log(blogDetails);
	useEffect(() => {
		getBlogDetails();
	}, []);
	return (
		<Container maxWidth="xl" sx={{ px: 2 }}>
			<Grid container spacing={2} sx={{ mt: 2 }}>
				<Grid item xs={12} xl={6}>
					<CardContent>
						<CardMedia
							component="img"
							src={image}
							loading="lazy"
							alt={title}
							sx={{ width: "100%" }}
						/>
						<Box
							sx={{
								mt: 3,
								display: "flex",
								alignItems: "center",
								gap: 2,
							}}
						>
							<Avatar sx={{ color: "blue", bgcolor: "orange" }}>
								S
							</Avatar>
							<Typography>{userId?.username}</Typography>
						</Box>
						<Typography sx={{ mt: 1 }}>
							<b>Published at:</b>{" "}
							{new Date(createdAt).toLocaleDateString()},{" "}
							{new Date(createdAt).toLocaleTimeString()}
						</Typography>
					</CardContent>
				</Grid>
				<Grid item xs={12} xl={6}>
					<CardContent>
						<Typography
							fontSize="xl"
							fontWeight="xl"
							sx={{ mb: 3 }}
						>
							{title}
							{"   "}
							{`#${categoryId?.name}`}
						</Typography>
						<Typography
							level="body-sm"
							fontWeight="lg"
							fontSize="1.2rem"
							textColor="text.tertiary"
							sx={{ mb: 2, textAlign: "justify" }}
						>
							{content}
						</Typography>

						<Box
							sx={{
								display: "flex",
								gap: 1.5,
								"& > button": { flex: 1 },
							}}
						>
							<Box sx={{ flex: 2 }}>
								<IconButton
									aria-label="add to favorites"
									sx={{
										"&:hover": {
											bgcolor: teal[100],
											"& .MuiSvgIcon-root": {
												color: teal[400],
											},
											"& span": {
												color: teal[600],
											},
										},
									}}
								>
									<VisibilityIcon />
									<span>{countOfVisitors}</span>
								</IconButton>
								<IconButton
									disabled={!token}
									onClick={() => setShow(!show)}
									aria-label="comment"
									sx={{
										"&:hover": {
											bgcolor: deepPurple[500],
											"& .MuiSvgIcon-root": {
												color: deepPurple[200],
											},
											"& span": {
												color: deepPurple[200],
											},
										},
									}}
								>
									<ForumIcon />
									<span>{comments?.length || 0}</span>
								</IconButton>
								<IconButton
								onClick={()=> likeBlog(id)}
									disabled={!token}
									aria-label="visible"
									sx={{
										"&:hover": {
											bgcolor: yellow[500],
											"& .MuiSvgIcon-root": {
												color: yellow[800],
											},
											"& span": {
												color: yellow[800],
											},
										},
									}}
								>
									<ThumbUpIcon />
									<span>{likes?.length || 0}</span>
								</IconButton>
							</Box>

							{/* <Button
							variant="solid"
							sx={{
								bgcolor: deepPurple[200],
								"&:hover": { bgcolor: deepPurple[400] },
							}}
						>
							Read More
						</Button> */}
						</Box>

						{_id === userId?._id && (
							<Box
								sx={{
									display: "flex",
									gap: 1.5,
									m: "auto",
									my: 2,
									"& > button": { flex: 1 },
								}}
							>
								<Box sx={{ display: "flex", gap: 2, flex: 2 }}>
									<Button
										variant="contained"
										color="success"
										startIcon={<CreateIcon />}
										onClick={handleUpdateClick}
									>
										Update Blog
									</Button>
									<Button
										variant="outlined"
										color="error"
										endIcon={<DeleteIcon />}
										onClick={handleDeleteClick}
									>
										Delete Blog
									</Button>
									<DeleteModal
										open={deleteModalOpen}
										handleClose={() =>
											setDeleteModalOpen(false)
										}
										image={image}
										id={id}
									/>
									<UpdateModal
										open={updateModalOpen}
										blogDetails={blogDetails}
										handleClose={() =>
											setUpdateModalOpen(false)
										}
									/>
								</Box>
							</Box>
						)}
					</CardContent>
				</Grid>
			</Grid>
			<Box
				sx={{
					display: `${show ? "flex" : "none"}`,
					flexDirection: "column",
				}}
			>
				<Box component="form" onSubmit={handleSubmit}>
					<TextField
						id="comment"
						name="comment"
						label="Comment"
						placeholder="Add a comment"
						multiline
						rows={4}
						variant="filled"
						sx={{
							width: "100%",
							"& label.Mui-focused": {
								color: deepPurple[500],
							},
							"& .MuiFilledInput-underline:after": {
								borderBottomColor: deepPurple[500],
							},
						}}
						value={comment?.comment}
						onChange={handleChange}
					/>
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
						Submit
					</Button>
				</Box>
				{comments?.map((comment) => (
					<Card key={comment?._id} sx={{ mt: 2 }}>
						<CardContent>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: 2,
								}}
							>
								<Avatar
									sx={{
										color: `#${comment?.userId?._id.slice(
											0,
											6
										)}`,
										bgcolor: `#${comment?.userId?._id.slice(
											6,
											9
										)}`,
									}}
								></Avatar>
								<Box>
									<Typography>{userId?.username}</Typography>
									<Typography>
										{customFormatDate(createdAt)}
									</Typography>
								</Box>
							</Box>
							<EllipsisText
								text={comment.comment}
								maxLines={5}
							></EllipsisText>
						</CardContent>
					</Card>
				))}
			</Box>
		</Container>
	);
};

export default Detail;

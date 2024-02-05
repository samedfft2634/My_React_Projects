import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import { CardMedia, Pagination } from "@mui/material";
import globalStyles from "../styles/globalStyles";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import { deepPurple, teal, yellow } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { customFormatDate } from "../../pages/Detail";
import { useEffect } from "react";
import useBlogCalls from "../../hooks/useBlogCalls";
import { DashSkeleton, ErrorMsg } from "../../helper/Skeletons";
import { style } from "./DeleteModal";

const BlogCard = () => {
	const { EllipsisText } = globalStyles();
	const { getBlogs, likeBlog } = useBlogCalls();
	const { blogs, pagination, loading, error } = useSelector(
		(state) => state.blog
	);
	const { token } = useSelector((state) => state.auth);

	const navigate = useNavigate();
	useEffect(() => {
		getBlogs(`/blogs/?page=${pagination?.page}&limit=6`);
	}, []);
	const handlePagChange = (event, newPage) => {
		getBlogs(`/blogs/?page=${newPage}&limit=${pagination?.limit}`);
	};
	const pageCount =
		pagination.totalRecords && pagination.limit
			? Math.ceil(pagination.totalRecords / pagination.limit)
			: 0;

	// console.log(pagination);
	// console.log(typeof pagination?.totalRecords, typeof pagination?.limit);
	return (
		<>
			{loading && <DashSkeleton />}
			{error && !loading && <ErrorMsg />}
			{!loading && !error && (
				<Box
					sx={{
						width: "100%",
						position: "relative",
						overflow: { xs: "auto", sm: "initial" },
					}}
				>
					<Box
						sx={{
							position: "absolute",
							display: "block",
							left: "500px",
							top: "-24px",
							bottom: "-24px",
							"&::before": {
								top: "4px",
								display: "block",
								position: "absolute",
								right: "0.5rem",
								color: "text.tertiary",
								fontSize: "sm",
								fontWeight: "lg",
							},
							"&::after": {
								top: "4px",
								display: "block",
								position: "absolute",
								left: "0.5rem",
								color: "text.tertiary",
								fontSize: "sm",
								fontWeight: "lg",
							},
						}}
					/>
					<Container sx={{ width: "100%", mt: 4 }}>
						{blogs.length > 0 ? (
							blogs?.map((blog) => (
								<Card
									key={blog?._id}
									orientation="horizontal"
									sx={{
										width: "100%",
										flexWrap: "wrap",
										[`& > *`]: {
											"--stack-point": "500px",
											minWidth:
												"clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
										},
										overflow: "auto",
										border: "none",
										my: 6,
										boxShadow: "1px 1px 1px black",
										
									}}
								>
									<AspectRatio
										flex
										ratio="1"
										maxHeight={182}
										sx={{ minWidth: 250, maxHeight: 250 }}
									>
										<CardMedia
											component="img"
											src={blog?.image}
											loading="lazy"
											alt={blog?.title}
											sx={{
												width: "250px",
												height: "250px",
											}}
										/>
									</AspectRatio>
									<CardContent>
										<Typography
											fontSize="xl"
											fontWeight="lg"
										>
											{blog?.title}
										</Typography>
										<Typography
											level="body-sm"
											fontWeight="lg"
											textColor="text.tertiary"
										>
											Created :
											{customFormatDate(blog?.createdAt)}
											
										</Typography>
										<Sheet
											sx={{
												bgcolor: "background.level1",
												borderRadius: "sm",
												p: 1.5,
												my: 1.5,
												display: "flex",
												gap: 2,
												"& > div": { flex: 1 },
											}}
										>
											<EllipsisText
												text={blog?.content}
												maxLines={5}
											></EllipsisText>
										</Sheet>
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
															"& .MuiSvgIcon-root":
																{
																	color: teal[400],
																},
															"& span": {
																color: teal[600],
															},
														},
													}}
												>
													<VisibilityIcon />
													<span>
														{blog?.countOfVisitors ||
															0}
													</span>
												</IconButton>
												<IconButton
													disabled={!token}
													aria-label="comment"
													sx={{
														"&:hover": {
															bgcolor:
																deepPurple[500],
															"& .MuiSvgIcon-root":
																{
																	color: deepPurple[200],
																},
															"& span": {
																color: deepPurple[200],
															},
														},
													}}
												>
													<ForumIcon />
													<span>
														{blog?.comments
															.length || 0}
													</span>
												</IconButton>
												<IconButton
													disabled={!token}
													onClick={() =>
														likeBlog(blog?._id)
													}
													aria-label="visible"
													sx={{
														"&:hover": {
															bgcolor:
																yellow[500],
															"& .MuiSvgIcon-root":
																{
																	color: yellow[800],
																},
															"& span": {
																color: yellow[800],
															},
														},
													}}
												>
													<ThumbUpIcon />
													<span>
														{blog?.likes.length ||
															0}
													</span>
												</IconButton>
											</Box>

											<Button
												onClick={() =>
													navigate(
														`/detail/${blog?._id}`
													)
												}
												variant="solid"
												sx={{
													bgcolor: deepPurple[200],
													"&:hover": {
														bgcolor:
															deepPurple[400],
													},
												}}
											>
												Read More
											</Button>
										</Box>
									</CardContent>
								</Card>
							))
						) : (
							<Box sx={style}>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										gap: 2,
									}}
								>
									<Typography fontSize={"lg"} fontWeight="lg">
										There is no blogs ! Create One...
									</Typography>
									<Button
										variant="solid"
										color="success"
										onClick={() => navigate("/new-blog")}
									>
										New Blogg
									</Button>
								</Box>
							</Box>
						)}
					</Container>
					<Box
						width="100%"
						sx={{ display: "flex", justifyContent: "center" }}
					>
						<Pagination
							page={
								pagination?.pages
									? pagination?.pages?.current
									: 1
							}
							onChange={handlePagChange}
							count={pageCount}
							color="secondary"
							size="large"
						/>
					</Box>
				</Box>
			)}
		</>
	);
};
export default BlogCard;

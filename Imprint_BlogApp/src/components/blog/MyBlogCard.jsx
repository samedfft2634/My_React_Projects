import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { useSelector } from "react-redux";
import { CardMedia, Container, Stack } from "@mui/material";
import globalStyles from "../styles/globalStyles";
import { customFormatDate } from "../../pages/Detail";
import { deepPurple, teal, yellow } from "@mui/material/colors";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Box from "@mui/joy/Box";
import { useNavigate } from "react-router-dom";
import { style } from "./DeleteModal";
import { MyBlogSkeleton } from "../../helper/Skeletons";

export default function MyBlogCard() {
	const { userBlogs, loading, error } = useSelector((state) => state.blog);
	const { EllipsisText } = globalStyles();
	const navigate = useNavigate();

	return (
		<Container sx={{ my: 2 }} maxWidth="xl">
			<Stack
				display="flex"
				flexDirection="row"
				justifyContent="center"
				flexWrap="wrap"
				useFlexGap
				gap={3}
			>
				{loading && <MyBlogSkeleton />}
				{!error && !loading && userBlogs.length > 0
					? userBlogs.map((user) => {
							const {
								comments,
								content,
								countOfVisitors,
								image,
								isPublish,
								title,
								likes,
								createdAt,
								updatedAt,
								_id,
							} = user;

							return (
								<Card
									sx={{
										width: 320,
										maxWidth: "100%",
										boxShadow: "lg",
									}}
									key={_id}
								>
									<CardOverflow>
										<AspectRatio sx={{ minWidth: 200 }}>
											<CardMedia
												component="img"
												src={image}
												loading="lazy"
												alt={title}
											/>
										</AspectRatio>
									</CardOverflow>
									<CardContent>
										<Typography level="body-xs">
											Created At:{" "}
											{customFormatDate(createdAt)}
										</Typography>
										<Typography
											fontWeight="md"
											color="neutral"
											textColor="text.primary"
											overlay={
												isPublish ? "true" : "false"
											}
										>
											{title}
										</Typography>
										<EllipsisText
											text={content}
											maxLines={3}
										></EllipsisText>
										<Typography
											level="title-lg"
											sx={{ mt: 1, fontWeight: "xl" }}
											endDecorator={
												<Chip
													component="span"
													size="sm"
													variant="soft"
													color={
														isPublish
															? "success"
															: "danger"
													}
												>
													{isPublish
														? "Published"
														: "Draft"}
												</Chip>
											}
										>
											<Box
												sx={{ flex: 2 }}
												component="span"
											>
												<IconButton
													component="span"
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
														{countOfVisitors || 0}
													</span>
												</IconButton>
												<IconButton
													component="span"
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
														{comments.length || 0}
													</span>
												</IconButton>
												<IconButton
													component="span"
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
														{likes.length || 0}
													</span>
												</IconButton>
											</Box>
										</Typography>
										<Typography level="body-sm">
											Updated At:{" "}
											{customFormatDate(updatedAt)}
										</Typography>
									</CardContent>
									<CardOverflow>
										<Button
											variant="solid"
											color="danger"
											size="lg"
											onClick={() =>
												navigate(`/detail/${_id}`)
											}
											sx={{
												bgcolor: deepPurple[600],
												"&:hover": {
													bgcolor: deepPurple[400],
												},
											}}
										>
											Read More
										</Button>
									</CardOverflow>
								</Card>
							);
					  })
					: null}
			</Stack>
			{!loading && !error && userBlogs.length === 0 && (
				<Box sx={style}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 2,
						}}
					>
						<Typography
							fontSize={"lg"}
							fontWeight="lg"
							component="span"
						>
							There is no blogs! Create One...
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
	);
}

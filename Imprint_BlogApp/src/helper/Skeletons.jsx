import { Alert, Grid } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import AlertTitle from "@mui/material/AlertTitle";
import { Box } from "@mui/joy";

export const DashSkeleton = () => {
	return (
		<>
			{[1, 2, 3].map((_, index) => (
				<Grid
					key={index}
					container
					justifyContent="center"
					alignItems="center"
					my={3}
					gap={3}
				>
					<Grid item>
						<Skeleton width={300} height={300} variant="rounded" />
					</Grid>
					<Grid item>
						<Grid container direction="column" spacing={3}>
							<Grid item>
								<Skeleton
									width={500}
									height={20}
									variant="rectangular"
								/>
							</Grid>
							<Grid item>
								<Skeleton
									width={200}
									height={20}
									variant="rectangular"
								/>
							</Grid>
							<Grid item>
								<Skeleton
									width={600}
									height={80}
									variant="rectangular"
								/>
							</Grid>
							<Grid item>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between",
									}}
								>
									<Skeleton
										width={100}
										height={40}
										variant="rectangular"
									/>
									<Skeleton
										width={150}
										height={60}
										variant="rounded"
									/>
								</Box>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			))}
		</>
	);
};
export const MyBlogSkeleton = () => {
	return (
		<>
			{[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
				<Stack key={i}>
					<Skeleton width={200} height={300} variant="rounded" />
					
				</Stack>
			))}
		</>
	);
};

export const ErrorMsg = () => {
	return (
		<Alert severity="error" sx={{ m: 5, width: "50%" }}>
			<AlertTitle>Error</AlertTitle>
			An error occurred!
		</Alert>
	);
};

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/BrandModal";
import {
	BrandSkeleton,
	CardSkeleton,
	ErrorMsg,
	NoDataMsg,
} from "../components/DataFetchMsg";
import { Stack } from "@mui/system";

const Brands = () => {
	const { getStocks } = useStockCalls();
	const { brands, error, loading } = useSelector((state) => state.stock);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const [info, setInfo] = useState({
		name: "",
		image: "",
	});
	const handleClose = () => {
		setOpen(false);
		setInfo({ name: "", image: "" });
	};
	useEffect(() => {
		getStocks("brands");
	}, []);
	return (
		<>
			<Stack justifyContent="space-between" direction="row">
				<Typography variant="h4" color="error" mb={3}>
					Brands
				</Typography>
				<Button
					variant="contained"
					onClick={handleOpen}
					color="success"
					sx={{ mb: 3 }}
				>
					New Brand
				</Button>
			</Stack>

			<BrandModal
				open={open}
				handleClose={handleClose}
				setInfo={setInfo}
				info={info}
			/>

			{error && <ErrorMsg />}
			{loading && <BrandSkeleton />}
			{!error && !loading && !brands.length && <NoDataMsg />}
			{!error && !loading && brands.length > 0 && (
				<Grid container gap={2} mt={3} justifyContent="center">
					{brands?.map((brand) => (
						<Grid item key={brand._id}>
							<BrandCard
								brand={brand}
								handleOpen={handleOpen}
								info={info}
								setInfo={setInfo}
							/>
						</Grid>
					))}
				</Grid>
			)}
		</>
	);
};

export default Brands;

import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { Button, Container, Typography } from "@mui/material";
import SaleModal from "../components/SaleModal";
import SaleTable from "../components/SaleTable";
import TableSkeleton, { ErrorMsg, NoDataMsg } from "../components/DataFetchMsg";
import { useSelector } from "react-redux";
import { Stack } from "@mui/system";

const Sales = () => {
	const { getStocks } = useStockCalls();
	const { sales, loading, error } = useSelector((state) => state.stock);
	const [open, setOpen] = useState(false);
	const initialState = {
		brandId: "",
		productId: "",
		quantity: "",
		price: "",
	};
	const [info, setInfo] = useState(initialState);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		setInfo(initialState);
	};
	useEffect(() => {
		getStocks("products");
		getStocks("sales");
		getStocks("brands");
	}, []);

	return (
		<Container maxWidth="xl">
			<Stack justifyContent="space-between" direction="row">
				<Typography variant="h4" color="error" mb={3}>
					Sales
				</Typography>
				<Button
					variant="contained"
					onClick={handleOpen}
					color="success"
					sx={{ mb: 3 }}
				>
					New Sale
				</Button>
			</Stack>

			<SaleModal
				open={open}
				handleClose={handleClose}
				info={info}
				setInfo={setInfo}
			/>

			{error && <ErrorMsg />}
			{loading && <TableSkeleton />}
			{!loading && !sales?.length && <NoDataMsg />}
			{!loading && sales?.length > 0 && (
				<SaleTable setInfo={setInfo} handleOpen={handleOpen} />
			)}
		</Container>
	);
};

export default Sales;

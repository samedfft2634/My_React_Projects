import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import PurchaseModal from "../components/PurchaseModal";
import PurchaseTable from "../components/PurchaseTable";
import { Button, Container, Typography } from "@mui/material";
import TableSkeleton, { ErrorMsg, NoDataMsg } from "../components/DataFetchMsg";
import { useSelector } from "react-redux";
import { Stack } from "@mui/system";

const Purchases = () => {
	const { getStocks } = useStockCalls();
	const { error, loading, purchases } = useSelector((state) => state.stock);
	const [open, setOpen] = useState(false);
	const initialState = {
		brandId: "",
		firmId: "",
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
		getStocks("purchases");
		getStocks("brands");
		getStocks("firms");
	}, []);
	return (
		<Container maxWidth="xl">
			<Stack justifyContent="space-between" direction="row">
				<Typography variant="h4" color="error" mb={3}>
					Purchases
				</Typography>
				<Button
					variant="contained"
					onClick={handleOpen}
					color="success"
					sx={{ mb: 3 }}
				>
					New Purchase
				</Button>
			</Stack>
			<PurchaseModal
				open={open}
				handleClose={handleClose}
				info={info}
				setInfo={setInfo}
			/>
			{error && <ErrorMsg />}
			{loading && <TableSkeleton />}
			{!error && !loading && !purchases?.length && <NoDataMsg />}
			{!error && !loading && purchases?.length > 0 && (
				<PurchaseTable setInfo={setInfo} handleOpen={handleOpen} />
			)}
		</Container>
	);
};

export default Purchases;

import { modalStyle } from "../styles/globalStyles";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import useStockCalls from "../service/useStockCalls";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
const ProductModal = ({ open, handleClose, info, setInfo }) => {
	const { categories, brands } = useSelector((state) => state.stock);
	const { postStock } = useStockCalls();
	const handleChange = (e) => {
		const { name, value } = e.target;
		setInfo({ ...info, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		postStock("products", info);
		handleClose();
	};
	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={modalStyle}>
					<Box
						component="form"
						onSubmit={handleSubmit}
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 2,
						}}
					>
						<FormControl fullWidth>
							<InputLabel id="categoryId">Category</InputLabel>
							<Select
								labelId="categoryId"
								id="categoryId"
								name="categoryId"
								variant="filled"
								value={info.categoryId}
								label="Category"
								onChange={handleChange}
								required
							>
								{categories?.map((item) => (
									<MenuItem key={item._id} value={item._id}>
										{item.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<FormControl fullWidth>
							<InputLabel id="brandId">Brands</InputLabel>
							<Select
								labelId="brandId"
								id="brandId"
								name="brandId"
								variant="filled"
								value={info.brandId}
								label="Brands"
								onChange={handleChange}
								required
							>
								{brands?.map((item) => (
									<MenuItem key={item._id} value={item._id}>
										{item.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<TextField
							label="Product Name"
							name="name"
							id="name"
							type="text"
							variant="filled"
							value={info.name}
							onChange={handleChange}
							required
						/>
						<Button
							type="submit"
							variant="contained"
							color={info._id ? "warning" : "success"}
							size="large"
						>
							Add Product
						</Button>
					</Box>
				</Box>
			</Modal>
		</>
	);
};
export default ProductModal;


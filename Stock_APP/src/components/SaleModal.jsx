import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../styles/globalStyles";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useStockCalls from "../service/useStockCalls";

const SaleModal = ({ open, handleClose, info, setInfo }) => {
	const navigate = useNavigate();
	const { postStock, putStock } = useStockCalls();
	const { products, brands } = useSelector((state) => state.stock);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setInfo({ ...info, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (info._id) {
			putStock("sales", info);
		} else {
			postStock("sales", info);
		}
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
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 2,
						}}
						component="form"
						onSubmit={handleSubmit}
					>
						<FormControl>
							<InputLabel
								variant="filled"
								color="success"
								id="brand-select-label"
							>
								Brand
							</InputLabel>
							<Select
								labelId="brand-select-label"
								label="Brand"
								id="brand-select"
								name="brandId"
								variant="filled"
								color="success"
								value={info?.brandId?._id || info?.brandId}
								onChange={handleChange}
								required
							>
								<MenuItem
									onClick={() => navigate("/stock/brands/")}
								>
									Add New Brand
								</MenuItem>
								<hr />
								{brands?.map((item) => {
									return (
										<MenuItem
											key={item._id}
											value={item._id}
										>
											{item.name}
										</MenuItem>
									);
								})}
							</Select>
						</FormControl>
						<FormControl>
							<InputLabel
								variant="filled"
								color="success"
								id="product-select-label"
							>
								Product
							</InputLabel>
							<Select
								labelId="product-select-label"
								label="Product"
								id="product-select"
								variant="filled"
								color="success"
								name="productId"
								value={info?.productId?._id || info?.productId}
								onChange={handleChange}
								required
							>
								<MenuItem
									onClick={() => navigate("/stock/products")}
								>
									Add New Product
								</MenuItem>
								<hr />
								{products?.map((item) => {
									return (
										<MenuItem
											key={item._id}
											value={item._id}
										>
											{item.name}
										</MenuItem>
									);
								})}
							</Select>
						</FormControl>
						<TextField
							label="Quantity"
							id="quantity"
							name="quantity"
							type="number"
							variant="filled"
							color="success"

							InputProps={{ inputProps: { min: 0 } }}
							value={info?.quantity}
							onChange={handleChange}
							required
						/>
						<TextField
							label="Price"
							id="price"
							type="number"
							variant="filled"
							color="success"
							name="price"
							InputProps={{ inputProps: { min: 0 } }}
							value={info?.price}
							onChange={handleChange}
							required
						/>
						<Button type="submit" variant="contained" size="large" color={info?._id ? "warning" : "success"}>
							{info?._id ? "Update Sale" : "Add New Sale"}
						</Button>
					</Box>
				</Box>
			</Modal>
		</>
	);
};

export default SaleModal;

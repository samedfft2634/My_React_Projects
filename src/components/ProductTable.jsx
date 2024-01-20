import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useStockCalls from "../service/useStockCalls";
import { btnStyles } from "../styles/globalStyles";

export default function ProductTable() {
	const { products } = useSelector((state) => state.stock);
	const { deleteStock } = useStockCalls();
	const columns = [
		{
			field: "_id",
			headerName: "#",
			description: "Product ID",
			flex: 1.4,
			minWidth:"100px",
			align:"center",
			headerAlign: "center",
			sortable: false,
			valueGetter: (params) => params.value.slice(-5),
		},
		{
			field: "categoryId",
			headerName: "Category",
			flex: 1,
			align:"center",
			headerAlign: "center",
			valueGetter: (params) => {
				// console.log(params);
				return params.row?.categoryId?.name;
			},
		},
		{
			field: "brandId",
			headerName: "Brands",
			flex: 1.2,
			align:"center",
			headerAlign: "center",
			valueGetter: (params) => {
				return params.row?.brandId?.name;
			},
		},
		{
			field: "name",
			headerName: "Name",
			flex: 2.2,
			align:"center",
			headerAlign: "center",
		},
		{
			field: "stock",
			headerName: "Stock",
			type: "number",
			flex: 1.5,
			align:"center",
			headerAlign: "center",
			valueGetter: (params) => {
				return params.row?.quantity;
			},
		},
		{
			field: "actions",
			headerName: "Actions",
			description: "This column has a value getter and is not sortable",
			sortable: false,
			headerAlign: "center",
			align:"center",
			flex: 0.6,
			type: "actions",
			getActions: (params) => [
				<GridActionsCellItem
					icon={<DeleteForeverIcon />}
					onClick={() => deleteStock("products",params?.id)}
					label="Delete"
					sx={btnStyles}
				/>,
			],
		},
	];
	function getRowId(row) {
		return row._id;
	}
	return (
		<Box sx={{ width: "100%" }}>
			<DataGrid
				autoHeight
				rows={products}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				pageSizeOptions={[5, 10, 15, 20]}
				checkboxSelection
				disableRowSelectionOnClick
				getRowId={getRowId}
				slots={{toolbar:GridToolbar}}
			/>
		</Box>
	);
}

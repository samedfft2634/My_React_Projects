import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useStockCalls from "../service/useStockCalls";

const PurchaseTable = () => {
	const { products } = useSelector((state) => state.stock);
	const { deleteStock } = useStockCalls();
	const getRowId = (row) => row._id;
	const columns = [
		{
			field: "_id",
			headerName: "#",
			flex: 1.4,
			minWidth: "150px",
			headerAlign: "center",
			description: "Product ID",
			align: "center",
			sortable: false,
			valueGetter: (params) => params.value.slice(-5),
		},
		{
			field: "categoryId",
			headerName: "Category",
			flex: 1,
			headerAlign: "center",
			align: "center",
			valueGetter: (params) => {
				// console.log(params)
				return params.row?.categoryId?.name;
			},
		},
		{
			field: "brandId",
			headerName: "Brand",
			flex: 1.2,
			headerAlign: "center",
			align: "center",
			valueGetter: (params) => params.row?.brandId?.name,
		},
		{
			field: "name",
			headerName: "Name",
			flex: 2.2,
			headerAlign: "center",
			align: "center",
		},
		{
			field: "quantity",
			headerName: "Stock",
			type: "number",
			flex: 1,
			headerAlign: "center",
			align: "center",
		},
		{
			field: "actions",
			type: "actions",
			headerName: "Actions",
			headerAlign: "center",
			getActions: (params) => [
				<GridActionsCellItem
					icon={<DeleteForeverIcon />}
					onClick={() => deleteStock("products", params.id)}
					label="Delete"
				/>,
			],
		},
	];
	return (
		<Box sx={{ width: "100%" }}>
			<DataGrid
				autoHeight
				rows={products}
				columns={columns}
				pageSizeOptions={[5, 10, 20, 50, 100]}
				checkboxSelection
				disableRowSelectionOnClick
				getRowId={getRowId}
				slots={{ toolbar: GridToolbar }}
			/>
		</Box>
	);
};

export default PurchaseTable;
